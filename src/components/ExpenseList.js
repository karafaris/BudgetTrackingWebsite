import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";





const ExpenseList = () => {

   // var apiURL = 'http://localhost:3001/all';

    const {expenses} = useContext(AppContext)

  

    return(
        <ul className="list-group">
            {expenses.map(((expense)=>(
                <ExpenseItem 
                id={expense.id} 
                name={expense.name}
                cost={expense.cost}
                />

            )))}
        </ul>
    )
}

export default ExpenseList