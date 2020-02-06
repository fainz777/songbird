import React from 'react';
import Container from '@material-ui/core/Container';
import { Header } from  './components/_layout/Header';
import { Main } from "./components/_layout/Main";

import './App.css';

function App() {
    return(
        <Container maxWidth="lg">
            <Header/>
            <Main />
        </Container>
    );
}

export default App;
