import { useState, useEffect } from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import SkeletonRow from '../components/SkeletonRow';
import StatCard from '../components/StatCard';
import { Trophy, Users, Star, TrendingUp } from 'lucide-react';

/**
 * Leaderboard: Fetches and displays rankings.
 * Demonstrates handling loading states.
 */

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      const mockData = [
        { rank: 1, username: 'Akshat Tiwari', handle: 'akshat_21', rating: 2150, solves: 1240 },
        { rank: 2, username: 'Priya Sharma', handle: 'priya_code', rating: 1980, solves: 980 },
        { rank: 3, username: 'Rahul Verma', handle: 'rv_coder', rating: 1850, solves: 850 },
        { rank: 4, username: 'Sneha Gupta', handle: 'sneha_g', rating: 1720, solves: 720 },
        { rank: 5, username: 'Vikram Singh', handle: 'vik_s', rating: 1650, solves: 650 },
        { rank: 6, username: 'Ananya Das', handle: 'ana_das', rating: 1580, solves: 580 },
        { rank: 7, username: 'Ishaan Malhotra', handle: 'ishaan_m', rating: 1420, solves: 420 },
      ];
      setData(mockData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">College Leaderboard</h1>
          <p className="mt-1 text-gray-400">Ranking of the top competitive coders in your campus.</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/5 p-1">
          <button className="rounded-md bg-blue-600 px-4 py-1.5 text-xs font-bold text-white">Global</button>
          <button className="rounded-md px-4 py-1.5 text-xs font-bold text-gray-400 hover:text-white">Batch of 2026</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Top Rating" value="2150" icon={Trophy} trend="+120" trendUp={true} />
        <StatCard label="Active Coders" value="142" icon={Users} />
        <StatCard label="Avg. Solves" value="452" icon={Star} />
        <StatCard label="College Rank" value="#12" icon={TrendingUp} trend="Top 5%" trendUp={true} />
      </div>

      {/* Table Section */}
      <div className="relative">
        {isLoading ? (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Handle</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Solves</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(7)].map((_, i) => (
                  <SkeletonRow key={i} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <LeaderboardTable data={data} />
        )}
      </div>
    </div>
  );
}
