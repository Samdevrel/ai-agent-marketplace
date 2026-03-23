'use client';

import { useState } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  model: string;
  price: number;
  rating: number;
  reviews: number;
  features: string[];
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Research Bot Pro',
    description: 'Deep research with 50+ tools. Academic papers, reports, analysis.',
    category: 'Research',
    model: 'GPT-5 + RAG',
    price: 29,
    rating: 4.8,
    reviews: 342,
    features: ['PubMed access', 'Financial data', 'Code analysis', 'Legal docs'],
  },
  {
    id: '2',
    name: 'Sales Bot Elite',
    description: 'Autonomous outreach with personalization at scale.',
    category: 'Sales',
    model: 'Claude 4 + Web',
    price: 49,
    rating: 4.9,
    reviews: 521,
    features: ['Email personalization', 'CRM integration', 'Follow-up logic', 'Analytics'],
  },
  {
    id: '3',
    name: 'Support AI Agent',
    description: '24/7 customer support with multi-channel handling.',
    category: 'Support',
    model: 'GPT-5 Turbo',
    price: 19,
    rating: 4.6,
    reviews: 892,
    features: ['Email', 'Chat', 'Phone', 'Knowledge base'],
  },
  {
    id: '4',
    name: 'Content Generator',
    description: 'SEO-optimized content for blogs, social, marketing.',
    category: 'Content',
    model: 'Gemini 3',
    price: 39,
    rating: 4.7,
    reviews: 218,
    features: ['SEO optimization', 'Multi-platform', 'Brand voice', 'Templates'],
  },
  {
    id: '5',
    name: 'Code Review Agent',
    description: 'Automated PR review with security scanning.',
    category: 'Engineering',
    model: 'Claude 4 + Code',
    price: 59,
    rating: 4.9,
    reviews: 167,
    features: ['Security scan', 'Performance', 'Documentation', 'Style guide'],
  },
  {
    id: '6',
    name: 'Finance Analyst',
    description: 'Financial analysis, reports, forecasting tools.',
    category: 'Finance',
    model: 'GPT-5 Finance',
    price: 45,
    rating: 4.8,
    reviews: 293,
    features: ['Balance sheets', 'Forecasts', 'Compliance', 'Reports'],
  },
];

const categories = ['All', 'Research', 'Sales', 'Support', 'Content', 'Engineering', 'Finance'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [apiKey, setApiKey] = useState('');

  const filteredAgents = selectedCategory === 'All'
    ? agents
    : agents.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-indigo-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">AI Agent Marketplace</h1>
          <p className="text-gray-400 mt-2">Autonomous agents for every workflow</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-indigo-400 p-4 text-center">
            <div className="text-3xl font-black text-indigo-400">6</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">150K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">4.8</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">$12.5K</div>
            <div className="text-sm text-gray-400">Daily Revenue</div>
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
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-indigo-400 ${
                selectedAgent?.id === agent.id ? 'border-indigo-400 bg-indigo-900/20' : 'border-gray-700'
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 text-xs font-bold bg-indigo-900/50 text-indigo-400">
                    {agent.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-bold">{agent.rating}</span>
                    <span className="text-gray-500">({agent.reviews})</span>
                  </div>
                </div>
                <h3 className="font-bold text-indigo-400 text-lg mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{agent.description}</p>

                <div className="space-y-2 text-sm">
                  {agent.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <span className="font-bold text-indigo-400">${agent.price}/mo</span>
                  <span className="text-xs text-gray-500">{agent.model}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Agent Details */}
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

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Category</div>
                <div className="text-xl font-bold">{selectedAgent.category}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Model</div>
                <div className="text-xl font-bold">{selectedAgent.model}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Price</div>
                <div className="text-xl font-bold text-indigo-400">${selectedAgent.price}/mo</div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">Enter API Key</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full p-3 bg-gray-900 border-2 border-indigo-400 text-white font-mono text-sm"
              />
            </div>

            <button className="w-full py-4 bg-indigo-500 text-white font-bold border-4 border-indigo-400 hover:bg-indigo-400 text-xl">
              Deploy Agent
            </button>

            <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-600 text-sm">
              <div className="font-bold text-yellow-400 mb-1">⚡ Quick Start</div>
              <div className="text-gray-400">
                Enter your OpenAI/Anthropic API key to deploy. $10 free credits included.
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How AI Agent Marketplace Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-indigo-400 mb-2">Browse</h3>
              <p className="text-xs text-gray-400">Find agents by category</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Configure</h3>
              <p className="text-xs text-gray-400">Set up API key & prompts</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Deploy</h3>
              <p className="text-xs text-gray-400">Deploy in seconds</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Use</h3>
              <p className="text-xs text-gray-400">Run agents autonomously</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-indigo-400 hover:underline">@samdevrel</a>
          <button
            onClick={() => window.location.href = '/docs/overview'}
            className="w-full py-4 bg-purple-500 text-white font-bold border-4 border-purple-400 hover:bg-purple-400 mb-4"
          >
            {buttonText}
          </button>
                    </p>
        </footer>
      </div>
    </main>
  );
}
