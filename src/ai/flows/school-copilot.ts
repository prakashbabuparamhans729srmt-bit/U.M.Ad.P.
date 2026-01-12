'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HistorySchema = z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string(),
    })),
});

export const schoolCopilot = ai.defineFlow(
  {
    name: 'schoolCopilot',
    inputSchema: z.object({
        history: z.array(HistorySchema).optional(),
        input: z.string(),
    }),
    outputSchema: z.string(),
  },
  async ({history, input}) => {
    const llm = ai.getModel('googleai/gemini-2.5-flash');
    const prompt = `You are an AI assistant for a school monitoring dashboard. 
    Your role is to answer questions from administrators, officials, and principals based on the provided context.
    Use a helpful and professional tone.
    
    Current School Data:
    - School: Govt. Sr. Sec. School, Bikaner
    - Overall Status: 85% (Good)
    - Teacher Attendance: 62% (Low - needs attention)
    - Student Attendance: 88%
    - Mid-day Meal Quality: 78% (Average)
    - Infrastructure Health: 92% (Excellent)
    - Critical Alerts: 1 (Mid-day meal not cooked today)
    - Teacher Absences: Amit Pathak (Science) is absent.
    - CCTV Issues: Classroom 8A CCTV is offline.

    Answer the user's query based on this data.
    
    Query: ${input}
    `;

    const result = await llm.generate({
        prompt: prompt,
        history: history,
    });

    return result.text;
  }
);
