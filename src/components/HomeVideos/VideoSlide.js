import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import VideoSlideItem from './VideoSlideItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  .slick-list {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important;
  }

  .slick-slide {
    @media (min-width: 48em) {
      padding-right: 0.9375rem;
      padding-left: 0.9375rem;
    }

    @media (min-width: 62em) {
      padding-right: 1.6875rem;
      padding-left: 1.6875rem;
    }
  }

  .slick-center {
    @media (min-width: 48em) {
      padding-right: 0.9375rem;
      padding-left: 0.9375rem;
    }

    @media (min-width: 62em) {
      padding-right: 1.6875rem;
      padding-left: 1.6875rem;
    }

    & > div {
      & > div {
        @media (min-width: 48em) {
          transform: scale(1.2);
        }

        h2 {
          font-weight: 700;
        }
      }
    }
  }
`;

const itemData = [
  { id: '1', image: '/images/slide-bg.png' },
  { id: '2', image: '/images/card-2.jpg' },
  { id: '3', image: '/images/card-1.jpg' },
  { id: '4', image: '/images/card-3.jpg' },
];

const VideoSlide = () => {
  const settings = {
    focusOnSelect: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {itemData.map((item) => (
          <VideoSlideItem key={item.id} image={item.image} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default VideoSlide;
