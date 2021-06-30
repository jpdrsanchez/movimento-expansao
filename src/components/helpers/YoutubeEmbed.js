import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const YoutubeEmbed = ({ id, title }) => {
  return (
    <VideoWrapper>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </VideoWrapper>
  );
};

export default YoutubeEmbed;
