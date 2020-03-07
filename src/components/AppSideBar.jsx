import React from 'react';
import axios from 'axios';

class AppSideBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
    this.search = this.search.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  componentDidMount() {
    this.search(1);
  }


  search(p) {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(response => {
        this.setState({
            pokemons: response.data.results
        });
        console.log(this.state.pokemons);
   });
  }
    render(){
      return(
        <nav id="sidebar" className={this.props.active ?  null: 'active' }>
        <div className="sidebar-header">
            <h3>Pokédex</h3>
        </div>
        <ul className="list-unstyled components">
          {this.state.pokemons.map(this.renderOptions) }
        </ul>
    </nav>
      )
      }
      renderOptions(pokemon){
       var id= this.state.pokemons.indexOf(pokemon) + 1;
        return(
          <li key={ id }>
            <a onClick={() => this.props.handleOnClick(id)}>{ pokemon.name }</a>
         </li>
        );
      }
}
export default AppSideBar;