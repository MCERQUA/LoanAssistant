import React from 'react';
import { Menu, Bot, X } from 'lucide-react';

interface TopMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function TopMenu({ isOpen, onToggle }: TopMenuProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Morty Gauge
          </h1>
          <span className="text-xs sm:text-sm text-gray-400">AI Loan Assistant</span>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
        )}
      </button>
    </div>
  );
}
