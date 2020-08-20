import React from 'react';
import './App.css';

import Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/incomeexpenses';
import TransactionList from './components/transactionlist';
import AddTransaction from './components/addtransaction';
import { GlobalProvider } from './context/globalstate';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
