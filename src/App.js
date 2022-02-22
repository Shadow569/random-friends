import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import { robots } from "./robots";
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render(){
        const filteredMalakes = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().startsWith(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f2"><a href='http://localhost:3000/'>My Random Friends</a></h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredMalakes} />
            </div>    
        )
    }
}

export default App;