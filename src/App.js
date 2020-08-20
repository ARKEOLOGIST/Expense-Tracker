import React from 'react';
import './App.css';

import Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/incomeexpenses';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
      </div>
    </div>
  );
}

export default App;
