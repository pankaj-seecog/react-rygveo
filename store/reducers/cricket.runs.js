
const iniState  = {
  runs : 0
}
const CricketRunsReducer = (state=iniState,action)=>{
switch(action.type){
  case 'FOUR':
return {
  runs : state.runs + 4
}
  case 'SIX':
return {
  runs : state.runs + 6
}
case 'WIDE':
return {
  runs : state.runs - 1
}
}
return state;
}

export default CricketRunsReducer;