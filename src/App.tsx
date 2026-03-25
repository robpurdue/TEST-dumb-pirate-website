/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Anchor, Compass, Map, Ship, Skull, Coins, Waves } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950 z-10" />
          <img
            src="https://picsum.photos/seed/pirate-ship/1920/1080?blur=2"
            alt="Pirate Ship at Sea"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Skull className="w-20 h-20 mx-auto mb-6 text-amber-500" />
            <h1 className="text-7xl md:text-9xl font-pirate text-amber-500 mb-4 tracking-wider">
              Pirate's Cove
            </h1>
            <p className="text-xl md:text-2xl font-light text-stone-300 max-w-2xl mx-auto mb-10">
              Set sail for the horizon where legends are born and treasures are buried deep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold rounded-sm transition-colors flex items-center justify-center gap-2 group">
                <Ship className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Join the Crew
              </button>
              <button className="px-8 py-4 border border-stone-700 hover:border-amber-500 transition-colors font-bold rounded-sm flex items-center justify-center gap-2">
                <Map className="w-5 h-5" />
                View the Map
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <Waves className="w-8 h-8 text-stone-500" />
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Compass className="w-10 h-10 text-amber-500" />}
            title="Navigate the Unknown"
            description="Our charts are drawn from the tales of old salts and the stars themselves."
          />
          <FeatureCard
            icon={<Coins className="w-10 h-10 text-amber-500" />}
            title="Bountiful Loot"
            description="Every voyage promises a share of the spoils for those brave enough to take it."
          />
          <FeatureCard
            icon={<Anchor className="w-10 h-10 text-amber-500" />}
            title="Steadfast Loyalty"
            description="The code of the sea binds us together. No man left behind."
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-stone-900/50">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-pirate text-amber-500 mb-6">The Legend of the Black Pearl</h2>
            <p className="text-stone-400 leading-relaxed mb-6">
              For centuries, the Black Pearl has haunted the dreams of every sailor from Tortuga to the East Indies. 
              They say she's faster than the wind and carries a crew that can never die.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Are ye ready to sign the articles and embark on a journey that will take ye to the very edge of the world?
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 border border-amber-500/20 rounded-lg" />
            <img
              src="https://picsum.photos/seed/old-map/800/600"
              alt="Ancient Map"
              className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-900 text-center text-stone-500">
        <p className="font-pirate text-2xl text-amber-500/50 mb-4 tracking-widest">PIRATE'S COVE</p>
        <p className="text-sm">© 1726 Pirate's Cove. All rights reserved. No parley accepted.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 bg-stone-900/40 border border-stone-800 rounded-lg hover:border-amber-500/30 transition-all"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-pirate text-stone-100 mb-4">{title}</h3>
      <p className="text-stone-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

