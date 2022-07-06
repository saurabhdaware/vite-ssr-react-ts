import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Count Plus</button>
    </div>
  )
}

export default App;