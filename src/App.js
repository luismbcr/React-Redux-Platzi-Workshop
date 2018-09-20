import React from 'react';
import HomeLayout from './components/Home_layout';
import { connect } from 'react-redux';
import './App.css';

const App = ({ isLoading, characters }) => (
  <div className="App">
    <h1 className="text-center">Rick and Morty Fun App</h1>
      <HomeLayout characters={characters} isLoading={isLoading} />
  </div>
);

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(App);
