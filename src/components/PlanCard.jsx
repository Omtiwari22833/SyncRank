/**
 * TopicPill: Small UI component for showing weak topics.
 */

export function TopicPill({ topic }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
      {topic}
    </span>
  );
}

/**
 * PlanCard: Displays a daily task in the practice plan.
 */

export function PlanCard({ day, task }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/5 p-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 font-mono text-sm font-bold text-gray-400">
        {day}
      </div>
      <p className="text-sm text-white">{task}</p>
    </div>
  );
}
