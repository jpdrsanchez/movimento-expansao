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

  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-indent: -999999999px;

    &.slick-prev {
      left: -1.25rem;
      background: url('/images/prev.png') no-repeat center center;
      width: 0.875rem;
      height: 1.5rem;
      border: none;
      cursor: pointer;
    }

    &.slick-next {
      right: -1.25rem;
      background: url('/images/next.png') no-repeat center center;
      width: 0.875rem;
      height: 1.5rem;
      border: none;
      cursor: pointer;
    }
  }
`;

const itemData = [
  {
    id: 'NtZTaaJJs-U',
    title: 'Davila Vanusa - Agricultora e Empreendedora apoiada pela Acreditar',
    isthumb: false,
  },
  {
    id: '_k_fFyDcmZ4',
    title: 'Erica Maria - Cabeleireira e Empreendedora apoiada pela Acreditar',
    isthumb: false,
  },
  {
    id: 'DKEvuOPcGR4',
    title:
      'Flaviana Maria - Comerciante e Empreendedora apoiada pela Acreditar',
    isthumb: false,
  },
  {
    id: 'NtZTaaJJs-U',
    title: 'Davila Vanusa - Agricultora e Empreendedora apoiada pela Acreditar',
    isthumb: false,
  },
  {
    id: '_k_fFyDcmZ4',
    title: 'Erica Maria - Cabeleireira e Empreendedora apoiada pela Acreditar',
    isthumb: false,
  },
  {
    id: 'DKEvuOPcGR4',
    title:
      'Flaviana Maria - Comerciante e Empreendedora apoiada pela Acreditar',
    isthumb: false,
  },
];

const VideoSlide = () => {
  const settings = {
    focusOnSelect: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
        {itemData.map((item, index) => (
          <VideoSlideItem
            key={index}
            id={item.id}
            title={item.title}
            isthumb={item.isthumb}
          />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default VideoSlide;
