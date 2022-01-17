import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function HooksCakeContainer() {
 const numOfCakes = useSelector(state=>state.cake.numOfCakes)
 const dispatch=useDispatch()   
 return (
        <div>
            <h2>Num of cakes : {numOfCakes}</h2>
            <button onClick={()=>dispatch()}>buy cakes</button>
        </div>
    )
}

export default HooksCakeContainer
