import React from 'react';
import Routing from "./Routing";
import Navbar from "./Navbar";
import './App.css';

function App({dogs}) {

  const dogsName = () => dogs.map(dog => dog.name);

  return (
    <div className="App">
      <Navbar dogs={dogsName()}/>
      <div className='container'>
        <Routing dogs={dogs}/>
      </div>
    </div>
  );
}


App.defaultProps = {
  dogs: [
    { name: "Whiskey", age: 5, src: "http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg", facts: ["Fact One", "fact Two", "Fact Three"] },
    { name: "Hazel", age: 5, src: "http://cdn.akc.org/content/article-body-image/rottie_cute_puppies.jpg", facts: ["Fact Four", "fact Five", "Fact Six"] },
    { name: "Tubby", age: 5, src: "http://cdn.akc.org/content/article-body-image/pom_cute_puppies.jpg", facts: ["Fact Seven", "fact Eight", "Fact Nine"] }
  ]
}

export default App;
