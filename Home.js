import React from 'react';
import {connect} from 'react-redux'
class Home extends React.Component{


render(){
  return (
    <div>
The count is {this.props.cCount}
<hr/>
<button onClick={this.props.cINC}>++</button> | 
<button onClick={this.props.cDEC}>--</button> |  
<button onClick={this.props.cADD}>Add</button>
    </div>
  )
}

}

//map the state of store to tyeh props of teh Component

let mapStateToProps = (state)=>{//state belongs to teyh store

return {
  cCount : state.count
}

}
//component dispatch actio(information object) to the reducer
//dispatch belogs the redux store
let mapDispatchToProps = (dispatch)=>{
return {
  cINC : ()=>dispatch({type : 'INC'}),
  cDEC : ()=>dispatch({type : 'DEC'}),
  cADD : ()=>dispatch({type : 'ADD',val : 5})
}
}
//both the cINC , cDEC are the props methods
//HOC (Higher order component) connect

export default connect(mapStateToProps,mapDispatchToProps)(Home);

//connect HOC will connect the store with the component