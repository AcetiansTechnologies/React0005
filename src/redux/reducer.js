import { useDispatch } from "react-redux";

const initState={
    courses:[]
}; 

export const storeReducer=
   (state = initState,action) =>{
    switch(action.type){
        case 'ADD_COURSE':
            return {...state, courses:action.payload}
        default:
            return state
    }
   }



 