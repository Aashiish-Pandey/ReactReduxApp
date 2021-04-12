import React from "react";
import { buyCake } from "../redux/index";
import {connect} from 'react-redux'

function cakeConatiner(props) {
  return (
    <div>
      <h2>number of cakes:::{props.numOfCakes}</h2>
      <button onClick ={props.buyCake}>Buy cake</button>
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
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (cakeConatiner);
