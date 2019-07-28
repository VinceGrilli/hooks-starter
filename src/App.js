import React, { useState, useEffect, useRef } from 'react';
import Counter from './Counter';
import useTitleInput from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  return (
    <div className="main-wrapper" ref={ref}>
      <h1>Level Up Dishes</h1>
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
    </div>
  );
};

export default App;
