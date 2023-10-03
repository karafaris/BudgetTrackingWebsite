import React, { createContext, useReducer } from "react"
//import ExpenseList from '../components/ExpenseList'


const AppReducer =(state, action) => {
    
    switch(action.type){
        case 'ADD_EXPENSE':
        return{
            ...state,
            expenses:[...state.expenses, action.payload],

        }

        case 'DELETE_EXP':
            return{
                ...state,
                expenses: state.expenses.filter((expense) => 
                    expense.id !== action.payload),
    
            }


            case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};


            
        default:
            return state;

            
    }
}




var apiURL = 'http://localhost:3001/all';


export const initialState ={
    budget:2000,
    expenses: [],
}

const fetchPromise = fetch(
    apiURL,
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data,"93");
        
        for(let i=0; i<data.length; i++){
            var myList = {}
            myList["id"]=data[i]["_id"]
            myList["name"]=data[i]["expense"]
            myList["cost"]=data[i]["amount"]
            initialState["expenses"].push(myList)
        }
        console.log(initialState , "105")


        
        
        
    });





    export const AppContext = createContext();
    export let AppProvider = (props) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);
        return(
        <AppContext.Provider
             value={{
             budget: state.budget,
             expenses: state.expenses,
             dispatch
        }}>
            {props.children}
            </AppContext.Provider>)
    
    }
    