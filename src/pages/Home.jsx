import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Trophy, Users, BarChart3 } from 'lucide-react';

/**
 * Home: The marketing landing page.
 * Uses motion for smooth entry animations.
 */

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
              New: AI Coaching v2.0
            </span>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              Sync your code. <br />
              <span className="text-blue-500">Rank your college.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              The ultimate competitive programming hub for your campus. Track real-time progress, 
              compete with peers, and get AI-powered practice plans.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                to="/landing"
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Real-time Feed', desc: 'Watch your friends solve problems live.', icon: Zap },
            { title: 'Leaderboards', desc: 'Climb the ranks of your college community.', icon: Trophy },
            { title: 'AI Coaching', desc: 'Personalized plans based on your weak topics.', icon: BarChart3 },
            { title: 'Community', desc: 'Connect with fellow competitive coders.', icon: Users },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/[0.07]"
            >
              <div className="mb-4 rounded-lg bg-blue-500/10 p-3 text-blue-500 w-fit">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
