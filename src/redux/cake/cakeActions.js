import {BUY_CAKE} from './cakeTypes'

// it's an action creator that returns action
export const buyCake = (number=1)=> {

    return {
        type:BUY_CAKE,
        payload:number // it sends additional info to reducer
    }


}

