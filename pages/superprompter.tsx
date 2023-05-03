import MessageForm from '../components/MessageForm';
import MessagesList from '../components/MessagesList';
import { MessagesProvider } from '../utils/useMessages';

export default function SuperPrompter() {
  return (
    <div>
      <MessagesProvider>
        <MessagesList />
        <div className="fixed bottom-0 left-0 right-0">
          <MessageForm />
        </div>
      </MessagesProvider>
    </div>
  );
}
