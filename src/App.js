import React from 'react';
import './App.css';

import Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/incomeexpenses';
import TransactionList from './components/transactionlist';
import AddTransaction from './components/addtransaction';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
