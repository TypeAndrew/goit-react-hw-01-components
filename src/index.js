import React from 'react'
import ReactDOM from 'react-dom/client';
import user from './components/Profile/user.json'
import { Profile } from './components/Profile/Profile';
import data from './components/Statistics/data.json';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistoryHeader } from './components/TransactionHistory/TransactionHistory';
import friends from './components/FriendList/friends.json'

import transactions from './components/TransactionHistory/transactions.json';

import './index.css';

let statData = [];
let findValue;
data.forEach((element) => {
    findValue = statData.find(el => el.label === element.label);
    if (findValue === undefined) {
        statData.push(element);
    } else {
        findValue.percentage += element.percentage;
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile user={user} />
    <Statistics statData={statData}/>
    <FriendList friends={friends} />   
    <TransactionHistoryHeader transactions={transactions} />
  </React.StrictMode>
);

