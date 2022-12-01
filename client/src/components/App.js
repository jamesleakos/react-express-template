import React from 'react';
import axios from 'axios';

const request = () => {
  axios.get('/api')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}

function App() {
  return (
    <div className="App" onClick={ () => request() }>
      James Leakos is very cool
    </div>
  );
}

export default App;
