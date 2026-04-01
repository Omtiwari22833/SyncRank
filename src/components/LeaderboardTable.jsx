import { Trophy, Medal } from 'lucide-react';

/**
 * LeaderboardTable: Displays the ranked list of students.
 * Uses template literals for conditional styling.
 */

export default function LeaderboardTable({ data }) {
  return (
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
        <tbody className="divide-y divide-white/5">
          {data.map((entry) => (
            <tr
              key={entry.username}
              className={`transition-colors hover:bg-white/[0.03] ${
                entry.rank === 1 ? 'bg-yellow-500/5' : 
                entry.rank === 2 ? 'bg-slate-400/5' : 
                entry.rank === 3 ? 'bg-amber-700/5' : ''
              }`}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  {entry.rank === 1 && <Trophy className="h-4 w-4 text-yellow-500" />}
                  {entry.rank === 2 && <Medal className="h-4 w-4 text-slate-400" />}
                  {entry.rank === 3 && <Medal className="h-4 w-4 text-amber-700" />}
                  <span className={`font-mono font-bold ${entry.rank <= 3 ? 'text-white' : 'text-gray-400'}`}>
                    #{entry.rank}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="font-medium text-white">{entry.username}</span>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-blue-400">@{entry.handle}</span>
              </td>
              <td className="px-6 py-4">
                <span className="font-mono font-bold text-white">{entry.rating}</span>
              </td>
              <td className="px-6 py-4 text-gray-400">
                {entry.solves}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
