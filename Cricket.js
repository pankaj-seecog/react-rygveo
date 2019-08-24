import React from 'react';
import {connect} from 'react-redux'
class Cricket extends React.Component{


render(){
  return (
    <div>
The players is {this.props.cPlayers}<br/>
The runs is {this.props.cRuns}
<hr/>
<button onClick={this.props.cFOUR}>4 Runs</button> | 
<button onClick={this.props.cSIX}>6 Runs</button> | 
<button onClick={this.props.cWIDE}>Wide Ball</button> | 
<button onClick={this.props.cOUT}>OUT</button> |
<button onClick={this.props.cCATCH}>CATCH</button>
    </div>
  )
}
}

//map the state of store to tyeh props of teh Component

let mapStateToProps = (state)=>{//state belongs to teyh 

console.log(state)
return {
  cRuns : state.runsReducer.runs,
  cPlayers : state.playersReducer.players
}

}
//component dispatch actio(information object) to the reducer
//dispatch belogs the redux store
let mapDispatchToProps = (dispatch)=>{
return {
  cFOUR : ()=>dispatch({type : 'FOUR'}),
  cSIX : ()=>dispatch({type : 'SIX'}),
  cWIDE : ()=>dispatch({type : 'WIDE',}),
  cOUT :  ()=>dispatch({type : 'OUT'}),
  cCATCH : ()=>dispatch({type : 'CATCH'})
}
}
//both the cINC , cDEC are the props methods
//HOC (Higher order component) connect

export default connect(mapStateToProps,mapDispatchToProps)(Cricket);

//connect HOC will connect the store with the component