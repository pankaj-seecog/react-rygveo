import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Home from './Home';
import CricketRunsReducer  from  './store/reducers/cricket.runs';
import CricketPlayersReducer from './store/reducers/cricket.players';
import Cricket from './Cricket'
//Provider provides the state of store to the component

var rootReducer = combineReducers({
  runsReducer : CricketRunsReducer,
  playersReducer : CricketPlayersReducer,
  
})

let store = createStore(rootReducer)




// var //es5
// let iniState = {
//   count : 0
// }
//actionn is dispatched by the component
//action contains the type  + payload
// let rootReducer = (state=iniState,action)=>{
// switch(action.type){
//   case 'INC':
// return {
//   count : state.count+1
// }
//   case 'DEC':
// return {
//   count  : state.count -1
// }
//   case 'ADD':
//   return {
//   count : state.count + action.val
//   }
// }
// return state;
// }

// let store  = createStore(rootReducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Provider store={store}><Cricket /></Provider>, document.getElementById('root'));
