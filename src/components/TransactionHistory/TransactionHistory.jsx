export const TransactionHistoryHeader = ({ transactions }) => {
    
    return (
    <div className='wrapper' 
        style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
            }}
     >
    <table> 
        <thead>
        <tr>
        <td>ID</td>
        <td>type</td>
        <td>amount</td>
        <td>currency</td>           
        </tr>
        </thead>
        <tbody>
        {transactions.map(element =>
            <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.type}</td>
            <td>{element.amount}</td>
            <td>{element.currency}</td>
            </tr>
        )}
        </tbody>
        </table>
    </div>  
    );
           
};    
