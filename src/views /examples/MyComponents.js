import React from "react";

class MyComponents extends React.Component {


    state = { 
        name: "Thien Phu Nguyen", 
        age: 20
    }
    handleButton = () => {
        alert("click me"); 
    }
    handleOnchange = (e) => {
        this.setState({ name: e.target.value });
    }
  render() {
    console.log(">>> call render: ", this.state);
    return (
        
<   >
      <div className="first"> 
        <h1>My Components</h1>
      </div>
      <div className="second">
        My Name is  <input onChange= {(e) => this.handleOnchange(e)}   /> <h1> {this.state.name}</h1>

      </div>
     <div className="third"> 
        <button onClick={()=> this.handleButton()}> Click Me</button>
     </div>
       
      
    </>
    );
  } 
}
    
export default MyComponents;