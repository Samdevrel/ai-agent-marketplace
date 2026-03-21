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
  tools: string[];
  categoryIcon: string;
}

interface AgentReview {
  id: string;
  agentId: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Research Assistant',
    description: 'Deep web research, paper summarization, citation formatting',
    category: 'Research',
    rating: 4.8,
    reviews: 234,
    price: '$0.05/chat',
    tools: ['Web Search', 'PDF Analysis', 'Citation Generator'],
    categoryIcon: '🔍',
  },
  {
    id: '2',
    name: 'Code Reviewer',
    description: 'Code quality analysis, security audits, refactoring suggestions',
    category: 'Development',
    rating: 4.9,
    reviews: 456,
    price: '$0.02/min',
    tools: ['Static Analysis', 'Security Scanner', 'Best Practices'],
    categoryIcon: '💻',
  },
  {
    id: '3',
    name: 'Email Writer',
    description: 'Professional emails, responses, follow-ups',
    category: 'Productivity',
    rating: 4.7,
    reviews: 189,
    price: '$0.01/email',
    tools: ['Templates', 'Tone Control', 'Multiple Languages'],
    categoryIcon: '✉️',
  },
  {
    id: '4',
    name: 'Market Researcher',
    description: 'Competitor analysis, trend tracking, market insights',
    category: 'Research',
    rating: 4.6,
    reviews: 98,
    price: '$0.10/report',
    tools: ['Competitor Tracking', 'Trend Analysis', 'Data Aggregation'],
    categoryIcon: '📊',
  },
  {
    id: '5',
    name: 'Data Analyst',
    description: 'Excel analysis, data visualization, reporting',
    category: 'Data',
    rating: 4.9,
    reviews: 312,
    price: '$0.50/table',
    tools: ['Pandas', 'Visualization', 'Automation'],
    categoryIcon: '📈',
  },
  {
    id: '6',
    name: 'Social Media Manager',
    description: 'Content scheduling, engagement, analytics',
    category: 'Marketing',
    rating: 4.5,
    reviews: 167,
    price: '$0.03/post',
    tools: ['Scheduling', 'Analytics', 'Templates'],
    categoryIcon: '📱',
  },
  {
    id: '7',
    name: 'Legal Document Review',
    description: 'Contract review, compliance checking, risk assessment',
    category: 'Legal',
    rating: 4.8,
    reviews: 78,
    price: '$5/document',
    tools: ['Contract Analysis', 'Compliance', 'Risk Assessment'],
    categoryIcon: '⚖️',
  },
  {
    id: '8',
    name: 'Translation Specialist',
    description: '100+ languages, technical terminology, cultural adaptation',
    category: 'Translation',
    rating: 4.7,
    reviews: 298,
    price: '$0.10/word',
    tools: ['MT Integration', 'Terminology', 'Cultural Localization'],
    categoryIcon: '🌍',
  },
];

const categories = ['All', 'Research', 'Development', 'Productivity', 'Data', 'Marketing', 'Legal', 'Translation'];

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
          <p className="text-gray-400 mt-2">Browse, deploy, and manage AI agents for any task</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-indigo-400 p-4 text-center">
            <div className="text-3xl font-black text-indigo-400">2.8K+</div>
            <div className="text-sm text-gray-400">Agents Listed</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">45K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">4.7</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">$8.5K</div>
            <div className="text-sm text-gray-400">Daily Volume</div>
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

        {/* Agent Grid */}
        <section className="grid md:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-indigo-400 ${
                selectedAgent?.id === agent.id ? 'border-indigo-400 bg-indigo-900/20' : 'border-gray-700'
              }`}
            >
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{agent.categoryIcon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-indigo-400">{agent.name}</span>
                      <span className="px-2 py-1 text-xs font-bold bg-indigo-900/50 text-indigo-400">
                        {agent.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-bold">{agent.rating}</span>
                      <span className="text-xs text-gray-500">({agent.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{agent.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {agent.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs bg-gray-800 text-gray-400">
                      {tool}
                    </span>
                  ))}
                  {agent.tools.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-800 text-gray-500">
                      +{agent.tools.length - 3}
                    </span>
                  )}
                </div>

                <div className="p-3 bg-gray-800 border border-gray-700 text-center">
                  <div className="text-xs text-gray-500 mb-1">Price</div>
                  <div className="font-bold text-green-400">{agent.price}</div>
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
                <p className="text-sm text-gray-400">{selectedAgent.category} Agent</p>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-400 mb-2">Description</h3>
              <p className="text-sm text-gray-400">{selectedAgent.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700 text-center">
                <div className="text-2xl font-bold text-yellow-400">⭐ {selectedAgent.rating}</div>
                <div className="text-xs text-gray-500">{selectedAgent.reviews} reviews</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700 text-center">
                <div className="text-2xl font-bold text-green-400">{selectedAgent.price}</div>
                <div className="text-xs text-gray-500">Starting price</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700 text-center">
                <div className="text-2xl font-bold">{selectedAgent.categoryIcon} {selectedAgent.category}</div>
                <div className="text-xs text-gray-500">Category</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-400 mb-2">Available Tools</h3>
              <div className="flex flex-wrap gap-2">
                {selectedAgent.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm bg-indigo-900/50 text-indigo-400 border border-indigo-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-indigo-500 text-white font-bold border-4 border-indigo-400 hover:bg-indigo-400">
              Deploy Agent
            </button>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How the Marketplace Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-indigo-400 mb-2">Browse</h3>
              <p className="text-xs text-gray-400">Find agents for your needs</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Deploy</h3>
              <p className="text-xs text-gray-400">Integrate into your workflow</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Configure</h3>
              <p className="text-xs text-gray-400">Set up prompts and tools</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Run</h3>
              <p className="text-xs text-gray-400">Start automating tasks</p>
            </div>
          </div>
        </section>

        {/* Top Agents */}
        <section className="bg-gray-900 border-4 border-indigo-400 p-6">
          <h2 className="text-xl font-black text-indigo-400 mb-4">Top Rated Agents</h2>
          <div className="space-y-3">
            {agents.filter(a => a.rating >= 4.8).slice(0, 3).map((agent) => (
              <div key={agent.id} className="p-3 bg-gray-800 border border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{agent.categoryIcon}</span>
                  <div>
                    <div className="font-bold text-indigo-400">{agent.name}</div>
                    <div className="text-xs text-gray-500">{agent.category} • {agent.tools.length} tools</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-yellow-400">⭐ {agent.rating}</div>
                  <div className="text-xs text-gray-500">{agent.price}</div>
                </div>
              </div>
            ))}
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
