'use client';

import { motion } from 'framer-motion';
import { Sparkles, Music, Video, TrendingUp, Play } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-purple-900 to-vibrant-rose">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-vibrant-rose rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            EZ Influencer 360
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/90 mb-8"
          >
            Create AI Music Video Influencers in Minutes
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Professional music videos without technical skills. 
            Powered by modular AI agents that handle everything.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <button className="btn btn-cta text-lg px-8 py-4">
              Start Creating Free
            </button>
            <button className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-white/60"
          >
            <p>10,000+ videos created • 95% success rate</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Create Character', desc: 'Design your AI influencer' },
              { icon: Music, title: 'Select Music', desc: 'Choose or upload tracks' },
              { icon: Video, title: 'AI Generates', desc: 'Watch the magic happen' },
              { icon: TrendingUp, title: 'Share & Grow', desc: 'Post to all platforms' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Pipeline Demo */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8">
            Real-time Pipeline Visualization
          </h2>
          <p className="text-center text-gray-600 mb-16 text-xl">
            Watch your video come to life, step by step
          </p>

          <AgentPipelineDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Create Your AI Influencer?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of creators using AI to build their music video empire.
          </p>
          <button className="btn btn-cta text-xl px-12 py-6 bg-white text-primary hover:bg-gray-100">
            Get Started Free
          </button>
        </div>
      </section>
    </main>
  );
}

function AgentPipelineDemo() {
  const steps = [
    { name: 'Storyboard', status: 'complete', icon: Sparkles, duration: '2.3s' },
    { name: 'Keyframe', status: 'processing', icon: Video, progress: 67 },
    { name: 'InfiniteTalk', status: 'queued', icon: Play },
    { name: 'Verifier', status: 'queued', icon: TrendingUp },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isProcessing = step.status === 'processing';
        const isComplete = step.status === 'complete';

        return (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card w-64"
          >
            <div className={`
              inline-flex items-center justify-center w-12 h-12 rounded-full mb-4
              ${isComplete ? 'bg-green-100 text-green-600' : ''}
              ${isProcessing ? 'bg-yellow-100 text-yellow-600 animate-pulse' : ''}
              ${step.status === 'queued' ? 'bg-gray-100 text-gray-400' : ''}
            `}>
              <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold mb-2">{step.name}</h3>

            <div className={`
              inline-block px-3 py-1 rounded-full text-sm
              ${isComplete ? 'bg-green-100 text-green-700' : ''}
              ${isProcessing ? 'bg-yellow-100 text-yellow-700' : ''}
              ${step.status === 'queued' ? 'bg-gray-100 text-gray-600' : ''}
            `}>
              {step.status}
            </div>

            {isProcessing && step.progress !== undefined && (
              <div className="mt-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 transition-all duration-300"
                    style={{ width: `${step.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{step.progress}%</p>
              </div>
            )}

            {isComplete && step.duration && (
              <p className="text-sm text-gray-500 mt-2">{step.duration}</p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
