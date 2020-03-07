import React, { Component } from 'react';
import axios from 'axios';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';
import AppSideBar from './AppSideBar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      allpokemons:[],
      isActive: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    axios.get(`http://pokeapi.co/api/v2/pokemon/1`)
      .then(res => {
        console.log(res.data)
        const pokemon = new Pokemon(res.data);
        this.setState({ pokemon });
      }).catch(err => console.log(err));
  }
  handleOnClick(id) {
    axios.get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => {
        console.log(res.data)
        const pokemon = new Pokemon(res.data);
        this.setState({ pokemon });
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="wrapper">
        <AppSideBar active={this.state.isActive} handleOnClick={this.handleOnClick}/>
        <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-danger"  onClick={ ()=>{ this.setState(prev=>({ isActive: !prev.isActive }))}}>
                <i className=" 	fas fa-bars"/>
                &nbsp; &nbsp; &nbsp;
                <span>Ver todos los pokemon</span>
            </button> 
        </div>
    </nav>
        <center><h1>Bienvenido al Pokédex</h1></center>
          <div className="row">
            <div className="App">
              <PokeList handleOnClick={this.handleOnClick} />
              <DetailView pokemon={ this.state.pokemon } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
