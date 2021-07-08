import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useScroll from '../../hooks/useScroll';
import Container from '../Container';
import BlogSlide from './BlogSlide';

const BlogSection = styled.section`
  padding-top: 7.375rem;
  padding-bottom: 7.375rem;

  h1 {
    color: var(--grey);
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.5rem;
    margin-bottom: 1.25rem;
    text-align: center;
    opacity: 0;
    transform: translateY(2.5rem);
    transition: opacity 0.7s, transform 1s;
  }

  & > div > p {
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: center;
    max-width: 42.5rem;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(2.5rem);
    transition: opacity 0.7s, transform 1s;
    transition-delay: 0.3s;
  }

  & > div > div {
    opacity: 0;
    transform: translateY(2.5rem);
    transition: opacity 0.7s, transform 1s;
    transition-delay: 0.6s;
  }

  &.active {
    h1 {
      opacity: 1;
      transform: none;
    }

    & > div > p {
      opacity: 1;
      transform: none;
    }

    & > div > div {
      opacity: 1;
      transform: none;
    }
  }
`;

const HomeBlog = () => {
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
    <BlogSection id="artigos" ref={wrapper} className={active && 'active'}>
      <Container>
        <h1>Movimento Expansão na mídia</h1>
        <BlogSlide />
      </Container>
    </BlogSection>
  );
};

export default HomeBlog;
