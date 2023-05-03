import { useMessages } from '../utils/useMessages';

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages();

  return (
    <div className="mx-auto max-w-3xl pt-8">
      {messages?.map((message, i) => {
        const isUser = message.role === 'user';
        if (message.role === 'system') return null;
        return (
          <div
            id={`message-${i}`}
            className={`fade-up mb-4 flex ${
              isUser ? 'justify-end' : 'justify-start'
            } ${i === 1 ? 'max-w-md' : ''}`}
            key={message.content}
          >
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative rounded-lg px-3 py-2 ${
                isUser
                  ? 'from-primary-700 to-primary-600 text-white mr-2 bg-gradient-to-br'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 ml-2'
              }`}
            >
              {message.content.trim()}
            </div>
          </div>
        );
      })}
      {isLoadingAnswer && (
        <div className="mb-4 flex justify-start">
          <div className="loader bg-gray-200 dark:bg-gray-800 relative ml-2 flex items-center justify-between space-x-1.5 rounded-full p-2.5 px-4">
            <span className="block h-3 w-3 rounded-full"></span>
            <span className="block h-3 w-3 rounded-full"></span>
            <span className="block h-3 w-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;
