'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Mic, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'model';
  content: { text: string }[];
};

// SpeechRecognition might not be available, so we need to declare it
declare global {
    interface Window {
      SpeechRecognition: any;
      webkitSpeechRecognition: any;
    }
}

const responses: { [key: string]: string } = {
  'default': 'नमस्ते! मैं स्कूल डैशबोर्ड कॉपिलॉट हूँ। मैं आपकी क्या मदद कर सकता हूँ? आप मुझसे \'स्कूल की स्थिति\', \'शिक्षक उपस्थिति\', \'मध्याह्न भोजन\' या \'संपर्क जानकारी\' के बारे में पूछ सकते हैं।',
  'स्थिति': 'स्कूल की समग्र स्थिति 85% है, जिसे \'कार्यशील\' माना जाता है। अधिक जानकारी के लिए, आप मुख्य डैशबोर्ड देख सकते हैं।',
  'उपस्थिति': 'आज शिक्षकों की उपस्थिति 62% है, जो सामान्य से कम है। छात्रों की कुल उपस्थिति 342/500 है। विस्तृत विश्लेषण के लिए AI विश्लेषण रिपोर्ट देखें।',
  'भोजन': 'आज मध्याह्न भोजन नहीं बना क्योंकि रसोइया अनुपस्थित थे। इस सप्ताह भोजन की गुणवत्ता की औसत रेटिंग 4/5 स्टार रही है।',
  'cctv': 'CCTV फीड लाइव है। कक्षा 8 का CCTV 2 दिन से बंद है और कक्षा 9 B में कम रोशनी की चेतावनी है।',
  'संपर्क': 'प्रिंसिपल का नंबर 9829012345 है और शिकायत हेल्पलाइन 1800-XXX-XXXX है। क्या आपको और कोई जानकारी चाहिए?',
};

const getResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes('स्थिति') || lowerInput.includes('status')) {
    return responses['स्थिति'];
  }
  if (lowerInput.includes('उपस्थिति') || lowerInput.includes('attendance')) {
    return responses['उपस्थिति'];
  }
  if (lowerInput.includes('भोजन') || lowerInput.includes('meal')) {
    return responses['भोजन'];
  }
  if (lowerInput.includes('cctv')) {
    return responses['cctv'];
  }
  if (lowerInput.includes('संपर्क') || lowerInput.includes('contact')) {
    return responses['संपर्क'];
  }
  return responses['default'];
};


export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    }
  }, [messages, loading]);
  
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'hi-IN'; // Set language to Hindi
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };
      
      recognition.onerror = (event: any) => {
        if (event.error === 'not-allowed') {
          toast({
            variant: 'destructive',
            title: 'माइक्रोफ़ोन अनुमति आवश्यक है',
            description: 'बोलकर लिखने की सुविधा का उपयोग करने के लिए कृपया अपनी ब्राउज़र सेटिंग्स में माइक्रोफ़ोन की अनुमति दें।',
          });
        } else {
          console.error("Speech recognition error", event.error);
        }
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
  }, [toast]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMicClick = () => {
    if (!recognitionRef.current) return;

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate a response since AI is removed
    setTimeout(() => {
        const responseText = getResponse(input);
        const modelMessage: Message = { role: 'model', content: [{ text: responseText }] };
        setMessages(prev => [...prev, modelMessage]);
        setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 animate-pulse-neon"
          onClick={toggleChat}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-[450px] shadow-2xl flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4">
            <CardTitle className="text-lg">School AI Copilot</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-[300px]" ref={scrollAreaRef}>
                <div className="p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-3 my-2 text-sm ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.role === 'model' && (
                    <Avatar className="w-8 h-8">
                       <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg px-3 py-2 ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {message.content.map((c, i) => <p key={i}>{c.text}</p>)}
                  </div>
                   {message.role === 'user' && (
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        <User/>
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {loading && (
                <div className="flex gap-3 my-2 text-sm justify-start">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg px-3 py-2 bg-muted">
                    <p>सोच रहा हूँ...</p>
                  </div>
                </div>
              )}
              </div>
            </ScrollArea>
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Input
                placeholder="एक प्रश्न पूछें..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={loading}
              />
              <Button size="icon" onClick={handleSend} disabled={loading}>
                <Send className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                onClick={handleMicClick} 
                disabled={loading || !recognitionRef.current}
                className={isRecording ? 'text-red-500 border-red-500' : ''}
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
