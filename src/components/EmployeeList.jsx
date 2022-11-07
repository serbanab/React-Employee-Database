import React from "react";
import Employee from "./Employee";
import {connect} from "react-redux";
import "./EmployeeList.css";
import {Link} from "react-router-dom";
import {sortName , sortPrice , smallFilter , middleFilter , bigFilter , resetList} from "../Redux/Actions/Action";

function EmployeeList({state , sortName , sortPrice , smallFilter , middleFilter , bigFilter , resetList}){

    const handleCheckbox = (e) => {

       switch (e.target.id) {
        case "sortName":
            sortName(e.target.checked);
            document.querySelector("#sortPrice").checked = false;
            break;

       case "sortPrice":
            sortPrice(e.target.checked);
            document.querySelector("#sortName").checked = false;
        break;

        case "small":
            smallFilter(e.target.checked);
            document.querySelector("#middle").checked = false;
            document.querySelector("#big").checked = false;
            break;

        case "middle":
            middleFilter(e.target.checked);
            document.querySelector("#small").checked = false;
            document.querySelector("#big").checked = false;
            break;

        case "big":
            bigFilter(e.target.checked);
            document.querySelector("#middle").checked = false;
            document.querySelector("#small").checked = false;
            break;    
        default:
            break;
       }
    }
 
    return (
        <>
            <div className = "d-flex mt-3 employee-list">
                <div className="mt-5 list" >

                    <h5 className = "ms-4" >Sortare : </h5>

                    <div className = "form-check ps-5" >

                        <label htmlFor="nume" className="form-check-label mb-2" >Sortează după nume</label>
                        <input type="checkbox" name="nume" className="form-check-input " id = "sortName"  onClick={(e) => handleCheckbox(e)} />

                        <br />

                        <label htmlFor="pret" className="form-check-label mb-2" >Sorteaza dupa pret</label>
                        <input type="checkbox" name="pret" className = "form-check-input" id = "sortPrice"  onClick={(e) => handleCheckbox(e)} />

                        
                    </div> 

                    <h5 className = "ms-4" >Filtrare dupa pret : </h5>

                    <div className="form-check ps-5 h-50" >

                        <label htmlFor="small" className = "form-check-label mb-2" >{`<`}2500</label>
                        <input type="checkbox" name = "small"  className="form-check-input" id = "small" onClick = {(e) => handleCheckbox(e)} />

                        <br />
                        
                        <label htmlFor="middle" className = "form-check-label mb-2"  >2500-4000</label>
                        <input type="checkbox" name = "middle" className="form-check-input" id = "middle" onClick = {(e) => handleCheckbox(e)} />

                        <br />

                        <label htmlFor="big" className="form-check-label " >{`>`}4000</label>
                        <input type="checkbox" name = "big" className = "form-check-input" id = "big" onClick = {(e) => handleCheckbox(e)} />

                    </div>

                </div>
                <div className = " container " >    
                    <h1 className = "text-center mb-3 " >Lista Date Angajati</h1>
                    <ul className = "list-group " >
                        {state && state.map((val , index) => {
                            return <Employee key = {index} nume = {val[0]} prenume = {val[1]} meserie = {val[2]} 
                            salariu = {val[3]} data = {val[4]}
                            />
                        })} 
                    </ul>
                    <Link to = "/">
                        <button className="btn btn-primary btn-lg rounded-1 px-5 mb-5 mt-3 " onClick={() => resetList()} >Home</button>
                    </Link>  
                </div>
            </div>
        </>
    )
} 

const mapStateToProps = (state) => {

    return{
        state : state.employeeReducer.employee,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        sortName : (payload) => {
            dispatch(sortName(payload));
        },

        sortPrice : (payload) => {
            dispatch(sortPrice(payload));
        },

        smallFilter : (payload) => {
            dispatch(smallFilter(payload));
        },

        middleFilter : (payload) => {
            dispatch(middleFilter(payload));
        },

        bigFilter : (payload) => {
            dispatch(bigFilter(payload));
        }, 

        resetList : () => {
            dispatch(resetList());
        },

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(EmployeeList);