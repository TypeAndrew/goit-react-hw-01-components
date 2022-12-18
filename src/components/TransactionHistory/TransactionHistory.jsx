import React from 'react'
import styles from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistoryHeader = ({ transactions }) => {
    
    return (
    <div className='wrapper' 
        style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
            }}
     >
    <table> 
        <thead className={styles.tableHead}>
        <tr>
       
        <td>TYPE</td>
        <td>AMOUNT</td>
        <td>CURRENCY</td>           
        </tr>
        </thead>
        <tbody>
        {transactions.map(element =>
            <tr key={element.id}>
            
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

TransactionHistoryHeader.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
  
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,  
      })
  )
}