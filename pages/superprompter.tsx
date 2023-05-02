'use client';

import useState from 'react-usestateref';

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}

const ChatMessage = ({ text, from }: MessageProps) => {
  const className = from === Creator.Me ? 'bg-gray-100' : 'bg-gray-200';
  return <div className={className}>{text}</div>;
};

const ChatInput = ({ onSend, disabled }: InputProps) => {
  const [input, setInput] = useState('');

  const sendInput = () => {
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendInput();
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button onClick={sendInput}>Send</button>
    </div>
  );
};

export default function SuperPrompter() {
  const [messages, setMessages, messagesRef] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);

  const callApi = async (input: string) => {
    setLoading(true);
    const myMessage = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
    };

    setMessages([...messagesRef.current, myMessage]);
    const response = await fetch(`/api/generate-answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: input }),
    }).then((response) => response.json());
    setLoading(false);

    if (response.text) {
      const botMessage = {
        text: response.text,
        from: Creator.Bot,
        key: new Date().getTime(),
      };
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <ChatMessage
            key={message.key}
            text={message.text}
            from={message.from}
          />
        ))}

        {loading && <div>Loading...</div>}
      </div>
      <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
    </div>
  );
}
