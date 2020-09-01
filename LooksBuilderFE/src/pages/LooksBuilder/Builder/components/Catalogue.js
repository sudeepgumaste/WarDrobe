import React from "react";
import { connect } from "react-redux";
import RemoveSymb from "../../../../assets/remove_circle-24px.svg";

import {
  togglePopUpState,
  setSelectedItem,
  setSelectedCategory,
  removeItem
} from "../../../../actions/looksBuilderActions";

import {ReactComponent as ShirtIcon} from "../../../../assets/catalogueIcons/t-shirt.svg";
import {ReactComponent as ShoeIcon} from "../../../../assets/catalogueIcons/shoe.svg";
import {ReactComponent as PantsIcon} from "../../../../assets/catalogueIcons/trousers.svg";
import {ReactComponent as WatchIcon} from "../../../../assets/catalogueIcons/watch.svg";

import Button from "../../../../utils/Button";

const Catalogue = props => {
  return (
    <div className="builder__catalogue">
      <div className="builder__catalogue__category-selector">
        <button
          className={`btn--wear ${props.selectedWear === "topWear" &&
            "btn--selected"}`}
          onClick={() => props.dispatch(setSelectedCategory("topWear"))}
        >
          <ShirtIcon />
        </button>
        <button
          className={`btn--wear ${
            props.selectedWear === "bottomWear" ? "btn--selected" : ""
          }`}
          onClick={() => props.dispatch(setSelectedCategory("bottomWear"))}
        >
          <PantsIcon />
        </button>
        <button
          className={`btn--wear ${
            props.selectedWear === "footWear" ? "btn--selected" : ""
          }`}
          onClick={() => props.dispatch(setSelectedCategory("footWear"))}
        >
          <ShoeIcon/>
        </button>
        <button
          className={`btn--wear ${
            props.selectedWear === "leftWristWear" ? "btn--selected" : ""
          }`}
          onClick={() => props.dispatch(setSelectedCategory("leftWristWear"))}
        >
          <WatchIcon />
        </button>
      </div>
      <div className="builder__catalogue__container">
        <Button
          className="btn--block btn--primary"
          onClick={() => props.dispatch(togglePopUpState())}
        >
          Add
        </Button>
        <div className="builder__catalogue__images-wrapper">
          <Button className="btn-add-image" onClick={() => props.dispatch(togglePopUpState())}>Add</Button>
          {props.urls[props.selectedWear].map((url, index) => (
            <>
              <div
                key={index}
                className={`builder__catelogue__image ${
                  url === props.selected[props.selectedWear] ? "selected" : ""
                }`}
              >
                <img
                  className="catelogue__image"
                  onClick={() => props.dispatch(setSelectedItem(url))}
                  src={url}
                  alt={`url ${url}`}
                />
                <img
                  onClick={() => props.dispatch(removeItem(index))}
                  className="remove-sym"
                  src={RemoveSymb}
                  alt="X"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  popUpState: state.looksBuilderReducer.popUpState,
  selectedWear: state.looksBuilderReducer.selectedWear,
  urls: state.looksBuilderReducer.urls,
  selected: state.looksBuilderReducer.selected
});
export default connect(mapStateToProps)(Catalogue);
