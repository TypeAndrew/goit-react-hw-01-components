
export const FriendList = ({ friends }) => {

    return friends.map(user => {
        return(
        <div style={{
     
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
        }} key={user.id}>
            <p>{user.name}</p>
        </div>
        );
    });
};    