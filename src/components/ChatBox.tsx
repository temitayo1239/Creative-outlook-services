// src/components/ChatBox.tsx
import { useEffect, useRef, useState } from "react";
import { mockDesigners } from "@/data/mockDesigners";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface Props {
    email: string;
}

const ChatBox = ({ email }: Props) => {
    const decodedEmail = decodeURIComponent(email);
    const designer = mockDesigners.find((d) => d.email === decodedEmail);
    const chatRef = useRef<HTMLDivElement>(null);

    const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
    const [input, setInput] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

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

    const sendMessage = () => {
        if (input.trim()) {
            if (editingIndex !== null) {
                const updated = [...messages];
                updated[editingIndex].text = input;
                setMessages(updated);
                setEditingIndex(null);
            } else {
                setMessages([...messages, { text: input, sender: "user" }]);
                setTimeout(() => {
                    setMessages((prev) => [
                        ...prev,
                        { text: `Thanks for reaching out about ${designer?.userType}`, sender: "designer" },
                    ]);
                }, 800);
            }
            setInput("");
            setShowEmojiPicker(false);
        }
    };

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setInput((prev) => prev + emojiData.emoji);
    };

    const copyMessage = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Message copied!");
    };

    const deleteMessage = (index: number) => {
        const updated = [...messages];
        updated.splice(index, 1);
        setMessages(updated);
    };

    return (
        <div className="border rounded bg-white shadow">
            <div className="bg-purple-600 text-white p-4 rounded-t">
                Chat with {designer?.fullname || "Designer"}
            </div>
            <div ref={chatRef} className="max-h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <div className="relative group max-w-xs">
                            <div
                                className={`p-2 rounded-lg text-sm ${msg.sender === "user" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {msg.text}
                            </div>

                            {/* Message Options */}
                            <div className="absolute top-0 right-0 hidden group-hover:flex gap-2 text-xs bg-white shadow px-2 py-1 rounded z-10">
                                <button onClick={() => setEditingIndex(index)}>Edit</button>
                                <button onClick={() => copyMessage(msg.text)}>Copy</button>
                                <button onClick={() => deleteMessage(index)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 border-t px-4 py-3 bg-white relative">
                <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
                {showEmojiPicker && (
                    <div className="absolute bottom-14 left-2 z-50">
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                )}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder={editingIndex !== null ? "Editing message..." : "Type a message..."}
                    className="flex-1 border rounded-full px-3 py-2 text-sm"
                />
                <button
                    onClick={sendMessage}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm"
                >
                    {editingIndex !== null ? "Update" : "Send"}
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
