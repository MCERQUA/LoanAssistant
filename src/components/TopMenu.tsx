import React from 'react';
import { Menu, Bot, X } from 'lucide-react';

interface TopMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function TopMenu({ isOpen, onToggle }: TopMenuProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <Bot className="w-8 h-8 text-blue-400" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI Loan Assistant
        </h1>
      </div>
      <button
        onClick={onToggle}
        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-300" />
        )}
      </button>
    </div>
  );
}