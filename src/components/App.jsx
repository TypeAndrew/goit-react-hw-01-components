
import { username, tag, location, avatar, stats } from './Profile/user.json'
import { Profile } from './Profile/Profile';
import statData from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList, FriendListItem } from './FriendList/FriendList';
import { TransactionHistoryHeader } from './TransactionHistory/TransactionHistory';
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json';
import React from 'react'

export const App = () => {
    return (
    <>
    <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
    <Statistics statHeader="Upload data" statData={statData}/>
    <FriendList friends={friends}> 
     <FriendListItem />            
    </FriendList>            
    <TransactionHistoryHeader transactions={transactions} />
     </>       
    );
}
