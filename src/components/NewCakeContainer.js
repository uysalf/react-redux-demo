import React, { useState } from "react";
import { connect } from "react-redux";
// import { buyCake } from "../redux/cake/cakeActions";
import { buyCake } from "../redux";
const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(2);
  return (
    <div>
      <h2>******************New Cake Conatiner******************</h2>
      <h2>Number of Cake {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
