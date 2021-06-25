import styled from 'styled-components';
import Image from 'next/image';

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

const VideoSlideItem = ({ image }) => {
  return (
    <Item>
      <ItemThumb>
        <Image
          src={image}
          alt="Slide"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        <Image
          src="/images/play.svg"
          alt="play"
          width={48}
          height={48}
          quality={100}
        />
      </ItemThumb>
      <ItemContent>
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </ItemContent>
    </Item>
  );
};

export default VideoSlideItem;
