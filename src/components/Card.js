import React from "react";

const Card = ({name, email, username}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://avatars.dicebear.com/api/avataaars/${username}.svg?size=200`} alt={username} />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;