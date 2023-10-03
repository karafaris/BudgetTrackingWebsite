import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const Budget = (props) => {
    const {budget} = useContext(AppContext);
    return(
        <div className="alert alert-secondary">
            <span>Budget: ${budget}</span>
            <button  type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>

        </div>
    )
}

export default Budget;