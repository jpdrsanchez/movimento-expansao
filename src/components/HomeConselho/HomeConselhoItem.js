import styled from 'styled-components';
import Image from 'next/image';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3.125rem;
  padding-bottom: 12rem;
  transition: all 0.5s;
  position: relative;
  z-index: 600;

  & > div {
    &:first-child {
      border-radius: 50%;
      box-shadow: 0 0.1875rem 1.25rem rgba(0, 0, 0, 0.45);
      width: 150px;
      height: 150px;
      background: var(--grey-6);
      overflow: hidden;
    }

    &:last-of-type {
      position: absolute;
      bottom: 2.5rem;
      width: 17.5rem;
      background: var(--grey-7);
      opacity: 0;
      padding: 1.625rem 1rem 0.8125rem;
      border-radius: 1.25rem;
      z-index: -1;
      transition: all 0.5s;

      h2 {
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: center;
      }

      p {
        font-size: 0.75rem;
        line-height: 1.25rem;
        text-align: center;
      }
    }
  }
`;

const NoImage = styled.div`
  width: 100%;
  height: 100%;
`;

const HomeConselhoItem = ({ image, title, text }) => {
  return (
    <Item>
      <div>
        {image.length ? (
          <Image
            src={image}
            width={150}
            height={150}
            alt={title}
            quality={100}
          />
        ) : (
          <NoImage />
        )}
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Item>
  );
};

export default HomeConselhoItem;
