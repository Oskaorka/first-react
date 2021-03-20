import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//     // this.nextYear = this.nextYear.bind(this);
//     this.nextYear = () => {
//       this.setState(state => ({
//               years: ++state.years
//             }) )
//     }
//   }
//   // nextYear() {
//   //   console.log(1);
//   //     this.setState(state => ({
//   //       years: ++state.years
//   //     }) )
//   // }
//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//       return (
//         <>
//         <button onClick={this.nextYear}>+</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//       )
//   }
// }


// const All = () => {
//   return (
//     <>
//       <WhoAmI name='Jack' surname='Black' link='facebook.com' />
//       <WhoAmI name='Lucia' surname='Star' link='facebook.com' />
//       <WhoAmI name='Fredy' surname='Puncher' link='facebook.com' />
//     </>
//   )
// }

ReactDOM.render(<App/>, document.getElementById('root'));


