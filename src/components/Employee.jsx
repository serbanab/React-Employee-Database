import React from "react";

function Employee({nume , prenume , meserie , salariu , data}){


    return (

        <>
        
           <li className = "list-group-item d-flex justify-content-start rounded-0 " >
                <h4 className = "me-3" >Nume : {nume}</h4>
                <h4 className = "me-3" >Prenume : {prenume}</h4>
                <h4 className = "me-3" >Meserie : {meserie}</h4>
                <h4 className = "me-3" >Salariu : {salariu}</h4>
                <h4 className = "" >Data : {data}</h4>
           </li>
                    
        </>
    )

}

export default Employee;