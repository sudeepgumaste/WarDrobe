import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";

import Loader from "../../../utils/Loader";

import {
  togglePopUpState,
  addURLToCatalogue
} from "../../../actions/looksBuilderActions";
import Button from "../../../utils/Button";
import { apiURL } from "../../../config";

const ImageSelectPopUp = props => {
  const [data, setData] = useState({ urls: [], cost: "" });
  const [productURL, setProductUrl] = useState("");
  const [website, setWebsite] = useState("myntra");
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("The images of the product will appear here");

  const isRendered = useRef(true);

  useEffect(() => {
    isRendered.current = true;
    return () => (isRendered.current = false);
  });

  const onDarkOverlayClick = () => {
    props.dispatch(togglePopUpState());
  };

  const onImageClick = url => {
    props.dispatch(addURLToCatalogue(url));
  };

  const onSubmit = e => {
    e.preventDefault();
    setSubmitting(() => true);
    Axios.post(`${apiURL}/api/images/${website}`, { url: productURL })
      .then(res => {
        if (isRendered.current) {
          setData(() => res.data);
          setSubmitting(() => false);
        }
      })
      .catch(err => {
        if (isRendered.current) {
          console.log(err);
          setSubmitting(() => false);
          setMsg(() => "Encountered an error, please check the URL");
        }
      });
  };
  return (
    <>
      <div className="dark-overlay" onClick={onDarkOverlayClick}></div>
      <div className="image-select-popup">
        <form className="image-select-popup__form" onSubmit={onSubmit}>
          <select
            name="website"
            id="website-select"
            value={website}
            onChange={e => setWebsite(e.target.value)}
          >
            <option value="myntra">Myntra</option>
            <option value="flipkart">Flipkart</option>
            <option value="amazon">Amazon</option>
          </select>
          <input
            type="text"
            name="url"
            value={productURL}
            onChange={e => {
              setProductUrl(e.target.value);
            }}
            placeholder="Paste the link here"
          />
          <Button className="btn--primary" disabled={submitting}>Submit</Button>
        </form>
        <div className="image-select-popup__image-area-container">
          <div className="image-select-popup__image-area-container__image-area">
            {data.urls.length === 0 && <p>{msg}</p>}
            {submitting && <Loader />}
            {data.urls.map((url, index) => (
              <img
                onClick={()=>{onImageClick(url); props.dispatch(togglePopUpState())}}
                className="image-area--image"
                src={url}
                alt=""
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(ImageSelectPopUp);
