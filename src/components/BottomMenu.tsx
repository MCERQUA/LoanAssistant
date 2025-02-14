import React from 'react';
import { Info, Twitter } from 'lucide-react';

export function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md border-t border-gray-800 py-3 px-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-2">
        <button className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900 px-2 py-2 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2">
          <Info className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm">About Morty</span>
        </button>
        
        <a 
          href="https://app.relianthomefunding.com/homehub/signup/arallo@rhfny.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-b from-blue-900 to-blue-950 px-3 py-2 rounded-xl text-white font-semibold shadow-lg hover:from-blue-800 hover:to-blue-900 transition-all transform hover:-translate-y-1 active:translate-y-0 text-sm text-center"
        >
          Connect With Rallo
        </a>
        
        <a 
          href="https://twitter.com/Morty_Gage"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900 px-2 py-2 rounded-xl text-gray-200 font-medium shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2"
        >
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm">Follow Morty</span>
        </a>
      </div>
    </div>
  );
}
