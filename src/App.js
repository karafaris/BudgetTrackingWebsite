import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/budget";
import Remaining from "./components/remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";


const App = () => {
  
  return(
    <AppProvider>
   
      <div className="container">
      <h1 className="mt-3">Budget Tracker</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col=sm">
          <Remaining />
        </div>
        <div className="col-sm">
        <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3">My Expenses </h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpense />
        </div>
      </div>
    </div>

    </AppProvider>
   
  )
}

export default App;