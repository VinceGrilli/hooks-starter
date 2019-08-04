import React, { useState, useEffect, useRef } from 'react';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    console.log('ran fetchDishes');
    const res = await fetch(
      `https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes`
    );
    const data = await res.json();
    setDishes(data);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
        Level Up Dishes
      </h1>
      <Toggle />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        action=""
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
      {dishes.map(dish => (
        <articale className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredients => (
              <span>{ingredients}</span>
            ))}
          </div>
        </articale>
      ))}
    </div>
  );
};

export default App;
