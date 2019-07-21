import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [count, setCount] = React.useState(0)
  const [people, setPeople] = React.useState([]);

  async function getPeople() {
    const response = await fetch(`/user?count=${count}`);
    const data = await response.json();
    setPeople(data.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>People Fetcher</h1>
          <input
            style = {{
              fontSize: '2rem',
              width: '35%'
            }}
            placeholder = "Enter No"
            type = "number"
            onChange={event => setCount(event.target.value)}
           />
           <button 
           style={{
              fontSize: '2rem',
           }}
           onClick={getPeople}
           >
             Submit
           </button>
           
           {people.map(person => (
              <div key={person.email}
                  style = {{
                    marginTop: '0.5em',
                  }}
              >
                <img
                  style = {{
                    borderRadius: '50%',
                    height: '100%'
                  }}
                  src = {person.picture.large}
                  alt = {person.name.first}
                />
                <div>
                  <h3>{person.name.first}</h3>
                  <p>{person.email}</p>
                </div>
               </div>
            ))}

        </div>
      </header>
    </div>
  );
}

export default App;
