import React from "react";

class LifeComponent extends React.Component{
// // -------------------ComponentDidMont-------------------------------------
//      It is last satate of the life cicle. Any change in it then render will callor run again
//
    constructor(){
        super();
        this.state = {
            name:"",
            message:"This is first meassge",
            
        }
        // console.log("Constracter");
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.setState({
            name:"shivam"
        })
    }       
    componentWillMount() {
        // console.log(this.state.message);
        this.state = {
          message: "This is an updated message"
        };
    }

    render(){
        // console.log("render");
        return(
            <>
            
                <div>
                <h1>Hello my name is {this.state.name} </h1>
                
                </div>
                <div>
                    <h2>{this.state.message}</h2>

                </div>
                
            </>
        )
        }
// --------------------------------------------------------------------

//==============================================================================================================

// -------------------ComponentDidUpdate-------------------------------------
//      ComponentDidUpdate invoke immedatly after update ouccr,setsate shoul in condition otherwise it will 
//      take it to infinite loop

///           this function is not working properly
    // constructor(){
    //     super();
    //     this.state = {
    //         didUpdateName:"",
    //         DidUpdateValue:0
    //     }
        
    // }
    
    // componentDidUpdate(){
        
    //     if(!this.state.didUpdateName){
    //         this.setState({
    //             didUpdateName:"ComponentDidUpdate work "
                
    //         })            
    //     }}      
    

    // render(){
    //     console.log("render");
    //     return(
    //         <>
            // <h1>{this.state.didUpdateName} </h1>
            // <button onClick={ () => this.setState({DidUpdateValue:1}) }  >Click me</button>
            // <h2>value is {this.state.DidUpdateValue} </h2>
    //         </>
    //     )
    //     }

//==============================================================================================================

// -------------------ComponentwillUnm  ount-------------------------------------
    /// Whenever a component destryed  it called just before. setstate can not be called in it

//     constructor(){
//         super();
//         this.state = {
//         message: "This is initial message"
//     };
        
//     }
//     componentWillMount() {
//         this.state = {
//           message: "This is an updated message"
//         };
//     }
        
    
//     render(){
        
//         return(
//             <>
//             <h2>Update the state</h2>
//         <h3>  {this.state.message} </h3>
//             </>
//         )
//         }







    }
export default LifeComponent