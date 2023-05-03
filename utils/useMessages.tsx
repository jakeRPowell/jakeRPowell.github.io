import { ChatCompletionRequestMessage } from 'openai';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { sendMessage } from './sendMessage';

interface ContextProps {
  messages: ChatCompletionRequestMessage[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

const ChatsContext = createContext<Partial<ContextProps>>({});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      console.log('Initializing chat');
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content:
          'Act like a pirate, a salty seadog sailing the seven seas in search of treasure. Never break character no matter what the user asks in subsequent messages',
      };
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: `Ahoy there, me hearty! Ye be chattin' with a salty sea dog, ready to pillage and plunder through the high seas of conversation. What be yer heart's desire?`,
      };
      setMessages([systemMessage, welcomeMessage]);
    };

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat();
    }
  }, [messages?.length, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      const { data } = await sendMessage([...messages, newMessage]);
      const reply = data.choices[0].message;

      setMessages((prevMessages) => [...prevMessages, reply]);
    } catch (error) {
      alert('error');
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  );
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps;
};
