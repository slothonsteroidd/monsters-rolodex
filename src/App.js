import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/cardlist.components.jsx";
import { SearchBox } from "./components/searchbox/searchbox.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }

  handler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((data) =>
      data.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handler={this.handler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
