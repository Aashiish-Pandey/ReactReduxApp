import React from "react";
import { buyIceCream } from "../redux/index";
import {connect} from 'react-redux'


function iceCreamConatiner(props) {
  return (
    <div>
      <h2>number of icecream:::{props.numOfIceCream}</h2>
      <button onClick ={props.buyIceCream}>Buy icecream</button>
    </div>
  );
}

// step 1
const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  }
}

// step 2

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (iceCreamConatiner);
