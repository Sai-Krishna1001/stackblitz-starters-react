import * as React from 'react';
import './style.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
      </header>
      <div className="container">
        <aside>
          <h2>Side Navigation</h2>
        </aside>
        <main>
          <h2>Main Content</h2>
          <p>Welcome to my web page!</p>
        </main>
      </div>
      <footer>
        <h3>Footer</h3>
        <p>&copy; 2023 Your Website</p>
      </footer>
    </div>
  );
};

export default App;
