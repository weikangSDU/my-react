import { createStore } from 'redux'
const reducer = (prevState, action) => {
  console.log(action, 'action')
  let newState = {...prevState}
  switch(action.type) {
    case 'kewinhide-tabbar':
      newState.show = false
      return newState
    case 'kewinshow-tabbar':
      newState.show = true
      return newState
    default: 
      return prevState
  }
}
const store = createStore(reducer, {show: true})
export default store