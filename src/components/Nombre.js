import React, { Component } from 'react';


 class Nombre extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: props.name
    }
    console.log('/*** constructor(props) ***/');
  }
  
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('/*** getDerivedStateFromProps(nextProps, prevState) ***/');    
    if (prevState.name !== nextProps.name) {
      // necesario para actualizar la imagen cada vez que cambie this.props.src
      return { name: nextProps.name };
    }
    
    return null;
  }
  
  
  render() {
    console.log('/*** render() ***/');      
    return (
        <h1 name={this.state.name}>
        {this.state.name}
        </h1>      
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

export default Nombre