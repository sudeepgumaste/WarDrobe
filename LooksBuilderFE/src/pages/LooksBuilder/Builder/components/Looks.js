import React from "react";
import { connect } from "react-redux";

const Looks = ({ selected }) => {
  return (
    <div className="builder__looks">
      <div className="builder__looks__container">
        <img
          src={selected.topWear}
          alt="top-wear"
          className="top-wear image-props"
        />
        <img
          src={selected.bottomWear}
          alt="bottom-wear"
          className="bottom-wear image-props"
        />
        <img
          src={selected.footWear}
          alt="foot-wear"
          className="foot-wear image-props"
        />
        <img
          src={selected.leftWristWear}
          alt="leftWristWear"
          className="left-wrist-wear image-props"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selected: state.looksBuilderReducer.selected
});

export default connect(mapStateToProps)(Looks);
