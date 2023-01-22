import React from "react";

// function GetName(prop){
//     return(
//         <div>
//         <h3>Name {prop.name}</h3>
//         </div>
//     )
// }

// export default GetName;

class Profile extends React.Component{

    constructor(){
        super();
        this.state = {
            name: "Shivam",
            number: 0
        }
    }
    update() {
        this.setState({
            name:"Garry",
            number: this.state.number+1

        })
    }

    render(){
        return(
            <>
            <h1>Name: {this.state.name}</h1>
            <h1>Count: {this.state.number}</h1>
            <button onClick={()=>{this.update()}}>Update</button>
            </>
        )
    }
}

export default Profile;