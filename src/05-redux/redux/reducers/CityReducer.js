/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const CityReducer = (prevState={
    cityName:"北京"
   //  ...
 },action)=>{

    let newState = {...prevState}
    switch(action.type){
      
       case "change-city":
         newState.cityName = action.payload
         return newState

       default:
          return prevState
    }
 }

 export default  CityReducer