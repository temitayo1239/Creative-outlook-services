// src/pages/ChatPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { mockDesigners } from "@/data/mockDesigners";
import { motion } from "framer-motion";

interface ChatMessage {
    text: string;
    sender: string;
    timestamp: string;
    type?: "text" | "image";
}

const ChatPage = () => {
    const { email } = useParams();
    const navigate = useNavigate();
    const decodedEmail = decodeURIComponent(email || "");
    const designer = mockDesigners.find((d) => d.email === decodedEmail);

    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [attachedImage, setAttachedImage] = useState<string | null>(null);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem(`chat_${decodedEmail}`);
        if (saved) setMessages(JSON.parse(saved));
    }, [decodedEmail]);

    useEffect(() => {
        localStorage.setItem(`chat_${decodedEmail}`, JSON.stringify(messages));
    }, [messages, decodedEmail]);

    useEffect(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    const handleSend = () => {
        if (!input.trim() && !attachedImage) return;

        const newMessage: ChatMessage = {
            text: attachedImage || input,
            sender: "user",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: attachedImage ? "image" : "text",
        };

        setMessages((prev) => [...prev, newMessage]);
        setInput("");
        setAttachedImage(null);
    };



    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setInput((prev) => prev + emojiData.emoji);
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
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <div className="flex items-center gap-4 bg-purple-700 text-white p-4 shadow">
                <button onClick={() => navigate(-1)} className="text-white text-xl">&larr;</button>
                <img
                    src={designer.profilePhoto}
                    alt={designer.fullname}
                    className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                    <h2 className="text-sm font-semibold">{designer.fullname}</h2>
                    <p className="text-xs text-green-200">Online</p>
                </div>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`rounded-lg px-4 py-2 text-sm max-w-[70%] relative ${msg.sender === "user"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-gray-900 border"
                                }`}
                        >
                            {msg.type === "image" ? (
                                <img src={msg.text} alt="attachment" className="rounded-md w-full" />
                            ) : (
                                <span>{msg.text}</span>
                            )}
                            <div className="text-xs text-gray-400 mt-1 text-right">{msg.timestamp}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input Area */}
            <div className="bg-white border-t p-3 flex items-center gap-2">
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
                    className="flex-1 border rounded-full px-4 py-2 text-sm"
                />
                <button
                    onClick={handleSend}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm"
                >
                    Send
                </button>
            </div>

            {/* Emoji Picker */}
            {showEmojiPicker && (
                <div className="absolute bottom-20 left-4 z-50">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            )}
        </div>
    );
};

export default ChatPage;
