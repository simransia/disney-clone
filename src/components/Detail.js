import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { IoShareSocial } from 'react-icons/io5'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AiOutlinePlus } from 'react-icons/ai';
import * as Movie from "../features/movies/movieSlice";
import { Background, Container, Wrap } from "../Style1"
import { Carousel, Wrap as Cell } from "../MyStyle";
import db from '../firebase';

function Detail(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [select, setSelect] = useState(() => () => { });

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

  }, [id]);

  useEffect(() => {

    switch (detailData.type) {
      case "recommend":
        setSelect((previous) => Movie.selectRecommend);
        break;

      case "new":
        setSelect((previous) => Movie.selectNewDisney);
        break;

      case "women":
        setSelect((previous) => Movie.selectWomen);
        break;

      case "hit":
        setSelect((previous) => Movie.selectHitMovies);
        break;

      case "disney":
        setSelect((previous) => Movie.selectDisneyJuniorSeries);
        break;

      case "animal":
        setSelect((previous) => Movie.selectanimalsAndNature);
        break;

      case "mickey":
        setSelect((previous) => Movie.selectMickeyAndFriends);
        break;

      case "junior":
        setSelect((previous) => Movie.selectDisneyJuniorSeries);
        break;
    }
    return () => {

    }

  }, [detailData.type])

  const movies = useSelector(select);
  console.log(select);

  let settings = {
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <Background>
      <Container>
        <Wrap>
          <a>
            <span>
              <p className='subscribe'>SUBSCRIBER</p>
              <h2>{detailData.title}</h2>
              <p className='sub-head'>{detailData.subTitle}</p>
              <p>{detailData.description}</p>
            </span>
            <div className='icons'>
              <div className='inner'>
                <div className='watch'>
                  <FaPlay className='watch-item' />
                  <p className='watch-item'>{detailData.watch}</p>
                </div>
                <div className='grid-container'>
                  <BsPlusLg className='grid-item' />
                  <IoShareSocial className='grid-item' />
                  <p className='grid-item'>WATCHLIST</p>
                  <p className='grid-item'>SHARE</p>
                </div>
              </div>
            </div>
            <img src={detailData.backgroundImg} />
          </a>
        </Wrap>
      </Container>
      <br />
      <br />
      <h3>More Like This</h3>
      <Carousel {...settings}>

        {
          movies && movies.map((movie, key) => (
          movie.id!=id ? 
            <Link to={'/detail/' + movie.id} key={key}>
              <Cell >
                <span>
                  <h2>{movie.title}</h2>
                  <h3>{movie.subTitle}</h3>
                  <p className="grey"><b>{movie.description.slice(0, 55)}</b>...</p>
                  <p className="grey"> <AiOutlinePlus /> ADD TO WATCHLIST</p>
                </span>
                <img src={movie.cardImg} />

              </Cell>
            </Link> : ""
          
          )
          )
        }
      </Carousel >

    </Background>

  )
}


export default Detail;