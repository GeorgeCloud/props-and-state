import './Counter.css'

function Counter(props){
  const { idx, counts, onClick } = props;
  const countsCopy = [...counts];
  const count = counts[idx];

  return (
    <div>
      <span>Counter Id: {idx}</span>
      <button
        className="deleteCounter"
        onClick={() => {
          countsCopy.splice(idx, 1);
          onClick(countsCopy);
        }}
      >Delete</button>

      <h2>{ count }</h2>

      <button onClick={() => { countsCopy[idx]-=1; onClick(countsCopy)}}>
        -
      </button>

      <button onClick={() => { countsCopy[idx]+=1; onClick(countsCopy)}}>
        +
      </button>
    </div>
  )
}

export default Counter
