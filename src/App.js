import React from 'react';
import Counter from './Counter';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.count);

  const voters = [
    'ZIdan Zinedin',
    'Suhail Khan',
    'Farhan Kuz',
    'Guz Kilic',
    'Paul Paugba',
  ];
  return (
    <div className="App">
      <h1>Simple Redux Counter</h1>
      <h3>Total Votes: {count}</h3>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}

export default App;
