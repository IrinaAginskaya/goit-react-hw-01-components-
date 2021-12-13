import Profile from "./components/Profile/Profile"
import user from "./components/Profile/user.json"
import friends from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList/FriendList";
import data from "./components/Statistics/data.json";
import Statistics from "./components/Statistics/Statistics";
import transactions from "./components/TransactionHistory/transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"



export default function App() {
    return (<div>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
        <FriendList friends={friends} />
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
        <TransactionHistory items={transactions} />
       
    </div>);
}