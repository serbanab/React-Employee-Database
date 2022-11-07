
import React from "react"
import {Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import Storage from "./pages/Storage"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }

    this.id = -1;

  }

  sendId(id){
    this.id++;
    return this.id;
  }

  render(){
    return(
      <>
        <Routes>
          <Route path = "/" element = {<Home id = {(id) => this.sendId(id)} />}/>
          <Route path = "/date" element = {<Storage/>}/>
        </Routes>
      </>
    )
  }

}

export default App;
