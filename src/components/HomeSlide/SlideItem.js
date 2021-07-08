import Image from 'next/image';
import styled from 'styled-components';
import Container from '../Container';

const Item = styled.div`
  height: 38.375rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
`;

const ItemContent = styled(Container)`
  h1 {
    color: var(--white);
    font-family: var(--second-font);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;

    @media (min-width: 36em) {
      font-size: 3.75rem;
      line-height: 4.25rem;
    }
  }
`;

const SlideItem = ({ title, image }) => {
  return (
    <Item>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />
      <ItemBg />
      <ItemContent>
        <h1>{title}</h1>
      </ItemContent>
    </Item>
  );
};

export default SlideItem;
