import styled from 'styled-components';
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
`;

const HomeVideos = () => {
  return (
    <VideosSection id="videos">
      <Container>
        <VideoSlide />
      </Container>
    </VideosSection>
  );
};

export default HomeVideos;
