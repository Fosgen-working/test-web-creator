import React from 'react';
import './Gallery.scss';
import Slider from 'react-slick';

const Gallery = (props) => {

  let images = props.galleryData.metadata.images.map(imgGallery => <div className='slide'><img src={'/img/' + imgGallery} alt='осень' /></div >);

  let view = props.galleryData.metadata.slidesPerView;

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: view,
    slidesToScroll: view,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: view - 1,
          slidesToScroll: view - 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: view - 2,
          slidesToScroll: view - 2
        }
      }
    ]
  };
  return (
    <div className='Gallery'>
      <h2>{props.galleryData.metadata.title}</h2>
      <Slider {...settings}>
        {images}
      </Slider>
    </div>
  );
}

export default Gallery;
