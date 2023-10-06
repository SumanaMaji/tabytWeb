import React, { useState, useEffect, createRef } from 'react';
import { useParams, useLocation } from "react-router-dom";
import HttpClient from "../utils/HttpClient";
import moment from "moment";
import Android from '../assets/images/andrid.png';
import Ios from '../assets/images/ios.png';

const EventDetails = () => {
  const { id } = useParams();
  console.log("detailsEvent-->", id);

  const [eventResult, setEventResult] = useState([]);

  useEffect(() => {
    fetchEvent(id);
  }, [id]);
  const fetchEvent = async (id) => {
    let resultEvent = await HttpClient.requestData("eventdetails/" + id, "GET");

    if (resultEvent && resultEvent.success) {
      console.log("eventList-->", JSON.stringify(resultEvent));
      setEventResult(resultEvent.data);
    }
    console.log("fetchEvent->", resultEvent)
  };
  var imgUrl = process.env.REACT_APP_IMGURL;
  return (
    <div className="content container eventDetailsFull">
        <div className="double_area pt-80">
          <div className="row container p-2 eventDetailsTop">
            <div className='col-md-8'>
                  {eventResult.map((details, index) => (
                    <div id={index} className="details">
                      <h3 className='detailsDrescription'> DESCRIPTION</h3>
                      <p style={{ paddingBottom: 15, }}> {details.description}</p>
                      <h3 className='detailsEventHead'> Event Info</h3>
                      <div className='detailsEventMusic'>
                        <div className='detailsMusicType'>Music Type</div>
                        {details.musicType.length > 0 ? (
                          <div style={{ width: '70%', padding: 10, }}>{details.musicType.map((type) =>
                            <li>{type.name}</li>
                          )}</div>
                        ) :
                          <div style={{ width: '70%', padding: 10, }}>{details.musicType.name}</div>
                        }
                      </div>
                      <div className='detailsRowSection'>
                        <div className='detailsMusicType'>Dress Code</div>
                        <div style={{ width: '70%', padding: 10, }}>
                          <p> {details.mensDessCode ? 'Mens - ' + (details.mensDessCode) : null} </p>
                          <p>{details.ladiesDessCode ? 'Ladies - ' + (details.ladiesDessCode) : null} </p>
                          <p>{details.cantwear ? 'Not Wear  - ' + (details.cantwear) : null}</p>
                        </div>
                      </div>
                      <div className='detailsRowSection'>
                        <div className='detailsMusicType'>Age</div>
                        <div style={{ width: '70%', padding: 10, }}>21+</div>
                      </div>
                      <div className='detailsRowSection'>
                        <div className='detailsMusicType'>Crowd</div>
                        <div style={{ width: '70%', padding: 10, }}> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</div>
                      </div>
                      <div className='detailsRowSection'>
                        <div  className='detailsMusicType'>Door</div>
                        <div style={{ width: '70%', padding: 10, }}>The event will open doors on<b> {moment(details.startDate).format("D MMM YYYY")}. </b> Grab your tickets before it's too late.</div>
                      </div>
                    </div>
                  ))}
            </div>
            <div className='col-md-4' style={{padding:0, margin:0}}>
              <img class="card-img" src= {imgUrl+'/'+'uploads/image2.png'} style={{zIndex:1, position:'relative', padding:0}} alt="Card Image" />
              <div className='detailsEvent' style={{marginTop:-600, paddingTop:0, 
              textAlign:'center', justifyContent:'center', 
              zIndex: 2,
              position:'relative'}}>
              <a href='#android' className='d-inline-block'><img src= {imgUrl+'/'+'uploads/Download the Tabyt Appto Access Event.png'} alt='Android' style={{
                justifyContent:'center',
                paddingBottom:10
              }} /></a>
              <div style={{display:'flex', flexDirection:'column'}}>
              <a href='#android' className='d-inline-block'><img src= {imgUrl+'/'+'uploads/andrid.png'} alt='Android' style={{
                justifyContent:'center',
                paddingBottom:10, flex:1, width: '40%',
              }}/></a>
              <a href="https://apps.apple.com/in/app/tabyt/id1641352108" target={'_blank'} className='d-inline-block'><img src={imgUrl+'/'+'uploads/ios.png'} alt='Ios' style={{
                justifyContent:'center',
                paddingBottom:5, flex:1
              }}/></a>
              </div>
              </div>
            </div>
          </div>
          <div className="row container imagesccondEventDetails">
            <img class="card-img eventDetailsImageOne" src= {imgUrl+'/'+'uploads/image1.png'} alt="Card Image" />
            <div className='detailsEvent'>
              <a href='#android' className='d-inline-block eventDetailsDownloadText'><img src= {imgUrl+'/'+'uploads/Download the Tabyt Appto Access Event.png'} alt='Android'/></a>
              <div className='eventDetailsButtonTogether'>
              <a href='#android' className='d-inline-block eventDetailsAndroid'><img src= {imgUrl+'/'+'uploads/andrid.png'} alt='Android'/></a>
              <a href="https://apps.apple.com/in/app/tabyt/id1641352108" target={'_blank'} className='d-inline-block eventDetailsIOS'><img src={imgUrl+'/'+'uploads/ios.png'} alt='Ios'/></a>
              </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default EventDetails;
