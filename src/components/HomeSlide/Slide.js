import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import SlideItem from './SlideItem';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import useScroll from '../../hooks/useScroll';

const Wrapper = styled.section`
  position: relative;
  opacity: 0;
  transition: all 0.3s;

  &.active {
    opacity: 1;

    h1 {
      opacity: 1;
      transform: none;
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 3.125rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex !important;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: 0.9375rem;
      }

      &.slick-active {
        button {
          &::after {
            content: '';
            display: block;
            background: var(--black);
            width: 0.875rem;
            height: 0.875rem;
            border-radius: 50%;
          }
        }
      }
    }

    button {
      padding: 0;
      text-indent: -99999999px;
      width: 1.375rem;
      height: 1.375rem;
      border: 0.0625rem solid var(--white);
      border-radius: 50%;
      background: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
  }

  h1 {
    opacity: 0;
    transform: translateY(1.25rem);
    transition: transform 0.7s, opacity 1s;
  }
`;

const Slide = () => {
  const wrapper = useRef(null);
  const { position } = useScroll();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (wrapper?.current) {
      const halfWindow = window.innerHeight * 0.6;

      if (window.pageYOffset > wrapper.current.offsetTop - halfWindow) {
        setActive(true);
      }
    }
  }, [position]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Wrapper ref={wrapper} className={active && 'active'}>
      <Slider {...settings}>
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </Slider>
    </Wrapper>
  );
};

export default Slide;
