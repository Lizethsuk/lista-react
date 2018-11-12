import React, { Component } from 'react';


 class Animal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      src: props.src
    }
    console.log('/*** constructor(props) ***/');
  }
  
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('/*** getDerivedStateFromProps(nextProps, prevState) ***/');    
    if (prevState.src !== nextProps.src) {
      // necesario para actualizar la imagen cada vez que cambie this.props.src
      return { src: nextProps.src };
    }
    
    return null;
  }
  
  
  render() {
    console.log('/*** render() ***/');      
    return (
        <img className="cat__img"
          src={this.state.src}
          />
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

export default Animal