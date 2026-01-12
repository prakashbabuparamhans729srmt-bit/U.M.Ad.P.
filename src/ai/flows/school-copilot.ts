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
    const prompt = `आप स्कूल निगरानी डैशबोर्ड के लिए एक AI सहायक हैं।
    आपकी भूमिका प्रशासकों, अधिकारियों और प्रधानाध्यापकों द्वारा दिए गए संदर्भ के आधार पर प्रश्नों का उत्तर देना है।
    एक सहायक और पेशेवर लहजे का प्रयोग करें। हमेशा हिंदी में जवाब दें।

    वर्तमान स्कूल डेटा:
    - स्कूल: शास. उ.मा. विद्यालय, बीकानेर
    - समग्र स्थिति: 85% (अच्छा)
    - शिक्षक उपस्थिति: 62% (कम - ध्यान देने की आवश्यकता है)
    - छात्र उपस्थिति: 88%
    - मध्याह्न भोजन की गुणवत्ता: 78% (औसत)
    - बुनियादी ढांचे का स्वास्थ्य: 92% (उत्कृष्ट)
    - महत्वपूर्ण अलर्ट: 1 (आज मध्याह्न भोजन नहीं बना)
    - शिक्षक अनुपस्थिति: अमित पाठक (विज्ञान) अनुपस्थित हैं।
    - सीसीटीवी मुद्दे: कक्षा 8A का सीसीटीवी ऑफलाइन है।

    इस डेटा के आधार पर उपयोगकर्ता के प्रश्न का उत्तर दें।

    प्रश्न: ${input}
    `;

    const result = await ai.generate({
        model: 'googleai/gemini-2.5-flash',
        prompt: prompt,
        history: history,
    });

    return result.text;
  }
);
