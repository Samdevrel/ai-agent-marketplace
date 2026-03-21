'use client';

import { useState } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  features: string[];
  tools: string[];
  verified: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Research Bot',
    description: 'Automate literature reviews and research synthesis with AI',
    category: 'Research',
    price: 99,
    rating: 4.8,
    reviews: 234,
    features: ['PDF Analysis', 'Citation Generation', 'Summary Creation', 'Export to LaTeX'],
    tools: ['OpenAI', 'Pinecone', 'PDF.js'],
    verified: true,
  },
  {
    id: '2',
    name: 'Code Review Agent',
    description: 'Automated PR review with security checks and best practices',
    category: 'Developer',
    price: 49,
    rating: 4.6,
    reviews: 189,
    features: ['Security Scanning', 'Style Checking', 'Test Generation', 'Documentation'],
    tools: ['GitHub', 'ESLint', 'Prettier'],
    verified: true,
  },
  {
    id: '3',
    name: 'Customer Support Bot',
    description: '24/7 AI support with intent detection and resolution',
    category: 'Business',
    price: 199,
    rating: 4.9,
    reviews: 456,
    features: ['Multi-language', 'FAQ Learning', 'Ticket Routing', 'Sentiment Analysis'],
    tools: ['OpenAI', 'Slack', 'Zendesk'],
    verified: true,
  },
  {
    id: '4',
    name: 'Content Writer',
    description: 'SEO-optimized blog posts, emails, and social media',
    category: 'Marketing',
    price: 79,
    rating: 4.5,
    reviews: 312,
    features: ['SEO Optimization', 'Plagiarism Check', 'Style Variations', 'Bulk Generation'],
    tools: ['OpenAI', 'SurferSEO', 'Grammarly'],
    verified: false,
  },
  {
    id: '5',
    name: 'Data Analyst',
    description: 'Transform raw data into insights with SQL and visualization',
    category: 'Analytics',
    price: 149,
    rating: 4.7,
    reviews: 156,
    features: ['SQL Query Generation', 'Chart Creation', 'Dashboard Builder', 'Data Cleaning'],
    tools: ['OpenAI', 'Chart.js', 'PostgreSQL'],
    verified: true,
  },
  {
    id: '6',
    name: 'Virtual Assistant',
    description: 'Schedule meetings, manage emails, and handle tasks',
    category: 'Productivity',
    price: 59,
    rating: 4.4,
    reviews: 678,
    features: ['Calendar Sync', 'Email Management', 'Task Prioritization', 'Reminder System'],
    tools: ['OpenAI', 'Google Calendar', 'Gmail'],
    verified: false,
  },
];

const categories: Category[] = [
  { id: 'All', name: 'All', icon: '🎯' },
  { id: 'Research', name: 'Research', icon: '🔬' },
  { id: 'Developer', name: 'Developer', icon: '💻' },
  { id: 'Business', name: 'Business', icon: '💼' },
  { id: 'Marketing', name: 'Marketing', icon: '📈' },
  { id: 'Analytics', name: 'Analytics', icon: '📊' },
  { id: 'Productivity', name: 'Productivity', icon: '⚡' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const filteredAgents = selectedCategory === 'All'
    ? agents
    : agents.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-pink-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">AI Agent Marketplace</h1>
          <p className="text-gray-400 mt-2">Discover and deploy autonomous AI agents</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-pink-400 p-4 text-center">
            <div className="text-3xl font-black text-pink-400">50+</div>
            <div className="text-sm text-gray-400">Available Agents</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">2.4K</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">4.6</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">$10K+</div>
            <div className="text-sm text-gray-400">Monthly Revenue</div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-pink-500 border-pink-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
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
              className={`cursor-pointer transition-all ${
                selectedAgent?.id === agent.id ? 'ring-4 ring-pink-400' : ''
              }`}
            >
              <div className="bg-gray-900 border-4 border-gray-700 p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-pink-400 text-lg">{agent.name}</h3>
                      {agent.verified && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-pink-900 text-pink-400">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{agent.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-bold text-2xl text-green-400">${agent.price}<span className="text-sm text-gray-400">/mo</span></div>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-bold">{agent.rating}</span>
                      <span className="text-gray-500 text-xs">({agent.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {agent.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="px-2 py-1 text-xs font-bold bg-gray-800 text-gray-400">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs font-bold bg-gray-700 text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                  <span className="text-xs text-gray-500">{agent.category}</span>
                  <button className="px-4 py-2 bg-pink-500 text-white font-bold border-2 border-pink-400 hover:bg-pink-400 text-sm">
                    View Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Agent Details */}
        {selectedAgent && (
          <section className="bg-gray-900 border-4 border-pink-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-pink-400">{selectedAgent.name}</h2>
                <p className="text-sm text-gray-400">{selectedAgent.description}</p>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-pink-400 mb-3">Features</h3>
                <div className="space-y-2">
                  {selectedAgent.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-pink-400 mb-3">Integrated Tools</h3>
                <div className="space-y-2">
                  {selectedAgent.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <span className="text-blue-400">🔌</span>
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <div className="text-sm text-gray-400 mb-1">Monthly Price</div>
                <div className="text-3xl font-bold text-green-400">${selectedAgent.price}<span className="text-sm text-gray-400">/month</span></div>
              </div>
              <button className="px-8 py-4 bg-pink-500 text-white font-bold border-4 border-pink-400 hover:bg-pink-400 text-xl">
                Deploy Agent
              </button>
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How the Marketplace Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-pink-400 mb-2">Browse</h3>
              <p className="text-xs text-gray-400">Find agents by category</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Review</h3>
              <p className="text-xs text-gray-400">Check features and reviews</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Deploy</h3>
              <p className="text-xs text-gray-400">Integrate into your workflow</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Scale</h3>
              <p className="text-xs text-gray-400">Run agents at scale</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-pink-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
