/**
 * SkeletonRow: A loading placeholder for the table.
 * Uses Tailwind's animate-pulse for a smooth loading effect.
 */

export default function SkeletonRow() {
  return (
    <tr className="animate-pulse border-b border-white/5">
      <td className="px-6 py-4">
        <div className="h-4 w-8 rounded bg-white/10"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 w-32 rounded bg-white/10"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 w-24 rounded bg-white/10"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 w-16 rounded bg-white/10"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 w-12 rounded bg-white/10"></div>
      </td>
    </tr>
  );
}
