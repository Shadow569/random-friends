import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import { ApiConfig } from "../ApiConfig";

const App = () => {
    const [friends, setFriends] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filtered = friends.filter(user => {
        return user.name.toLowerCase().startsWith(searchfield.toLowerCase());
    });

    useEffect(() => {
        const url = ApiConfig.apiurl + ApiConfig.retrievalendpoint; //create an ApiConfig.js inside the src folder and populate it with your credentials and pass them along to the actual parameters required by your api provider to make the request
        fetch(url)
          .then(response => response.json())
          .then(
            (userList) => {
             setFriends(userList);
            }
          );
    })
    
    return !friends.length ?
        (
            <h1 className="tc">Please wait..</h1>
        ) :
        (
            <div className="tc">
                <h1 className="f2"><a href='http://localhost:3000/'>My Random Friends</a></h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filtered} />
                    </ErrorBoundary>
                </Scroll>    
            </div>    
        )
}

export default App;