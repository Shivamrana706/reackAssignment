import React from "react";

class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            result:""
        }
    }
    setUsername = (e) => {
        this.setState({
            username : e.target.value
        })
        console.log(this.username)
        
    }
    setPassword = (e) => {
        
        this.setState({
            password : e.target.value,
            
        })
        console.log(e.target.val)
    }
    //  Need to call the function and set to <P> tag
    // valid = (e) => {
    //     if(!this.state.username.includes("@") && this.state.password.length<5){
    //         alert("invalid username");
    //     }
    // }

    checkLogin = (e) =>{
        if(this.state.username == "" && this.state.password == "") {
            alert("please enter the username and password");
        }else if(this.state.username == ""){
            alert("Please enter the username");
        }else if(this.state.password == "") {
            alert("please enter the password");
        }
        else{
            if(this.state.username == "admin" && this.state.password == "Pass1234"){
                this.setState({
                    result:"Login Sucessfully"});
            }else{
                this.setState({
                    result:"Invalid username and password"});
            }
        }
        
        
    }

    render() {
        return (
            <>                            
                <form className="myForm">
                    <div>
                        <label>Username </label>
                        <input onChange={this.setUsername}  type="text" name="uname" required />
                        <h5></h5>
                        
                    </div>
                    <div>
                        <label>Password </label>
                        <input onChange={this.setPassword} type="password" name="pass" required />
                        <h5></h5>
                    </div>
                    <div>
                        <button onClick={this.checkLogin}>Submit</button>
                    </div>
                    <div>
                    <span className="myResult" >{this.state.result}</span>
                    </div>
                </form>
        
            </>
        )
    }
}

export default Login