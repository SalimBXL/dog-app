import React from "react";
import {Link} from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({dog}) => {
    return (
        <div className="DogDetails row justify-content-center mt-5">
            <div className="col-11 col-lg-5">
                <div className="DogDetails-card card shadow-lg">
                    <img className="DogDetails-img card-img-top" src={dog.src} alt={dog.name}/>
                    <div className="card-body">
                        <h2 className="card-title">{dog.name}</h2>
                        <h4 className="card-subtitle text-muted">
                            {dog.age} years old
                        </h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {dog.facts.map((fact, idx) => (
                            <li key={idx} className="list-group-item">{fact}</li>
                        ))}
                    </ul>
                    <div className="card-body">
                        <Link className="DogDetails-button btn btn-info" to="/dogs">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DogDetails;