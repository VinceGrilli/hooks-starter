import React, { useState, useEffect, useRef } from 'react';
import useAbortableFetch from 'use-abortable-fetch';
import { useSpring, animated } from 'react-spring';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const { data, loading } = useAbortableFetch(
    `https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes`
  );
  const styledProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="main-wrapper" ref={ref}>
      <animated.h1
        style={styledProps}
        onClick={() => ref.current.classList.add('new-fake-class')}
      >
        Level Up Dishes
      </animated.h1>
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
      {data &&
        data.map(dish => (
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
