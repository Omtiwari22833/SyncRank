import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { motion } from 'motion/react';
import { UserPlus, Code2, GraduationCap } from 'lucide-react';

/**
 * Landing: The onboarding form.
 * Demonstrates "Controlled Components" where state is synced with inputs.
 */

export default function Landing() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    college: '',
    codeforcesHandle: '',
    leetcodeHandle: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.college) {
      login(formData);
      navigate('/');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm"
      >
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <UserPlus className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-white">Join SyncRank</h2>
          <p className="mt-2 text-gray-400">Enter your details to start tracking.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Full Name</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">College Name</label>
              <div className="relative mt-1">
                <GraduationCap className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 pl-12 pr-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="IIT Delhi"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Codeforces</label>
                <div className="relative mt-1">
                  <Code2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={formData.codeforcesHandle}
                    onChange={(e) => setFormData({ ...formData, codeforcesHandle: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="handle"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">LeetCode</label>
                <div className="relative mt-1">
                  <Code2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={formData.leetcodeHandle}
                    onChange={(e) => setFormData({ ...formData, leetcodeHandle: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="handle"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Create Profile
          </button>
        </form>
      </motion.div>
    </div>
  );
}
