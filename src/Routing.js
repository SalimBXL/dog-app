import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';

const Routing = ({dogs}) => {

    const GetDog = () => {
        const { name } = useParams();
        const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLocaleLowerCase());
        return <DogDetails dog={currentDog} />
    };
    
    return (
        <Routes>
            <Route path="*" element={<h1>404</h1>} />
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<GetDog />} />
      </Routes>
    );
}

export default Routing;