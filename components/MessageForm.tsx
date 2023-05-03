import { useState } from 'react';
import { useMessages } from '../utils/useMessages';

const MessageForm = () => {
  const [content, setContent] = useState('');
  const { addMessage } = useMessages();

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();
    addMessage(content);
    setContent('');
  };

  return (
    <form
      className="relative mx-auto max-w-3xl rounded-t-xl"
      onSubmit={handleSubmit}
    >
      <div className=" border-gray-200 border-gray-500/10 dark:border-gray-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 h-[130px] rounded-t-xl border-l border-r border-t p-5 backdrop-blur">
        <label htmlFor="content" className="sr-only">
          Your message
        </label>
        <textarea
          name="content"
          placeholder="Enter your message here..."
          rows={3}
          value={content}
          autoFocus
          className="text-gray-900 ring-gray-300/40 focus:ring-gray-300/80 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800/80 border-0 !p-3 shadow-none ring-1 backdrop-blur focus:outline-none dark:ring-0"
          onChange={(e: any) => setContent(e.target.value)}
        />
        <div className="absolute bottom-10 right-8">
          <div className="flex space-x-3">
            <button className="" type="submit">
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
