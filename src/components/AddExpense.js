import React, {useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';

const AddExpense = () => {
    const {dispatch} =useContext(AppContext)
    const [name, setName] =useState('');
    const [cost, setCost] =useState('');



    const onSave = (event) => {
        event.preventDefault();
        
        const expense ={
            id:uuidv4(),
            name:name,
            cost: parseInt(cost)
        }


      
       dispatch({//switch statment in context
            type: 'ADD_EXPENSE',
            payload: expense
        })

        var apiURL = 'http://localhost:3001/save';

        try {  
            console.log(name)
            console.log(cost)

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "expense": name, "amount":cost })
            };
            fetch(apiURL, requestOptions)
                .then(response => response.json())
               
       
           /* const response =  fetch(apiURL, {
              method: 'post',
              body: {
                "expense":name,
                "amount":cost
              }
            });*/
            
            console.log('Completed!', requestOptions);
          } catch(err) {
            console.error(`Error: ${err}`);
          }

       setName('');
       setCost('');

        

    }

    return(
       <form onSubmit={onSave}>
        <div className="row">

            <div className="col-sm">

                <label for="name">Expense</label>
                <input required ="required" type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)}></input>

            </div>

            <div className="col-sm">
                <label for="cost">Amount</label>
                <input required ="required" type="text" className="form-control" id="cost" value={cost} onChange={(event) => setCost(event.target.value)}></input>
            </div>

            <div className="col-sm">
                <button type="Submit" className="btn btn-primary">Save</button>
            </div>

        </div>
       </form>
    )
}

export default AddExpense;