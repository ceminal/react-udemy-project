import PropTypes from "prop-types";

const Counter = (props) => {
  const { counter, setCounter, children } = props;

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {children}
      <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
        -
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  counter: PropTypes.number,
  children: PropTypes.object,
  setCounter: PropTypes.func,
};
