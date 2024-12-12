import React , {Component} from "react";

class App10 extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:"welcome to js class"
        };
    }

    changeMessage(){
        //this.state.message = "Thank you subscribing !"
        this.setState({
            message:"Thank you subscribing !" 
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click to subcribe !</button>
            </div>
        )
    }
}

export default App10