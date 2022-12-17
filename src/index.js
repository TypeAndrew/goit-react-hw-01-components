import ReactDOM from 'react-dom/client';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistoryHeader } from './components/TransactionHistory/TransactionHistory';
import friends from './components/FriendList/friends.json'
import transactions from './components/TransactionHistory/transactions.json';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics />
    <FriendList friends={friends} />   
    <TransactionHistoryHeader transactions={transactions} />
  </React.StrictMode>
);
