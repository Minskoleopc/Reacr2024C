import React, { Component } from "react";

class App6 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    // if else approach

    // render() {
    //     if (this.state.isLoggedIn) {
    //         return <h1>Welcome chinmay !</h1>
    //     }
    //     else {
    //         return <h1>Welcome Guest !</h1>
    //     }

    // }

    //element variable based approach
    // render() {
    //     let message ;
    //     if (this.state.isLoggedIn) {
    //         message = <h1>Welcome chinmay !</h1>
    //     }
    //     else {
    //         message = <h1>Welcome guest !</h1>
    //     }
    //     return <div>{message}</div>

    // }

    // render() {
    //     return (
    //         <div>
    //             {this.state.isLoggedIn ?
    //                 <h1>Welcome back again !</h1> :
    //                 <h1>Welcome new place !</h1>
    //             }
    //         </div>
    //     )
    // }


    render() {
        return this.state.isLoggedIn && <h1>Welcome chinmay !</h1>
    }





}
export default App6