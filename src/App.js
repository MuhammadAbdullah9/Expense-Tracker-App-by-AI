import React from 'react'
import './App.css';

// My components

import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './components/GlobalValue'

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header></Header>
        <div className="main">
          <Balance></Balance>
          <AccountSummary></AccountSummary>
          <TransactionHistory></TransactionHistory>
          <AddTransaction></AddTransaction>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
