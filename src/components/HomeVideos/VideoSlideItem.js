import styled from 'styled-components';
import Image from 'next/image';
import YoutubeEmbed from '../helpers/YoutubeEmbed';
import useModal from '../../hooks/useModal';

const Item = styled.div`
  position: relative;
  transition: all 0.3s;
`;

const ItemThumb = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 36em) {
    height: 28rem;
  }

  @media (min-width: 48em) {
    height: 15rem;
  }

  @media (min-width: 62em) {
    height: 24.875rem;
    border-radius: 2.8125rem;
  }

  & > div {
    &:first-child {
      padding-bottom: 0;
      height: 100%;
    }
  }
`;

const ItemContent = styled.div`
  text-align: center;

  h2 {
    color: var(--grey);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.625rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--grey-2);
    line-height: 1.5rem;
  }
`;

const VideoPlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoSlideItem = ({ id, title }) => {
  const { setOpen, setContent } = useModal();

  return (
    <Item>
      <ItemThumb
        onClick={() => {
          setContent({
            id,
            title,
          });
          setOpen(true);
        }}
      >
        <Image
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <VideoPlay>
          <Image src="/images/play.svg" alt="Play" width={48} height={48} />
        </VideoPlay>
      </ItemThumb>
      <ItemContent>
        <h2>{title}</h2>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </ItemContent>
    </Item>
  );
};

export default VideoSlideItem;
