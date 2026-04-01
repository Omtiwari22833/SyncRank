import { useSocket } from '../hooks/useSocket';
import SubmissionCard from '../components/SubmissionCard';
import { Activity, Radio } from 'lucide-react';

/**
 * Feed: The live activity stream.
 * Connects to our useSocket hook for real-time updates.
 */

export default function Feed() {
  const { submissions } = useSocket();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Live Activity</h1>
          <p className="mt-1 text-gray-400">See what the community is solving right now.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-red-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
          LIVE
        </div>
      </div>

      <div className="space-y-4">
        {submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 rounded-full bg-white/5 p-6 text-gray-600">
              <Radio className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-white">Waiting for signals...</h3>
            <p className="mt-2 text-gray-400">New submissions will appear here automatically.</p>
          </div>
        ) : (
          submissions.map((sub) => (
            <SubmissionCard key={sub.id} submission={sub} />
          ))
        )}
      </div>

      {submissions.length > 0 && (
        <p className="mt-8 text-center text-xs text-gray-500">
          Showing the latest {submissions.length} submissions.
        </p>
      )}
    </div>
  );
}
