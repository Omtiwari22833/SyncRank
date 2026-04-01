import { motion } from 'motion/react';
import { Shield, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Our Mission</h1>
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          SyncRank was born out of a simple need: to make competitive programming more social and accessible 
          within college communities. We believe that learning is faster when you compete and collaborate 
          with people you know.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3">
        {[
          { title: 'Transparency', desc: 'Real-time data from platforms you love.', icon: Shield },
          { title: 'Growth', desc: 'AI-powered insights to help you improve.', icon: Target },
          { title: 'Community', desc: 'Building the next generation of top coders.', icon: Users },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
