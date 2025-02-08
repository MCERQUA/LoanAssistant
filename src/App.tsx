import React, { useState } from 'react';
import { ChatWindow } from './components/ChatWindow';
import { TopMenu } from './components/TopMenu';
import { BottomMenu } from './components/BottomMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 overflow-hidden">
      {/* Top Menu */}
      <div className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-4xl mx-auto px-3 py-2">
          <TopMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      
      {/* Main Content Area - Added pb-20 to account for bottom menu */}
      <div className="flex-1 overflow-hidden flex flex-col px-3 pb-20">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center h-full">
          {/* Image Container */}
          <div className="w-full max-w-2xl pt-4 pb-2">
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/Morty-Gauge.jpg" 
                alt="Morty Gauge" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Chat Window - Fixed height */}
          <div className="w-full h-[calc(100vh-20rem)]">
            <ChatWindow />
          </div>
        </div>
      </div>

      {/* Side Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-800/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-gray-700/50 p-6 z-50`}
      >
        <nav className="space-y-4">
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Loan Calculator</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Apply Now</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
          <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      {/* Bottom Menu */}
      <BottomMenu />
    </div>
  );
}

export default App;
