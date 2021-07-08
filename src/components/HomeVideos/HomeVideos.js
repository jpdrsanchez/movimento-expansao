import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useScroll from '../../hooks/useScroll';
import Container from '../Container';
import VideoSlide from './VideoSlide';

const VideosSection = styled.section`
  background: url('/images/wave-3.png') no-repeat center top;
  background-size: cover;
  padding-top: 8.75rem;
  padding-bottom: 15rem;

  @media (min-width: 90em) {
    padding-bottom: 40rem;
  }

  & > div {
    & > div {
      opacity: 0;
      transform: translateY(2.5rem);
      transition: opacity 0.7s, transform 1s;
      transition-delay: 0.5s;

      &.active {
        opacity: 1;
        transform: none;
      }
    }
  }

  h1 {
    color: var(--grey);
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2.75rem;
    opacity: 0;
    transform: translateY(-2.5rem);
    transition: opacity 0.7s, transform 1s;

    &.active {
      opacity: 1;
      transform: none;
    }
  }
`;

const HomeVideos = () => {
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

  return (
    <VideosSection id="videos" ref={wrapper}>
      <Container>
        <h1 className={active && 'active'}>
          Mulheres Empreendedoras que tiveram a oportunidade do acesso ao
          crédito por iniciativas que inspiram o Movimento Expansão
        </h1>
        <div className={active && 'active'}>
          <VideoSlide />
        </div>
      </Container>
    </VideosSection>
  );
};

export default HomeVideos;
