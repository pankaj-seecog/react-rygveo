
const iniState  = {
  players : 11
}
const CricketPlayersReducer = (state=iniState,action)=>{
switch(action.type){
  case 'OUT':
return {
  players : state.players - 1
}
  case 'CATCH':
return {
  players : state.players - 1
}
}
return state;
}

export default CricketPlayersReducer;