import { useState, useEffect, useCallback } from 'react';

/**
 * useSocket: A simulated real-time connection.
 * In a real app, this would connect to a WebSocket server.
 * Here, we simulate new submissions arriving every few seconds.
 */

export function useSocket() {
  const [submissions, setSubmissions] = useState([]);

  const addSubmission = useCallback((newSub) => {
    setSubmissions((prev) => [newSub, ...prev].slice(0, 20)); // Keep only the latest 20
  }, []);

  useEffect(() => {
    // Beginner Tip: This simulates a real-time "push" from a server.
    const interval = setInterval(() => {
      const names = ['Akshat', 'Priya', 'Rahul', 'Sneha', 'Vikram', 'Ananya'];
      const problems = ['Two Sum', 'Longest Substring', 'Water Container', 'Merge Sort', 'Quick Sort', 'Graph Traversal'];
      const platforms = ['Codeforces', 'LeetCode'];
      const statuses = ['Accepted', 'Accepted', 'Accepted', 'Wrong Answer']; // More weight to Accepted

      const newSub = {
        id: Math.random().toString(36).substr(2, 9),
        username: names[Math.floor(Math.random() * names.length)],
        problemName: problems[Math.floor(Math.random() * problems.length)],
        platform: platforms[Math.floor(Math.random() * platforms.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        time: new Date().toLocaleTimeString(),
      };

      addSubmission(newSub);
    }, 4000); // New submission every 4 seconds

    // Beginner Tip: Always clean up your intervals or sockets!
    return () => clearInterval(interval);
  }, [addSubmission]);

  return { submissions };
}
