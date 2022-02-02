import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList'
import SearchBox from './Components/SearchBox/SearchBox';

function App() {
  const [cats, setCats] = useState([]);
  const [searchField, setSearchField] = useState('')
  const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchField.toLowerCase()));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => { setCats(users) });
  }, [])

  return (
    <div className="App">
      <h1 className="title"><span>Catgenda App</span></h1>
      <SearchBox
        placeholder="Search user"
        handleChange={e => setSearchField(e.target.value)}
      />
      <CardList cats={filteredCats} />
    </div>
  );
}


export default App;
