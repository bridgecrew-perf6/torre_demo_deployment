import React, {useEffect} from 'react'
import Header from './components/Header'
import './App.css';

// fetch("https://search.torre.co/people/_search/?",{method: "POST"})
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

function App() {

  const url = "https://search.torre.co/people/_search/?";

  const fetchPeople = () => {
    fetch(url,{method: 'POST'})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchPeople(url);
  }, [])

  return (
    <div className="container">
        <Header brand="Torre's Candidate Index" />
        <div className="App">
            
        </div>

    </div>
  );
}

export default App;
