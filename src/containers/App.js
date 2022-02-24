import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import { ApiConfig } from "../ApiConfig";

function App() {
    const [friends, setFriends] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [loaded, setIsLoaded] = useState(false);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    useEffect(() => {
        if(loaded) return;
        const url = ApiConfig.apiurl + ApiConfig.retrievalendpoint; //create an ApiConfig.js inside the src folder and populate it with your credentials and pass them along to the actual parameters required by your api provider to make the request
        fetch(url)
          .then(response => response.json())
          .then(
            (userList) => {
             setFriends(userList);
             setIsLoaded(true);
            }
          );
    })

    const filtered = friends.filter(user => {
        return user.name.toLowerCase().startsWith(searchfield.toLowerCase());
    });

    const url = window.location;
    
    return !friends.length ?
        (
            <h1 className="tc">Please wait..</h1>
        ) :
        (
            <div className="tc">
                <h1 className="f2"><a href={url}>My Random Friends</a></h1>
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