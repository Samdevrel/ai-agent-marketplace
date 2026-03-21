'use client';

import { useState } from 'react';

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  capabilities: string[];
  rating: number;
  reviews: number;
  price: string;
  isFree: boolean;
  verified: boolean;
  tasksCompleted: number;
}

interface Category {
  name: string;
  count: number;
  icon: string;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Customer Support AI',
    description: '24/7 intelligent customer support with multilingual capabilities',
    category: 'Customer Service',
    capabilities: ['Natural Language', 'Sentiment Analysis', 'Multilingual', 'Escalation'],
    rating: 4.8,
    reviews: 2340,
    price: '$500/month',
    isFree: false,
    verified: true,
    tasksCompleted: 15400,
  },
  {
    id: '2',
    name: 'Code Review Bot',
    description: 'Automated code review with security and performance analysis',
    category: 'Development',
    capabilities: ['Security Scanning', 'Performance', 'Style Guide', 'Test Coverage'],
    rating: 4.9,
    reviews: 1890,
    price: '$800/month',
    isFree: false,
    verified: true,
    tasksCompleted: 32100,
  },
  {
    id: '3',
    name: 'Research Assistant',
    description: 'Academic research with citation generation and summarization',
    category: 'Research',
    capabilities: ['文献搜索', '总结', '引用生成', '数据分析'],
    rating: 4.7,
    reviews: 980,
    price: '$0',
    isFree: true,
    verified: true,
    tasksCompleted: 8900,
  },
  {
    id: '4',
    name: 'Content Generator',
    description: 'SEO-optimized content creation for blogs and social media',
    category: 'Marketing',
    capabilities: ['SEO', 'Social Media', 'Blogs', 'Newsletters'],
    rating: 4.6,
    reviews: 2100,
    price: '$350/month',
    isFree: false,
    verified: false,
    tasksCompleted: 12700,
  },
  {
    id: '5',
    name: 'Data Analyst AI',
    description: 'Extract insights from raw data with automated reporting',
    category: 'Data Science',
    capabilities: ['Excel/CSV', 'SQL', 'Visualization', 'Insights'],
    rating: 4.8,
    reviews: 760,
    price: '$1200/month',
    isFree: false,
    verified: true,
    tasksCompleted: 5600,
  },
  {
    id: '6',
    name: 'Translation Engine',
    description: 'High-accuracy translation for 50+ languages',
    category: 'Language',
    capabilities: ['50+ Languages', 'Technical', 'Creative', 'Document'],
    rating: 4.9,
    reviews: 1450,
    price: '$200/month',
    isFree: false,
    verified: true,
    tasksCompleted: 22300,
  },
];

const categories: Category[] = [
  { name: 'All', count: 6, icon: '⚡' },
  { name: 'Customer Service', count: 1, icon: '💬' },
  { name: 'Development', count: 1, icon: '💻' },
  { name: 'Research', count: 1, icon: '📚' },
  { name: 'Marketing', count: 1, icon: '📈' },
  { name: 'Data Science', count: 1, icon: '📊' },
  { name: 'Language', count: 1, icon: '🌐' },
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
          <p className="text-gray-400 mt-2">Discover, deploy, and scale AI agents for your workflows</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-pink-400 p-4 text-center">
            <div className="text-3xl font-black text-pink-400">6K+</div>
            <div className="text-sm text-gray-400">Agents Listed</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">150K+</div>
            <div className="text-sm text-gray-400">Tasks Completed</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">4.8</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">50+</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-pink-500 border-pink-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {cat.icon} {cat.name} <span className="text-xs opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </section>

        {/* Agent Grid */}
        <section className="grid md:grid-cols-2 gap-4">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-pink-400 ${
                selectedAgent?.id === agent.id ? 'border-pink-400 bg-pink-900/20' : 'border-gray-700'
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-pink-400">{agent.name}</span>
                      {agent.verified && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-pink-900/50 text-pink-400">
                          Verified
                        </span>
                      )}
                      {agent.isFree && (
                        <span className="px-2 py-0.5 text-xs font-bold bg-green-900/50 text-green-400">
                          Free
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">{agent.description}</p>
                  </div>
                  <div className="text-right ml-2">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-yellow-400">{agent.rating}</span>
                      <span className="text-xs text-gray-500">({agent.reviews})</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {agent.tasksCompleted.toLocaleString()} tasks
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {agent.capabilities.slice(0, 4).map((cap) => (
                    <span
                      key={cap}
                      className="px-2 py-1 text-xs font-bold bg-gray-800 text-gray-400"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">{agent.category}</div>
                  <div className="font-bold text-pink-400">{agent.price}</div>
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
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-pink-400 text-2xl">{selectedAgent.name}</span>
                  {selectedAgent.verified && (
                    <span className="px-2 py-1 text-xs font-bold bg-pink-900/50 text-pink-400">
                      Verified
                    </span>
                  )}
                  {selectedAgent.isFree && (
                    <span className="px-2 py-1 text-xs font-bold bg-green-900/50 text-green-400">
                      Free
                    </span>
                  )}
                </div>
                <p className="text-gray-400">{selectedAgent.description}</p>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700 text-center">
                <div className="text-sm text-gray-400">Rating</div>
                <div className="text-2xl font-bold text-yellow-400">{selectedAgent.rating}</div>
                <div className="text-xs text-gray-500">{selectedAgent.reviews} reviews</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700 text-center">
                <div className="text-sm text-gray-400">Category</div>
                <div className="text-2xl font-bold">{selectedAgent.category}</div>
                <div className="text-xs text-gray-500">{selectedAgent.tasksCompleted.toLocaleString()} tasks</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700 text-center">
                <div className="text-sm text-gray-400">Price</div>
                <div className="text-2xl font-bold text-pink-400">{selectedAgent.price}</div>
                <div className="text-xs text-gray-500">{selectedAgent.isFree ? 'Free forever' : 'Per month'}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-400 mb-2">Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {selectedAgent.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-4 py-2 bg-pink-900/30 text-pink-400 font-bold border border-pink-400"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-pink-500 text-white font-bold border-4 border-pink-400 hover:bg-pink-400">
              Deploy {selectedAgent.name}
            </button>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How to Use AI Agents</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-pink-400 mb-2">Browse</h3>
              <p className="text-xs text-gray-400">Find agents for your needs</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Test</h3>
              <p className="text-xs text-gray-400">Try in sandbox mode</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Deploy</h3>
              <p className="text-xs text-gray-400">Integrate into your workflow</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Scale</h3>
              <p className="text-xs text-gray-400">Handle unlimited tasks</p>
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
