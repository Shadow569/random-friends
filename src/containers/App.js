import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(
            (userList) => {
              this.setState({
                robots: userList
              });
            }
          );
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render(){
        const filteredMalakes = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().startsWith(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots.length == 0){
            return (
                <h1 className="tc">Please wait..</h1>
            )
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f2"><a href='http://localhost:3000/'>My Random Friends</a></h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredMalakes} />
                    </Scroll>    
                </div>    
            )
        }
    }
}

export default App;