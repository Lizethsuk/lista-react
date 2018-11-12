import React, { Component } from 'react';
import Animal from './components/Animal';
import Info from './Info/data.json';
import axios from 'axios';

import './App.css';
import Nombre from './components/Nombre';
// import Canciones from './components/Canciones';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.animales = Info;
    this.animalIndex = 0;
    this.state = { 
      src: this.animales[this.animalIndex].image,
      name: this.animales[this.animalIndex].name,
      linkCanciones: this.animales[this.animalIndex].canciones
    };
  }


  cambiarAnimal = () => {
    this.animalIndex++;
    if(this.animalIndex<=Info.length-1){
      let animalSrc = this.animales[this.animalIndex].image;
      let animalName = this.animales[this.animalIndex].name;
      let animalCanciones = this.animales[this.animalIndex].canciones
      this.setState({
        src: animalSrc,
        name: animalName,
        linkCanciones: animalCanciones
      });
    }
    
    // if (!animalSrc) {
    //   this.animalIndex = 0;
    //   animalSrc = this.animales[this.animalIndex].image;
    // }
  };


 

  


  
  render() {
    // axios.get(this.state.linkCanciones)
    // .then((res)=>{
    //   // console.log(res);
    //   const canciones= res.data.toptracks.track
    //   this.setState({ canciones });

    // })


    return (
      <div>
        <Nombre name={this.state.name}/>
        <Animal src={this.state.src}/>
        <button onClick={this.cambiarAnimal}>Cambiar animal</button>
        {/* <Canciones linkCanciones={this.state.linkCanciones} /> */}
        <ul>
        {/* { this.state.canciones} */}
      </ul>
      </div>
    );
  }
}

export default App;
