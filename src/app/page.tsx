'use client';

import { useState } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  avatar: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  capabilities: string[];
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Content Generator',
    description: 'Generate SEO-optimized blog posts, social media content, and marketing copy',
    avatar: '✍️',
    category: 'Content',
    price: 25,
    rating: 4.8,
    reviews: 1240,
    capabilities: ['Blog writing', 'Social media', 'Email copy', 'SEO optimization'],
  },
  {
    id: '2',
    name: 'Data Analyst',
    description: 'Analyze datasets, generate insights, and create visualizations',
    avatar: '📊',
    category: 'Analytics',
    price: 50,
    rating: 4.9,
    reviews: 890,
    capabilities: ['Data analysis', 'Visualization', 'Reporting', 'SQL queries'],
  },
  {
    id: '3',
    name: 'Code Assistant',
    description: 'Generate, debug, and explain code across 50+ programming languages',
    avatar: '💻',
    category: 'Development',
    price: 45,
    rating: 4.7,
    reviews: 2340,
    capabilities: ['Code generation', 'Debugging', 'Code review', 'Documentation'],
  },
  {
    id: '4',
    name: 'Customer Support',
    description: '24/7 automated customer support with natural conversation',
    avatar: '🎧',
    category: 'Customer',
    price: 35,
    rating: 4.6,
    reviews: 1560,
    capabilities: ['Live chat', 'Email support', 'Ticket resolution', 'FAQ'],
  },
  {
    id: '5',
    name: 'Research Assistant',
    description: 'Conduct deep research on any topic with citations',
    avatar: '📚',
    category: 'Research',
    price: 60,
    rating: 4.8,
    reviews: 670,
    capabilities: ['Literature review', 'Data collection', 'Analysis', 'Citations'],
  },
  {
    id: '6',
    name: 'Legal Review',
    description: 'Review contracts and legal documents for compliance',
    avatar: '⚖️',
    category: 'Legal',
    price: 150,
    rating: 4.9,
    reviews: 340,
    capabilities: ['Contract review', 'Compliance check', 'Risk analysis', 'Redlining'],
  },
];

const categories = ['All', 'Content', 'Analytics', 'Development', 'Customer', 'Research', 'Legal'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const filteredAgents = selectedCategory === 'All'
    ? agents
    : agents.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-indigo-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">AI Agent Marketplace</h1>
          <p className="text-gray-400 mt-2">Deploy ready-to-use AI agents in seconds</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-indigo-400 p-4 text-center">
            <div className="text-3xl font-black text-indigo-400">50K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">500+</div>
            <div className="text-sm text-gray-400">Agents Listed</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">$2.5M</div>
            <div className="text-sm text-gray-400">Revenue</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">4.7</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
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
                    ? 'bg-indigo-500 border-indigo-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Agents Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-indigo-400 ${
                selectedAgent?.id === agent.id ? 'border-indigo-400 bg-indigo-900/20' : 'border-gray-700'
              }`}
            >
              <div className="p-6">
                <div className="text-6xl mb-4">{agent.avatar}</div>
                <h3 className="font-bold text-indigo-400 text-xl mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{agent.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold">{agent.rating}</span>
                  <span className="text-gray-500">★</span>
                  <span className="text-xs text-gray-500">({agent.reviews.toLocaleString()} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {agent.capabilities.slice(0, 3).map((cap, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-bold bg-indigo-900/30 text-indigo-400">
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-400">${agent.price}/mo</span>
                  <button className="px-4 py-2 bg-indigo-500 text-white font-bold border-2 border-indigo-400 hover:bg-indigo-400">
                    Deploy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Selected Agent Details */}
        {selectedAgent && (
          <section className="bg-gray-900 border-4 border-indigo-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-indigo-400">{selectedAgent.name}</h2>
                <p className="text-sm text-gray-400">{selectedAgent.description}</p>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Price</div>
                <div className="text-2xl font-bold text-green-400">${selectedAgent.price}/mo</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Rating</div>
                <div className="text-2xl font-bold text-indigo-400">{selectedAgent.rating}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Reviews</div>
                <div className="text-2xl font-bold">{selectedAgent.reviews.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Category</div>
                <div className="text-2xl font-bold">{selectedAgent.category}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-indigo-400 mb-3">Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {selectedAgent.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-bold bg-gray-800 text-gray-400 border border-gray-600"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-yellow-900/30 border border-yellow-600 text-sm">
                <div className="font-bold text-yellow-400 mb-1">⚡ Instant Deployment</div>
                <div className="text-gray-400">
                  Deploy in under 30 seconds. No setup required.
                </div>
              </div>
              <div className="p-4 bg-blue-900/30 border border-blue-600 text-sm">
                <div className="font-bold text-blue-400 mb-1">🔒 Secure by Default</div>
                <div className="text-gray-400">
                  Enterprise-grade security. Data never leaves your infrastructure.
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-indigo-500 text-white font-bold border-4 border-indigo-400 hover:bg-indigo-400 text-xl">
              Deploy {selectedAgent.name}
            </button>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How AI Agent Marketplace Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-indigo-400 mb-2">Browse Agents</h3>
              <p className="text-xs text-gray-400">Find agents for your needs</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Deploy</h3>
              <p className="text-xs text-gray-400">Click deploy in seconds</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Configure</h3>
              <p className="text-xs text-gray-400">Set up prompts and tools</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Start Working</h3>
              <p className="text-xs text-gray-400">Agent runs 24/7</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-indigo-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
