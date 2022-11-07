import React from "react";
import Form from "../components/Form";

function Home({id}){
   
    return(
        <>
         <h1 className = "text-center" >Employee Information</h1>
         <div className = " container d-flex justify-content-center" >
            <Form id = {id} />
         </div>
        </>
    )

}


export default Home;