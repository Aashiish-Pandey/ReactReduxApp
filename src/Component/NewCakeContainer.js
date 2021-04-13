import React,{useState} from "react";
import { buyCake } from "../redux/index";
import {connect} from 'react-redux'

function NewCakeConatiner(props) {

  const [number,setNumber] = useState(1)
  return (
    <div>
      <h2>number of cakes:::{props.numOfCakes}</h2>
      <input type ="text" value = {number} onChange = {e=>setNumber(e.target.value)}></input>
      <button onClick ={()=>props.buyCake(number)}>Buy {number}cake</button>
    </div>
  );
}

// step 1
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

// step 2

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (NewCakeConatiner);
