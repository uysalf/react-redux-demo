import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>******************IceCreamContainer******************</h2>
      <h2>Number of IceCream {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
