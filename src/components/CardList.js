import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            { 
                robots.map(user =>{
                    return (<Card 
                                key={user.id} 
                                id={user.id} 
                                email={user.email} 
                                username={user.username} 
                                name={user.name} 
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;