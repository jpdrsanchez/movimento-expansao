import styled from 'styled-components';
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
  }

  & > div > p {
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: center;
    max-width: 42.5rem;
    margin: 0 auto;
  }
`;

const HomeBlog = () => {
  return (
    <BlogSection id="artigos">
      <Container>
        <h1>Movimento Expansão na mídia</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          finibus vestibulum leo, pulvinar rutrum mauris. Morbi a velit eget ex
          blandit interdum.
        </p>
        <BlogSlide />
      </Container>
    </BlogSection>
  );
};

export default HomeBlog;