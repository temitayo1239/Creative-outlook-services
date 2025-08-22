import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { mockDesigners } from "@/data/mockDesigners";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { isMobile } from "react-device-detect";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { motion } from "framer-motion";

interface Message {
    text: string;
    sender: "user" | "designer";
    timestamp: string;
    type?: "text" | "image";
}

const DesignerProfile = () => {
    const { email } = useParams();
    const decodedEmail = decodeURIComponent(email || "");
    const designer = mockDesigners.find((d) => d.email === decodedEmail);

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [attachedImage, setAttachedImage] = useState<string | null>(null);
    const [showLiveChat, setShowLiveChat] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem(`chat_${decodedEmail}`);
        if (saved) setMessages(JSON.parse(saved));
    }, [decodedEmail]);

    useEffect(() => {
        localStorage.setItem(`chat_${decodedEmail}`, JSON.stringify(messages));
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, decodedEmail]);

    const handleSend = () => {
        if (!input.trim() && !attachedImage) return;
        const newMsg: Message = {
            text: attachedImage || input,
            sender: "user",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: attachedImage ? "image" : "text"
        };

        if (editIndex !== null) {
            const updated = [...messages];
            updated[editIndex] = newMsg;
            setMessages(updated);
            setEditIndex(null);
        } else {
            setMessages((prev) => [...prev, newMsg]);
        }

        setInput("");
        setAttachedImage(null);
    };

    const handleEdit = (index: number) => {
        setInput(messages[index].text);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        const updated = [...messages];
        updated.splice(index, 1);
        setMessages(updated);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Message copied!");
    };

    const handleEmojiClick = (emoji: EmojiClickData) => {
        setInput((prev) => prev + emoji.emoji);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAttachedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!designer) {
        return <div className="p-6 text-center text-red-500">Designer not found</div>;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="flex items-center gap-6 mb-6">
                    <img
                        src={designer.profilePhoto}
                        alt={designer.fullname}
                        className="w-20 h-20 rounded-full object-cover border"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">{designer.fullname}</h1>
                        <p className="text-muted-foreground">{designer.userType}</p>
                        <p className="text-sm text-muted-foreground">{designer.company}</p>
                    </div>
                </div>

                {/* Toggle Chat */}
                <div className="mb-6">
                    <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => {
                            if (isMobile) {
                                window.location.href = `/chat/${encodeURIComponent(designer.email)}`;
                            } else {
                                setShowLiveChat((prev) => !prev);
                            }
                        }}
                    >
                        {isMobile ? "Let's Chat" : showLiveChat ? "Close Chat" : "Let's Chat"}
                    </Button>
                </div>

                {/* Inline Chat */}
                {!isMobile && showLiveChat && (
                    <div className="border rounded-lg p-4 mb-8 bg-white relative">
                        <h2 className="text-lg font-semibold mb-4">Live Chat</h2>
                        <div ref={chatRef} className="h-60 overflow-y-auto space-y-3 mb-3 pr-2">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[70%] px-4 py-2 rounded-lg relative text-sm ${msg.sender === "user"
                                                ? "bg-purple-600 text-white"
                                                : "bg-gray-100 text-gray-900"
                                            }`}
                                    >
                                        {msg.type === "image" ? (
                                            <img src={msg.text} alt="upload" className="rounded-md max-w-full" />
                                        ) : (
                                            <span>{msg.text}</span>
                                        )}
                                        <div className="text-xs mt-1 text-right text-gray-300">{msg.timestamp}</div>
                                        {msg.sender === "user" && (
                                            <div className="absolute -bottom-5 right-0 flex gap-2 text-xs text-gray-400">
                                                <button onClick={() => handleEdit(idx)}>✏️</button>
                                                <button onClick={() => handleCopy(msg.text)}>📋</button>
                                                <button onClick={() => handleDelete(idx)}>🗑️</button>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="text-2xl">😊</button>
                            <label className="text-2xl cursor-pointer">📎
                                <input type="file" onChange={handleFileUpload} className="hidden" accept="image/*" />
                            </label>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                className="flex-1 border px-4 py-2 rounded-full text-sm"
                            />
                            <Button className="bg-purple-600 text-white" onClick={handleSend}>
                                {editIndex !== null ? "Update" : "Send"}
                            </Button>
                        </div>

                        {showEmojiPicker && (
                            <div className="absolute z-50 mt-2">
                                <EmojiPicker onEmojiClick={handleEmojiClick} />
                            </div>
                        )}
                    </div>
                )}

                {/* Projects */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Projects</h2>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div className="bg-gray-200 h-32 rounded-lg" />
                        <div className="bg-gray-200 h-32 rounded-lg" />
                        <div className="bg-gray-200 h-32 rounded-lg" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DesignerProfile;
