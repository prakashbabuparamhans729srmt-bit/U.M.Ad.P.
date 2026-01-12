'use client';

import { useState } from 'react';
import { Bot, X, Send, Mic, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const modelMessage = { role: 'model' as const, text: "माफ़ कीजिए, यह सुविधा अभी उपलब्ध नहीं है।" };
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
            <ScrollArea className="h-[300px] p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-3 my-2 text-sm ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.role === 'model' && (
                    <Avatar className="w-8 h-8">
                       <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg px-3 py-2 ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <p>{message.text}</p>
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
            </ScrollArea>
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Input
                placeholder="एक प्रश्न पूछें..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button size="icon" onClick={handleSend} disabled={loading}>
                <Send className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" disabled={loading}>
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
