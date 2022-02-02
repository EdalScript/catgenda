import React from 'react';
import './App.css';
import CardList from './Components/CardList/CardList'
import SearchBox from './Components/SearchBox/SearchBox';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ cats: users }));
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1 className="title"><span>Catgenda App</span></h1>
        <SearchBox
          placeholder="Search user"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
