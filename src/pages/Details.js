import React, {useState, useEffect, createRef} from 'react';
import moment from "moment";
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams, useLocation, Link } from "react-router-dom";
import Slider from "react-slick";
import HttpClient from "../utils/HttpClient";

const Details = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const propsData = location.state.data;
  const propsType = location.state.type;
  console.log("data-->", propsData);

  var imgUrl = process.env.REACT_APP_IMGURL;
  return (
    <div className="content container slider">
      <div className='container'>
      <div className="double_area pt-80">
        <div className="container p-2">
          <div className="row">
          {propsData.map((details, index) => (
            <div id={index} className="col-md-4 p-4 position-relative">
               <h3>{details.name}</h3>
               {propsType == 'event' ? (
               <Link to={`/event-details/${details._id}`} state={details._id}>
               {/* <Link to={{ pathname: '/event-details', state: { id: details._id} }}> */}
              <img alt={details.name} src={imgUrl+'/'+details.image} className='slideImg'/>
              </Link>
               ) : <img alt={details.name} src={imgUrl+'/'+details.image} className='slideImg'/>}
              {details.address ? (
              <div className="address"><i class="fa-solid fa-location-dot"></i> {details.address}</div>
              ): null}
              {details.startDate? (
              <ul className="date-time">
                <li><i class="far fa-calendar"></i> {moment(details.startDate).format("D MMM YYYY")}</li>
                <li><i class="far fa-clock"></i> {moment(details.startTime).format("LT")}</li>
              </ul>
              ):null}
            </div>
             ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Details;
