import React from "react";
import InputGroup from "./InputGroup";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addEmployee} from "../Redux/Actions/Action";
import { useState } from "react";

function Form({state , addEmployee , id}){

    const [an , luna , zi ] = [new Date().getFullYear() , new Date().getMonth() , new Date().getDate()];
    let dateValue = `${String(an)}-${String(luna + 1)[1] === undefined ? "0" : ""}${String(luna + 1)}-${String(zi)[1] === undefined ? "0" : ""}${String(zi)}`;
    let inputsStatus = [] , areInputsValid ;

    const [status , setStatus] = useState([]);
    
    return(

        <>
           <form className="w-50" onSubmit={(e) => {
                e.preventDefault();
                const vector = [];

                Array.from(e.target.children).forEach(el => {
                    if(el.tagName === "INPUT" && el.value === ""){
                        inputsStatus.push(false);
                    }else if(el.tagName === "INPUT" && el.value !== ""){
                        inputsStatus.push(true);
                    } 
                });

                
                areInputsValid =  inputsStatus.every(el => {
                    if(el === true) return true;
                });

                console.log("asta este vali" , areInputsValid);

                if(areInputsValid){

                    Array.from(e.target.children).forEach(el => {
                        if(el.tagName === "INPUT") {
                             vector.push(el.value);
                             el.value = "";
                            } 
                        });

                        const localId = id(); 
                        vector.push(localId);
                    
                        addEmployee(vector)
                        setStatus(inputsStatus);

                }else{
                    setStatus(inputsStatus);
                }
                console.log("STATUS FINAL " , status);
                inputsStatus = [];

           }}  >
                <InputGroup nume = {"Nume"} labelValue = {"Nume :"} status = {status[0]} />
                <InputGroup nume = {"Prenume"} labelValue = {"Prenume :"} status = {status[1]} />
                <InputGroup nume = {"Meserie"} labelValue = {"Meserie :"} status = {status[2]} />
                <InputGroup nume = {"Salariu"} labelValue = {"Salariu :"} status = {status[3]} />
                <label htmlFor="date" className = "form-label" >Data :</label>
                <input type="date" name="date" value = {dateValue} className = "form-control rounded-1 mb-3"/>
                <div className = "d-flex justify-content-between" >
                    <button type="submit" className="btn btn-primary px-5 ">Submit</button>
                    <Link to = "/date">
                        <button className="btn btn-success" >Storage</button>
                    </Link>
                </div>
           </form>
        </>
    )
}

const mapStateToProps = (state) => {

    return {
        state : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee : (payload) => {
            dispatch(addEmployee(payload));
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Form);
