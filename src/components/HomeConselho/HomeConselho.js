import styled from 'styled-components';
import Container from '../Container';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import HomeConselhoItem from './HomeConselhoItem';

const Section = styled.section`
  padding-bottom: 25.1875rem;
  background: url('/images/wave-2.svg') no-repeat center top 6.25rem;

  @media (min-width: 48em) {
    background-position: center top 7.5rem;
  }

  @media (min-width: 105em) {
    background-size: cover;
  }

  h1 {
    color: var(--grey);
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .slick-center {
    & > div {
      & > div {
        transform: scale(1.2);

        & > div {
          &:first-child {
            border: 0.25rem solid var(--orange);
          }

          &:last-child {
            opacity: 1;
          }
        }
      }
    }
  }

  .slick-arrow {
    position: absolute;
    top: 30%;
    text-indent: -999999999px;

    &.slick-prev {
      left: -1.25rem;
      background: url('/images/prev.png') no-repeat center center;
      width: 0.875rem;
      height: 1.5rem;
      border: none;
      cursor: pointer;
    }

    &.slick-next {
      right: -1.25rem;
      background: url('/images/next.png') no-repeat center center;
      width: 0.875rem;
      height: 1.5rem;
      border: none;
      cursor: pointer;
    }
  }
`;

const conselhoData = [
  {
    id: '1',
    image: '/images/conselho/jeronimo.png',
    title: 'Mariane Carneiro da Cunha',
    text: 'Idealizadora do Movimento Expansão, fundou e atua como CEO da AH!SIM, 1 ª Construtech especializada em reformas com tecnologia do Brasil.',
  },
  {
    id: '2',
    image: '/images/conselho/karina.png',
    title: 'Mariane Carneiro da Cunha',
    text: 'Idealizadora do Movimento Expansão, fundou e atua como CEO da AH!SIM, 1 ª Construtech especializada em reformas com tecnologia do Brasil.',
  },
  {
    id: '3',
    image: '/images/conselho/mariane.png',
    title: 'Mariane Carneiro da Cunha',
    text: 'Idealizadora do Movimento Expansão, fundou e atua como CEO da AH!SIM, 1 ª Construtech especializada em reformas com tecnologia do Brasil.',
  },
  {
    id: '4',
    image: '/images/conselho/sonia.png',
    title: 'Mariane Carneiro da Cunha',
    text: 'Idealizadora do Movimento Expansão, fundou e atua como CEO da AH!SIM, 1 ª Construtech especializada em reformas com tecnologia do Brasil.',
  },
  {
    id: '5',
    image: '/images/conselho/ana-drummond.png',
    title: 'Mariane Carneiro da Cunha',
    text: 'Idealizadora do Movimento Expansão, fundou e atua como CEO da AH!SIM, 1 ª Construtech especializada em reformas com tecnologia do Brasil.',
  },
];

const HomeConselho = () => {
  const settings = {
    focusOnSelect: true,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <Container>
        <h1>Membros do Conselho Consultivo</h1>
      </Container>
      <Container>
        <Slider {...settings}>
          {conselhoData.map((item) => (
            <HomeConselhoItem
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
          {conselhoData.map((item) => (
            <HomeConselhoItem
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default HomeConselho;
