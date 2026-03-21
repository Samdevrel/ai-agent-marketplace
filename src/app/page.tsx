'use client';

import { useState } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  capabilities: string[];
  creator: string;
  installs: number;
}

const agents: Agent[] = [
  { id: '1', name: 'CodeAssist Pro', description: 'Full-stack coding assistant with debugging and deployment', category: 'Development', rating: 4.9, reviews: 2450, price: '$29/mo', capabilities: ['Code generation', 'Debugging', 'Testing', 'Deployment'], creator: 'DevTools Inc', installs: 45000 },
  { id: '2', name: 'DataAnalyst AI', description: 'Automated data analysis, visualization, and insights', category: 'Analytics', rating: 4.7, reviews: 1820, price: '$49/mo', capabilities: ['SQL queries', 'Visualization', 'Reports', 'ML models'], creator: 'DataCorp', installs: 32000 },
  { id: '3', name: 'ContentWriter Plus', description: 'SEO-optimized content generation for blogs and marketing', category: 'Content', rating: 4.8, reviews: 3200, price: '$19/mo', capabilities: ['Blog posts', 'SEO', 'Social media', 'Email'], creator: 'WriteAI', installs: 78000 },
  { id: '4', name: 'CustomerSupport Bot', description: '24/7 automated customer service with sentiment analysis', category: 'Support', rating: 4.6, reviews: 980, price: '$99/mo', capabilities: ['Live chat', 'Ticket routing', 'Knowledge base', 'Analytics'], creator: 'SupportAI', installs: 15000 },
  { id: '5', name: 'ResearchAssistant', description: 'Academic research, paper summarization, and citations', category: 'Research', rating: 4.9, reviews: 1560, price: '$15/mo', capabilities: ['Paper search', 'Summarization', 'Citations', 'Writing'], creator: 'AcademicAI', installs: 28000 },
  { id: '6', name: 'TradingBot Alpha', description: 'Automated crypto trading with risk management', category: 'Finance', rating: 4.5, reviews: 890, price: '$199/mo', capabilities: ['Auto trading', 'Risk mgmt', 'Signals', 'Portfolio'], creator: 'QuantAI', installs: 8500 },
];

const categories = ['All', 'Development', 'Analytics', 'Content', 'Support', 'Research', 'Finance'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const filteredAgents = selectedCategory === 'All'
    ? agents
    : agents.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-violet-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">AI Agent Marketplace</h1>
          <p className="text-gray-400 mt-2">Discover, deploy, and monetize AI agents</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-violet-400 p-4 text-center">
            <div className="text-3xl font-black text-violet-400">5,700+</div>
            <div className="text-sm text-gray-400">AI Agents</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">206K</div>
            <div className="text-sm text-gray-400">Total Installs</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">4.7</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">$2.4M</div>
            <div className="text-sm text-gray-400">Creator Earnings</div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-violet-500 border-violet-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Agents Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-violet-400 ${
                selectedAgent?.id === agent.id ? 'border-violet-400' : 'border-gray-700'
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-violet-400">{agent.name}</h3>
                    <p className="text-xs text-gray-500">{agent.creator}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-bold bg-violet-900/50 text-violet-400">
                    {agent.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{agent.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400">★</span>
                  <span className="font-bold">{agent.rating}</span>
                  <span className="text-gray-500">({agent.reviews} reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-400">{agent.price}</span>
                  <span className="text-xs text-gray-500">{agent.installs.toLocaleString()} installs</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Agent Details */}
        {selectedAgent && (
          <section className="bg-gray-900 border-4 border-violet-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-violet-400">{selectedAgent.name}</h2>
                <p className="text-gray-400">by {selectedAgent.creator}</p>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <p className="text-gray-300 mb-4">{selectedAgent.description}</p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Rating</div>
                <div className="text-2xl font-bold text-yellow-400">★ {selectedAgent.rating}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Reviews</div>
                <div className="text-2xl font-bold">{selectedAgent.reviews.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Price</div>
                <div className="text-2xl font-bold text-green-400">{selectedAgent.price}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Installs</div>
                <div className="text-2xl font-bold">{selectedAgent.installs.toLocaleString()}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-violet-400 mb-2">Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {selectedAgent.capabilities.map((cap) => (
                  <span key={cap} className="px-3 py-1 text-sm bg-gray-800 text-gray-400 border border-gray-700">
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-violet-500 text-white font-bold border-4 border-violet-400 hover:bg-violet-400">
              Install Agent
            </button>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How AI Agent Marketplace Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-violet-400 mb-2">Discover</h3>
              <p className="text-xs text-gray-400">Browse 5,700+ AI agents</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Deploy</h3>
              <p className="text-xs text-gray-400">One-click installation</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Integrate</h3>
              <p className="text-xs text-gray-400">Connect to your workflows</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Monetize</h3>
              <p className="text-xs text-gray-400">Earn from your agents</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-violet-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
