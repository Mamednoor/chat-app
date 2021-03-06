import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact 
      name="Staline"
      avatar="https://randomuser.me/api/portraits/women/22.jpg"
      online />
      <Contact
      name="Poutine"
      avatar="https://randomuser.me/api/portraits/men/5.jpg" />
      <Contact
      name="Michael Jackson"
      avatar="https://randomuser.me/api/portraits/men/16.jpg"
      online />
    </div>
  );
}

export default App;
