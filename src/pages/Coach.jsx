import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Brain, Target, Calendar, Loader2 } from 'lucide-react';
import { TopicPill, PlanCard } from '../components/PlanCard';

/**
 * Coach: AI-powered practice plans.
 * Uses Gemini AI to analyze handles and suggest topics.
 */

export default function Coach() {
  const { user } = useUser();
  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generatePlan = async () => {
    if (!user) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze these handles: Codeforces (${user.codeforcesHandle}), LeetCode (${user.leetcodeHandle}). 
        Suggest 4 weak topics and a 7-day practice plan for a college student.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              weakTopics: { type: Type.ARRAY, items: { type: Type.STRING } },
              weeklyPlan: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    day: { type: Type.STRING },
                    task: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      });

      const data = JSON.parse(response.text);
      setPlan(data);
    } catch (err) {
      console.error(err);
      setError("Failed to generate plan. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-500">
          <Sparkles className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-white">AI Practice Coach</h1>
        <p className="mt-4 text-lg text-gray-400">
          Get a personalized roadmap based on your current performance across platforms.
        </p>
        
        {!plan && !isLoading && (
          <button
            onClick={generatePlan}
            className="mt-10 rounded-full bg-blue-600 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            Generate My Plan
          </button>
        )}
      </div>

      {isLoading && (
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
          <p className="mt-4 text-gray-400">Analyzing your handles and crafting a plan...</p>
        </div>
      )}

      {error && (
        <div className="mt-10 rounded-xl border border-red-500/20 bg-red-500/5 p-6 text-center text-red-400">
          {error}
        </div>
      )}

      {plan && (
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Weak Topics */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold mb-6">
              <Brain className="h-5 w-5 text-blue-500" />
              Focus Areas
            </div>
            <div className="flex flex-wrap gap-2">
              {plan.weakTopics.map((topic) => (
                <TopicPill key={topic} topic={topic} />
              ))}
            </div>
            
            <div className="mt-10 rounded-xl border border-white/5 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-white font-bold mb-4">
                <Target className="h-5 w-5 text-blue-500" />
                Goal
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Improve your rating by 150 points in the next 30 days by focusing on these core concepts.
              </p>
            </div>
          </div>

          {/* Weekly Plan */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold mb-6">
              <Calendar className="h-5 w-5 text-blue-500" />
              7-Day Roadmap
            </div>
            <div className="space-y-4">
              {plan.weeklyPlan.map((item) => (
                <PlanCard key={item.day} day={item.day} task={item.task} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
