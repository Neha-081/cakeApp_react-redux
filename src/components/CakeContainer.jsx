import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            {/* using mapStateToProps */}
            <h2>Number of cakes : {props.numOfCakes}</h2>   
            {/* using mapDispatchToProps */}
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
