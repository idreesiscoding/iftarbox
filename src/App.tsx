import React from 'react';
import { Citrus as Fruit, Moon, Heart, Clock, Package, MessageCircle } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919876543210?text=Hi! I would like to order an Iftar box.', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80')] bg-cover bg-center"
            style={{ backgroundPosition: '50% 30%' }}
          />
          <div className="absolute inset-0 bg-emerald-900/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2 text-2xl font-nexa text-white">
              <Moon className="text-emerald-300 animate-pulse" />
              <span>IftarBox.in</span>
            </div>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in font-nexa text-white">
              Healthy & Blessed
              <span className="block text-emerald-300">Ramadan Iftar Boxes</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 font-glacial">
              Nourish your soul with our carefully curated iftar boxes, filled with fresh fruits and wholesome delights
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-colors font-spartan font-semibold flex items-center gap-2 shadow-lg mx-auto"
            >
              <MessageCircle size={24} />
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 p-8 rounded-2xl transform hover:scale-105 transition-transform shadow-md">
            <Fruit className="text-emerald-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2 font-nexa text-emerald-800">Fresh Fruits</h3>
            <p className="text-gray-600 font-glacial">Handpicked seasonal fruits for a healthy iftar</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl transform hover:scale-105 transition-transform shadow-md">
            <Clock className="text-emerald-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2 font-nexa text-emerald-800">Timely Delivery</h3>
            <p className="text-gray-600 font-glacial">Delivered fresh before iftar time</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl transform hover:scale-105 transition-transform shadow-md">
            <Package className="text-emerald-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2 font-nexa text-emerald-800">Custom Boxes</h3>
            <p className="text-gray-600 font-glacial">Personalized iftar boxes for your needs</p>
          </div>
        </div>
      </div>

      {/* Featured Box */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-[url('https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-3xl overflow-hidden">
          <div className="bg-emerald-900/80 p-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6 font-nexa text-white">Special Ramadan Box</h2>
              <ul className="space-y-3 mb-8 font-glacial text-white">
                <li className="flex items-center gap-2">
                  <Heart className="text-emerald-300" size={20} />
                  Fresh dates and mixed fruits
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="text-emerald-300" size={20} />
                  Healthy nuts and dry fruits
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="text-emerald-300" size={20} />
                  Natural fruit juices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 font-glacial">
        <p>Made with <Heart className="inline text-emerald-500" size={16} /> for the blessed month of Ramadan</p>
      </footer>
    </div>
  );
}

export default App;