import './App.css';
import { useState } from 'react'
import Counter from './Counter'

function App() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const totalCount = counts.reduce((sum, b) => sum + b, 0)

  return (
    <div className="App">
      <div className="counters">
        {counts.map((value, idx) => {
          return (
            <Counter
              key={idx}
              idx={idx}
              counts={counts}
              onClick={newCounts => setCounts(newCounts)}
            />
          )
        })}
      </div>

      <div>
        <p>Total: {totalCount}</p>
        <button onClick={() => {
          const countsCopy = [...counts];
          countsCopy.push(0)
          setCounts(countsCopy);
        }
        }>Add Counter</button>
      </div>
    </div>
  );
}

export default App;
