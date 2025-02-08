import React from 'react';
import ChatWindow from './components/ChatWindow';
import { TopMenu } from './components/TopMenu';
import { BottomMenu } from './components/BottomMenu';

function App() {
  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 overflow-hidden">
      {/* Top Menu */}
      <div className="bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-4xl mx-auto px-3 py-2">
          <TopMenu />
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden flex flex-col px-3 pb-16">
        <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col items-center">
          {/* Image Container */}
          <div className="pt-4 pb-2 w-full max-w-2xl">
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/Morty-Gage.jpg" 
                alt="Morty Gage" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Chat Window */}
          <div className="w-full flex-1 min-h-0">
            <ChatWindow />
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <BottomMenu />
    </div>
  );
}

export default App;
