import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Movie from './pages/Movie';
import Addmovie from './pages/Addmovie';
import Editmovie from './pages/Editmovie';

function App() {
  return (
    <BrowserRouter>
     <Router>
       
        <Route exact path="/" component={Movie} />
        <Route  path="/add-movie" component={Addmovie} />
        <Route  path="/edit-movie/:id" component={Editmovie} />


   </Router>
    </BrowserRouter>

  );
}

export default App;
