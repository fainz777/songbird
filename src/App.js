import React from 'react';
import Container from '@material-ui/core/Container';
import {SongBirdGameService} from "./services/songBirdGameService";
import { Header } from  './components/_layout/Header';
import { Main } from "./components/_layout/Main";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      step: 0,
    };
  }
  
  
  
  render() {
    return(
    <Container maxWidth="lg">
      <Header score={this.state.score} step={this.state.step}/>
      <Main />
    </Container>
    );
  }
}

export default App;
