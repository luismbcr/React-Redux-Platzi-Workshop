import React from 'react';
import HomeLayout from './components/Home_layout';
import { connect } from 'react-redux';

const App = ({ characters }) => (
  <div className="App">
    <h1 class="text-center">Rick and Morty Fun App</h1>
      <HomeLayout characters={characters} />

  </div>
);

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps)(App);
