import React, {Component} from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            message: ''
        }
    }

    componentDidCatch(error, info){
        console.log(error, info);
        this.setState({hasError:true, message:error.message});
    }

    render(){
        if(this.state.hasError){
            return <h1>{ this.state.message }</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;