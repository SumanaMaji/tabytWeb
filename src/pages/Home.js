import React, {useState, useEffect, createRef, useRef} from 'react';

import { Link } from "react-router-dom";

import groupImg from '../../src/assets/images/Group45.jpg';
import currencyImg from '../../src/assets/images/currency.png';
import threePeople from '../../src/assets/images/icons8_three_people.png';
import groupImg4 from '../../src/assets/images/Group46.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import Slider from "react-slick";
import HttpClient from "../utils/HttpClient";
import moment from "moment";
import Card from 'react-bootstrap/Card';

function Home() {
  const event = React.useRef(null);
  const club = React.useRef(null);
 // const slider = React.useRef(null);
  const category = React.useRef(null);
  const newYear = React.useRef(null);
  const boat = React.useRef(null);
  const [eventCategoryResult, setEventCategoryResult] = useState([]);
  const [eventCategoryDataResult, setEventCategoryDataResult] = useState([]);
  const [categoryResult, setCategoryResult] = useState([]);
  const [eventResult, setEventResult] = useState([]);
  const [tomorrowEvent, setTomorrowEvent] = useState([]);
 
  var imgUrl = process.env.REACT_APP_IMGURL;

  useEffect(() => {
   fetchCategory();
   fetchEvent();
   fetchCatEvent();
   fetchTomorrowEvent();
  }, []);
  const eventSettings = {
    arrows: true,
    focusOnSelect: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const { totalSlider, currentSlide, className, style, onClick } = props;
    console.log("total"+totalSlider);
    if (currentSlide === totalSlider - 1 ) {
      return false;
  } else {
    return (
      <div
        className={className}
        style={{
          margin: 5,
          right: 0,
          top: 15,
          padding: 0,
          background: 'none',
          display: 'inline-block',
          height: 40,
          width: 40,
          textAlign: 'center',
          borderRadius: 50,
          fontSize: 25,
          border: '1px solid #3F5151',
          left: 'auto',
          color: 'black !important',
          transition: '.6s',
        backgroundColor:'grey',
        paddingTop: 10,
        }}
        onClick={onClick}
      />
    );
  }    
  }
  function SamplePrevArrow(props) {
    const { currentSlide, className, style, onClick } = props;
    if (currentSlide === 0) {
      return false;
  } else {
    return (
      <div
        className={className}
        style={{  margin: 5,
          position: 'relative',
          top: 15,
          padding: 0,
          background: 'none',
          display: 'inline-block',
          height: 40,
          width: 40,
          textAlign: 'center',
          borderRadius: 50,
          fontSize: 25,
          border: '1px solid #3F5151',
          left: 'auto',
          color: 'black !important',
          transition: '.6s',
        backgroundColor:'grey',
        paddingTop: 10, }}
        onClick={onClick}
      />
    );
  }
    
  }
  const clubSettings = (indexSlider) => {
    return {
    arrows: true,
    focusOnSelect: true,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 1,
    speed: 500,
    accessibility: false ,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    totalSlider : indexSlider,
    afterChange: function(indexSlider) {
      console.log(
        `Slider Changed to: ${indexSlider + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  };

  const categorySettings = {
    arrows: true,
    focusOnSelect: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const previous = (type) => {
    console.log(type)
     if(type === 'event')
     {
      event.current.slickPrev();
    }
    if(type === 'boat')
    {
      boat.current.slickPrev();
      }
      if(type === 'category')
      {
        category.current.slickPrev();
      }
      if(type === 'club')
      {
        club.current.slickPrev();
      }
      if(type === 'newYear')
      {
        newYear.current.slickPrev();
      }
  };
  const next = (type) => {
    console.log(type)
    if(type === 'event')
    {
     event.current.slickNext();
   }
     if(type === 'category')
     {
       category.current.slickNext();
     }
     if(type === 'club')
     {
       club.current.slickNext();
     }
     if(type != 'event' && type != 'category')
    {
      
      club.current.slickPrev();
    }
  };
  const fetchCatEvent = async (catName) => {
    let resultCatEventData = await HttpClient.requestData("catevents/"+encodeURIComponent(catName), "GET");

    if (resultCatEventData && resultCatEventData.success) {
     // console.log(JSON.stringify(resultCatEventData));
      setEventCategoryDataResult(resultCatEventData.data);
    }
    
   // console.log("fetchCatEvent->",eventCategoryDataResult)
   
  };
  const fetchCategory = async () => {
    //let resultCat = await HttpClient.requestData("category", "GET");
    let resultCat = await HttpClient.requestData("allcatevents", "GET");
    
    if (resultCat && resultCat.success) {
      console.log("resCategory-->"+JSON.stringify(resultCat));
      setCategoryResult(resultCat.data);

      let promise = new Promise((resolve, reject) => resolve())
      // Add each element to the chain.
      resultCat.data.length > 0 && resultCat.data.forEach(element => {
        promise = promise.then(async (async) => {
          try {
            const responseCatEventData = await HttpClient.requestData("catevents/" + encodeURIComponent(element.name), "GET");
            // do something with response

            if (responseCatEventData && responseCatEventData.success) {
             // console.log("catEventsData", JSON.stringify(responseCatEventData));
              setEventCategoryResult(responseCatEventData.data);
            }
          } catch (error) {
            this.showError(error);
          }
        })
      })
    }
    console.log("fetchCategory->",categoryResult)
   
  };
  const fetchEvent = async () => {
    let resultEvent = await HttpClient.requestData("event", "GET");

    if (resultEvent && resultEvent.success) {
      console.log("eventList-->",JSON.stringify(resultEvent));
      setEventResult(resultEvent.data);
    }   
    console.log("fetchEvent->",resultEvent)
  };
  const fetchTomorrowEvent = async () => {
    let resultTomorrowEvent = await HttpClient.requestData("events", "GET");

    if (resultTomorrowEvent && resultTomorrowEvent.success) {
      console.log(JSON.stringify(resultTomorrowEvent));
      setTomorrowEvent(resultTomorrowEvent.data);
    }   
    console.log("fetchEvent->",resultTomorrowEvent)
   
  };
  return (
    <div className="p-2">
      <div className='content container slider'>
        <div className=''>
          <div className="section-title">
            <h2>Popular Events</h2>
             <Link className="seeAll2" to="details" state={{data :eventResult, type:'event'}}>See All</Link>
            <button className='slidebtn' onClick={() => previous('event')}>       
              <FaChevronLeft />
            </button>
            <button className='slidebtn' onClick={() => next('event')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <Slider ref={event} {...eventSettings}>
          {eventResult.map((card, index) => (
            <div key={index} className='single-item-box'>
               <Link to={`/event-details/${card._id}`} state={card._id}>
               <img alt={card.name} src={imgUrl+'/'+card.image} className='slideImg' />
              </Link>
              <div className="address"><i class="fa-solid fa-location-dot"></i> {card.address}</div>
              <h3>{card.name}</h3>
              <ul className="date-time">
                <li><i class="far fa-calendar"></i> {moment(card.startDate).format("D MMM YYYY")}</li>
                <li><i class="far fa-clock"></i> {moment(card.startTime).format("LT")}</li>
              </ul>

            </div>
          ))}
        </Slider>
      </div>
      <div className="event_tomorrow">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left-title">
                <span>Last Call</span>
                <h2>Events Starting Tomorrow</h2>
                <Link className="btn seeall1" to="details" state={{data :tomorrowEvent, type:'event'}}>See All <i class="fa-solid fa-arrow-right-long" style={{ display: 'inline-block', verticalAlign: 'middle', }}></i></Link>
              </div>
            </div>
            {tomorrowEvent.map((card, index) => (
            index <= 2 ?(
            <div className="col-md-3">
              <div className="single-item-box" id={index}>
                <img src={imgUrl+'/'+card.image} alt={card.image} />
                <div className="address"><i class="fa-solid fa-location-dot"></i> {card.address}</div>
                <h3>{card.name}</h3>
                <ul className="date-time">
                <li><i class="far fa-calendar"></i> {moment(card.startDate).format("D MMM YYYY")}</li>
                <li><i class="far fa-clock"></i> {moment(card.startTime).format("LT")}</li>
                </ul>
              </div>
            </div>
              ):null
              ))}
          </div>
        </div>
      </div>
      <div className='content container slider'>
        <div className=''>
          <div className="section-title">
            <h2>Browse By Category</h2>
            <Link className="seeAll2" to="details" state={{data :categoryResult, type:'category'}}>See All</Link>
            <button className='slidebtn' onClick={() => previous('category')}>   
              <FaChevronLeft />
            </button>
            <button className='slidebtn' onClick={() => next('category')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <Slider slidesToScroll={2}
           ref={category} {...categorySettings}>
          {categoryResult.map((categry, index) => (
            <div className='me-2 single-item-box'>
            <Card key={index} className="text-white">
              <Card.Img src={imgUrl+'/'+categry.image} alt='Card Image' className='slideImg' />
              <Card.ImgOverlay>
              <Card.Title>{categry.name}</Card.Title>
                <Card.Text className="date-time">{moment(categry.createdOn).format("D MMM YYYY")}</Card.Text>
              </Card.ImgOverlay>
            </Card>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="double_area pt-80">
        <div className="container">
          <div className="row">
            <div className="col-md-6 position-relative doubleSection">
              <img src={groupImg} className="groupImg" alt='Group Img' />
              <div className="double_area_text">
                <div className="address"><i class="fas fa-map-marker-alt"></i> U.S. Bank Stadium, Minneapolis</div>
                <h3>Ed Sheeran, Taylor Swift, Coldplay</h3>
                <ul className="date-time">
                  <li><i class="far fa-calendar"></i> 11 Dec 2022</li>
                  <li><i class="far fa-clock"></i> 08:00</li>
                </ul>
                <div className="btnarea"><a href="#null" className="btn btn-outline-info me-3"><img src={currencyImg} alt='Currency Img' /> 3 Tickets Left</a> <a href="#null" className=""><img src={threePeople} alt='Three People' /> 65 Attending</a></div>
              </div>
            </div>
            <div className="col-md-6 position-relative doubleSection">
              <img src={groupImg4} className="groupImg" alt='Group Img' />
              <div className="double_area_text">
                <div className="address"><i class="fas fa-map-marker-alt"></i> U.S. Bank Stadium, Minneapolis</div>
                <h3>Metallica, Pentara</h3>
                <ul className="date-time">
                  <li><i class="far fa-calendar"></i> 11 Dec 2022</li>
                  <li><i class="far fa-clock"></i> 08:00</li>
                </ul>
                <div className="btnarea"><a href="#null" className="btn btn-outline-info me-3"><img src={currencyImg} alt='Currency Img' /> 3 Tickets Left</a> <a href="#null" className=""><img src={threePeople} alt='Three People' /> 65 Attending</a></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {categoryResult.map((category, index) => ( 
      <div key={index} className='content container slider' id={index}>
        <div className=''>
          <div className="section-title" key={index} id={index}>
            <h2> {category.name}</h2>
            <Link className="seeAll2" to="details" state={{data :category.events, type:'event'}}>See All</Link>
            {/* <button className='slidebtn' onClick={() => previous('club')}> 
              <FaChevronLeft />
            </button>
            <button className='slidebtn' onClick={() =>next('culb')}>
              <FaChevronRight />
            </button> */}
          </div>
        </div>
           <Slider ref={club} {...clubSettings(category.events.length)}>
           {category.events.length > 0 && category.events.map((card, key) => (  
           <div key={key} className='single-item-box'>
            <img alt={card.image} src={imgUrl+'/'+card.image} className='slideImg' />
              <div className="address"><i class="fa-solid fa-location-dot"></i> {card.address}</div>
              <h3>{card.name}</h3>
              <ul className="date-time">
              <li><i class="far fa-calendar"></i> {moment(card.startDate).format("D MMM YYYY")}</li>
                <li><i class="far fa-clock"></i> {moment(card.startTime).format("LT")}</li>
              </ul>
           </div>  
           ))} 
       </Slider>    
      </div>
   ))}
    </div>
  );
}

export default Home;
