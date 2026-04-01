import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

/**
 * SubmissionCard: A compact card for the activity feed.
 * Uses motion for entry animations.
 */

export default function SubmissionCard({ submission }) {
  const isAccepted = submission.status === 'Accepted';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/[0.07]"
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
          isAccepted ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
        }`}>
          {isAccepted ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">{submission.username}</span>
            <span className="text-xs text-gray-500">solved</span>
            <span className="font-medium text-blue-400 truncate max-w-[150px] sm:max-w-none">
              {submission.problemName}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-3 text-[10px] uppercase tracking-wider text-gray-500">
            <span className="font-bold">{submission.platform}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {submission.time}
            </span>
          </div>
        </div>
      </div>
      <div className={`hidden text-xs font-bold sm:block ${
        isAccepted ? 'text-green-500' : 'text-red-500'
      }`}>
        {submission.status}
      </div>
    </motion.div>
  );
}
