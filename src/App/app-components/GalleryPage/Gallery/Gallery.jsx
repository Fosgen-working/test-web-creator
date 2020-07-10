import React from 'react';
import './Gallery.scss';
import Slider from 'react-slick';

const Gallery = (props) => {

  let images = props.galleryData.metadata.images.map(imgGallery => <div className='slide'><img src={'/img/' + imgGallery} alt='осень' /></div>);

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: props.galleryData.metadata.slidesPerView,
    slidesToScroll: props.galleryData.metadata.slidesPerView,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: props.galleryData.metadata.slidesPerView - 1,
          slidesToScroll: props.galleryData.metadata.slidesPerView - 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: props.galleryData.metadata.slidesPerView - 2,
          slidesToScroll: props.galleryData.metadata.slidesPerView - 2
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
