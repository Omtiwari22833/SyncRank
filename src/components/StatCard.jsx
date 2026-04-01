/**
 * StatCard: A reusable card for metrics.
 * Demonstrates how to use props to make a component flexible.
 */

export default function StatCard({ label, value, icon: Icon, trend, trendUp }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/[0.07]">
      <div className="flex items-center justify-between">
        <div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
          <Icon className="h-5 w-5" />
        </div>
        {trend && (
          <span className={`text-xs font-medium ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-400">{label}</h3>
        <p className="mt-1 text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
