import React from 'react';
import { Bot } from 'lucide-react';

export function TopMenu() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Morty Gage
          </h1>
          <span className="text-xs sm:text-sm text-gray-500">AI Loan Assistant</span>
        </div>
      </div>
    </div>
  );
}
