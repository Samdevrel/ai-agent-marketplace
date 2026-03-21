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
  creator: string;
  capabilities: string[];
  deployed: number;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'CodeAssist Pro',
    description: 'Full-stack development agent with code review, testing, and deployment capabilities.',
    category: 'Development',
    rating: 4.9,
    reviews: 2450,
    price: '$49/mo',
    creator: 'DevTools Inc',
    capabilities: ['Code Review', 'Testing', 'Deployment', 'Documentation'],
    deployed: 12500,
  },
  {
    id: '2',
    name: 'DataAnalyst AI',
    description: 'Advanced data analysis, visualization, and reporting agent.',
    category: 'Analytics',
    rating: 4.8,
    reviews: 1890,
    price: '$79/mo',
    creator: 'AnalyticsCo',
    capabilities: ['SQL', 'Python', 'Visualization', 'Reports'],
    deployed: 8900,
  },
  {
    id: '3',
    name: 'ContentWriter',
    description: 'SEO-optimized content creation, blog posts, and marketing copy.',
    category: 'Marketing',
    rating: 4.7,
    reviews: 3200,
    price: '$29/mo',
    creator: 'WriteAI Labs',
    capabilities: ['Blog Posts', 'SEO', 'Social Media', 'Copywriting'],
    deployed: 25000,
  },
  {
    id: '4',
    name: 'CustomerSupport Bot',
    description: '24/7 customer support with multi-language support and escalation.',
    category: 'Support',
    rating: 4.6,
    reviews: 4500,
    price: '$99/mo',
    creator: 'SupportAI',
    capabilities: ['Chat', 'Email', 'Tickets', 'Escalation'],
    deployed: 18000,
  },
  {
    id: '5',
    name: 'ResearchAssistant',
    description: 'Academic and market research with citation management.',
    category: 'Research',
    rating: 4.8,
    reviews: 890,
    price: '$59/mo',
    creator: 'ResearchLab',
    capabilities: ['Literature Review', 'Citations', 'Summaries', 'Analysis'],
    deployed: 4500,
  },
  {
    id: '6',
    name: 'TradingBot',
    description: 'Automated trading signals and portfolio management.',
    category: 'Finance',
    rating: 4.5,
    reviews: 1200,
    price: '$199/mo',
    creator: 'FinanceAI',
    capabilities: ['Signals', 'Portfolio', 'Risk Management', 'Backtesting'],
    deployed: 3200,
  },
];

const categories = ['All', 'Development', 'Analytics', 'Marketing', 'Support', 'Research', 'Finance'];

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
            <div className="text-sm text-gray-400">Agents</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">72K+</div>
            <div className="text-sm text-gray-400">Deployments</div>
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

        {/* Agent Grid */}
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
                  <h3 className="font-bold text-violet-400 text-lg">{agent.name}</h3>
                  <span className="px-2 py-1 text-xs font-bold bg-violet-900/50 text-violet-400">
                    {agent.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{agent.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400">★</span>
                  <span className="font-bold">{agent.rating}</span>
                  <span className="text-gray-500">({agent.reviews.toLocaleString()} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {agent.capabilities.slice(0, 3).map((cap) => (
                    <span key={cap} className="px-2 py-1 text-xs bg-gray-800 text-gray-400">
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                  <div>
                    <div className="text-xs text-gray-500">by {agent.creator}</div>
                    <div className="text-xs text-gray-500">{agent.deployed.toLocaleString()} deployed</div>
                  </div>
                  <div className="font-bold text-green-400">{agent.price}</div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Selected Agent Details */}
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
                <div className="text-sm text-gray-400">Deployed</div>
                <div className="text-2xl font-bold">{selectedAgent.deployed.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Price</div>
                <div className="text-2xl font-bold text-green-400">{selectedAgent.price}</div>
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
              Deploy Agent
            </button>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-violet-400 mb-2">Browse</h3>
              <p className="text-xs text-gray-400">Find the perfect agent</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Deploy</h3>
              <p className="text-xs text-gray-400">One-click deployment</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Configure</h3>
              <p className="text-xs text-gray-400">Customize for your needs</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Scale</h3>
              <p className="text-xs text-gray-400">Grow with your business</p>
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
