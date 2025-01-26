import React from 'react';
import { Home, FileText, HelpCircle } from 'lucide-react';

export function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 py-2 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
        <button className="flex-1 bg-gradient-to-b from-gray-700 to-gray-800 px-4 py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>
        
        <button className="flex-1 bg-gradient-to-b from-gray-700 to-gray-800 px-4 py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
          <FileText className="w-5 h-5" />
          <span>Docs</span>
        </button>
        
        <button className="flex-[1.2] bg-gradient-to-b from-blue-600 to-blue-700 px-6 py-4 rounded-xl text-white font-semibold shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all transform hover:-translate-y-1 active:translate-y-0">
          Apply Now
        </button>
        
        <button className="flex-1 bg-gradient-to-b from-gray-700 to-gray-800 px-4 py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
          <HelpCircle className="w-5 h-5" />
          <span>Help</span>
        </button>
      </div>
    </div>
  );
}