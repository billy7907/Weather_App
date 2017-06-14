import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

  switch(action.type){
  case FETCH_WEATHER:
    /* In Redux, we never want to manipulate the state, which we would've done if we use
       state.push(action.payload.data). Instead, we want to create a new array and
       return that instead by using concat. 
    */

    // return state.concat([action.payload.data]);
    // 👇 is the same as 👆
    return [action.payload.data, ...state];
  }

  return state;
}
