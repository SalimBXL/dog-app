import React from "react";
import {Link} from "react-router-dom";
import "./DogList.css";

const DogList = ({dogs}) => {
    
    return (
        <div className="DogList">
            <h1 className="display-1 text-center my-5">Dog List!</h1>
            <div className="row">
                {dogs.map(dog => (
                    <div className="Dog col-md-4 text-center" key={dog.name}>
                        <img className="Dog-img shadow-lg " src={dog.src} alt={dog.name} />
                        <Link className="Dog-link shadow" to={`/dogs/${dog.name.toLowerCase()}`}><h3>{dog.name}</h3></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;