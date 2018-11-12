import React, { Component } from 'react';
import axios from 'axios';


 class Canciones extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      linkCanciones: props.linkCanciones
    }
    console.log('/*** constructor(props) ***/');
  }
  
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('/*** getDerivedStateFromProps(nextProps, prevState) ***/');    
    console.log(prevState);

    if (prevState.linkCanciones !== nextProps.linkCanciones) {
      // necesario para actualizar la imagen cada vez que cambie this.props.src
      componentDidMount( ) {
     
        const artistCanciones = Info.map(artist =>
           fetch(artist.canciones)
             .then(response => response.json())
             .catch(err => console.error(err))
         )
         Promise.all(artistCanciones)
           .then(arrayCanciones => {
             const dataArtist = arrayCanciones.map(canciones => {
               console.log(canciones);
               
                return {
                
                 songs:canciones.toptracks.track  ,
                    }
             })
             this.setState({
               linkCanciones: dataArtist[this.animalIndex]
             })
           })
       
     
       }
      return { linkCanciones: nextProps.linkCanciones };
    }
    
    return null;
  }
  
  
  render() {
    console.log('/*** render() ***/');
    // console.log(this.props.linkCanciones);
    
  
    console.log(this.state.linkCanciones);
    axios.get(this.state.linkCanciones)
    .then(res => {
      const canciones = res.data.toptracks.track;
      this.setState({ canciones });
    })
    
        
        
    return (
        
        <ul>
        { this.state.canciones.map(person => <li>{person.name}</li>)}
      </ul>
        // <h2 linkCanciones={this.state.linkCanciones}>jajajjajajja</h2>  
     );
   }

//    componentDidMount () {
//     console.log('/*** componentDidMount() ***/');
//     console.log('----------------------------------');
//    }
    
   // Se ejecuta solo hasta que hay un cambio de state o props,
   // pero no se ejecuta en el primer render
//    shouldComponentUpdate(nextProps, nextState) {
//       console.log('/*** shouldComponentUpdate(nextProps, nextState) ***/');
//       return true;
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//       console.log('/*** getSnapshotBeforeUpdate(prevProps, prevState) ***/');
//       return null;
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//       console.log('/*** componentDidUpdate(prevProps, prevState, snapshot) ***/');
//       console.log('----------------------------------');
//     }

}

export default Canciones