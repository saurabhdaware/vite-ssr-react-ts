import React, { Suspense } from 'react';
const Test = React.lazy(() => import('./Test'));


function App() {
  const [count, setCount] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, [])
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Count Plus</button>
      <Suspense fallback={<div>loading</div>}>
        { isClient && <Test /> }
      </Suspense>
    </div>
  )
}

export default App;