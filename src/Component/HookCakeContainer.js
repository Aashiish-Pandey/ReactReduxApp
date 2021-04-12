import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

    const numOfCakes = useSelector(state=>state.cake.numOfCakes)

    const dispatch = useDispatch()

    return(

        <div>
            <h2>num of cakes:::{numOfCakes}</h2>
            <button onClick = {()=>dispatch(buyCake())}>buy cake</button>
        </div>
    )
}

export default HooksCakeContainer;