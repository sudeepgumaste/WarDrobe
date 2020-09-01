import React from "react";
import {connect} from "react-redux";

import Builder from "./Builder";
import ImageSelectPopUP from "./ImageSelectPopUp"

const LooksBuilder = (props) => {
    console.log(props.popUpState);
    return (
        <React.Fragment>
            { props.popUpState && <ImageSelectPopUP/> }
            <div className="container">
                {/* <ImageSelectPopUp/> */}
                <Builder />
            </div>
        </React.Fragment>    
    )
};



const mapStateToProps = (state) => ({
    popUpState: state.looksBuilderReducer.popUpState
})
export default connect(mapStateToProps)(LooksBuilder);
