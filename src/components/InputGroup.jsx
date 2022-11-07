
import React from "react";

function InputGroup({nume , labelValue , status }){

    return(

        <>
            <label htmlFor = {nume} className="form-label" >{labelValue}</label>
            <input type = "text" name = {nume} className = "form-control rounded-1 mb-3" />
            {status === false ? <div>
                <h6 style={{color : "#DC3545"}}  >Completarea acestui camp este necesara : {nume}. </h6>
            </div> : null}
        </>

    )
}

export default InputGroup;