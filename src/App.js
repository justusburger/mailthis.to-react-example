import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="https://mailthis.to/christventer" method="POST">
        <input type="text" name="name" placeholder="Your name"/><br/>
        <input type="email" name="_replyto" placeholder="Your email"/><br/>
        <textarea name="message" placeholder="Message"></textarea><br/>
        <input type="hidden" name="_after" value="http://localhost:3000/"/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
}

export default App;
