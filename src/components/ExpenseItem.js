import React, {useContext} from "react";
import {TiDelete} from 'react-icons/ti'
import { AppContext } from "../context/AppContext";
import { initialState } from "../context/AppContext";

const ExpenseItem = (props) => {

    const {dispatch} = useContext(AppContext)

    const editExpense = () => {

        var edit = window.prompt("Enter new amount:")
        console.log(props.id, "13")
        console.log(props.cost, "14")
        //console.log(edit)

        for(let i=0; i < initialState["expenses"].length; i++){
            if(props.id===initialState["expenses"][i]["id"]){
                 initialState["expenses"][i]["cost"] = edit
                console.log(initialState["expenses"][i]["cost"])
                var apiURL = 'http://localhost:3001/all'+props.id+'?amount='+props.cost
                console.log(apiURL)
                try{
                    const updateExpense = {
                        method: 'PUT',
                        

                    }
                    fetch(apiURL, updateExpense)
                     .then(response => response.json())
                }
                
                catch(err) {
                    console.error(`Error: ${err}`);
                  }
        
            }
            
     

        }

    }

    const deleteExpense = () => {

        for(let i=0; i<  initialState["expenses"].length; i++ ){
            //console.log(initialState["expenses"][1])

                if(initialState["expenses"][i]["id"]=== props.id){
                    console.log("Delete" + props.id)
                    
                    var apiURL = 'http://localhost:3001/all'+props.id

                        try{
                            const deleteExpense = {
                                method: 'DELETE'

                            }
                            fetch(apiURL, deleteExpense)
                             .then(response => response.json())
                        }
                        
                        catch(err) {
                            console.error(`Error: ${err}`);
                          }

                }

        }
    

          console.log(props.id, props.name, props.cost)
        

        dispatch({
            type:'DELETE_EXP',
            payload:props.id
        })

        
    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="  ">
                    ${props.cost}
                   
                </span>
                <button  type='button' class='btn btn-primary' onClick={editExpense}>Edit</button>
                <TiDelete size='1.5em' onClick={deleteExpense}></TiDelete> 
                
            </div>
        </li>
    )
    
}

export default ExpenseItem