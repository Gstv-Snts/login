import React from 'react';
function App() {
  interface UserInterface {
    name: string,
    age: number
  }
  const gustavo: UserInterface = {
    name: "gustavo",
    age: 21
  }
  return (
    <div className="App">
      <h1>{gustavo.age}</h1>
    </div>
  );
}

export default App;
