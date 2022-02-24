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
            return (
                <div className="flex items-center justify-center">
                    <div className="pa2 bg-washed-red red shadow-4 w-80 f2 ma2 bl bw2 b--dark-red">
                        <span class="lh-title ml3">{this.state.message}</span>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;