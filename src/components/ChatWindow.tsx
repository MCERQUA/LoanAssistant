import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot } from 'lucide-react';
import { openaiService } from '../services/openai';

interface Message {
  content: string;
  isBot: boolean;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const initializeChat = async () => {
        try {
          const response = await openaiService.sendMessage("who are you and why are you here");
          setMessages([{ content: response, isBot: true }]);
        } catch (error) {
          console.error('Error initializing chat:', error);
          setMessages([{
            content: "Hello! I'm Morty Gage, your AI mortgage and loan assistant. How can I help you today?",
            isBot: true,
          }]);
        } finally {
          setIsLoading(false);
        }
      };
      initializeChat();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    setMessages(prev => [...prev, { content: userMessage, isBot: false }]);

    try {
      const response = await openaiService.sendMessage(userMessage);
      setMessages(prev => [...prev, { content: response, isBot: true }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        {
          content: "I apologize, but I'm having trouble processing your request. Please try again later.",
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col rounded-lg shadow-xl relative border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-lg opacity-95"></div>
      <div className="absolute inset-0 rounded-lg border border-gray-600/50 backdrop-blur-sm"></div>

      <div className="relative flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.isBot 
                  ? 'bg-gradient-to-br from-gray-600 to-gray-700 rounded-tl-sm' 
                  : 'bg-gradient-to-br from-gray-500 to-gray-600 rounded-tr-sm'
              }`}>
                {message.isBot && (
                  <div className="flex items-center gap-2 mb-1">
                    <Bot className="w-4 h-4 text-gray-300" />
                    <span className="text-sm font-medium text-gray-200">Morty Gage</span>
                  </div>
                )}
                <p className="text-gray-100 whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-gradient-to-br from-gray-600 to-gray-700 rounded-tl-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-gray-300" />
                  <span className="text-sm font-medium text-gray-200">Morty Gage</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span>Thinking</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 border-t border-gray-600/50 p-3 bg-gradient-to-b from-gray-600/90 to-gray-700/90 backdrop-blur-sm">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about mortgages, loans, interest rates..."
              className="flex-1 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 border border-gray-500 placeholder-gray-400 text-gray-100"
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-lg px-3 py-2 transition-all duration-200 flex items-center gap-2 shadow-lg ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:from-blue-400 hover:to-blue-500 hover:shadow-blue-700/50 hover:-translate-y-0.5'
              }`}
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">{isLoading ? 'Sending...' : 'Send'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
