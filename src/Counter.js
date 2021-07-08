import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

export default function Counter(props) {
  const count = useSelector((state) => state.counter.count);

  const { name } = props;
  const dispatch = useDispatch();

  const [votes, setVotes] = React.useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
      setVotes(votes - 1);
    }
  };

  return (
    <div style={{ backgroundColor: 'grey', margin: '15px' }}>
      <h2>{name}</h2>
      <h3>{`Votes: ${votes}`}</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
