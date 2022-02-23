import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import { ApiConfig } from "../ApiConfig";

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        const url = ApiConfig.apiurl + ApiConfig.retrievalendpoint; //create an ApiConfig.js inside the src folder and populate it with your credentials and pass them along to the actual parameters required by your api provider to make the request
        fetch(url)
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
        const { robots, searchfield } = this.state;
        const filteredMalakes = robots.filter(user => {
            return user.name.toLowerCase().startsWith(searchfield.toLowerCase());
        });
        return !robots.length ?
            (
                <h1 className="tc">Please wait..</h1>
            ) :
            (
                <div className="tc">
                    <h1 className="f2"><a href='http://localhost:3000/'>My Random Friends</a></h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredMalakes} />
                        </ErrorBoundary>
                    </Scroll>    
                </div>    
            )
    }
}

export default App;