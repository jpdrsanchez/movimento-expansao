import styled from 'styled-components';
import Container from '../Container';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import HomeConselhoItem from './HomeConselhoItem';
import useScroll from '../../hooks/useScroll';
import { useEffect, useRef, useState } from 'react';

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
    opacity: 0;
    transform: translateY(-2.5rem);
    transition: opacity 0.7s, transform 1s;

    &.active {
      opacity: 1;
      transform: none;
    }
  }

  .containerSlide {
    opacity: 0;
    transform: translateY(2.5rem);
    transition: opacity 0.7s, transform 1s;
    transition-delay: 0.5s;
  }

  .slideActive {
    opacity: 1;
    transform: none;
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
    image: '/images/conselho/mariane.png',
    title: 'Mariane Carneiro da Cunha',
    text: 'Idealizadora do Movimento Expans??o, fundou e atua como CEO da AH!SIM, 1 ?? Construtech especializada em reformas com tecnologia do Brasil.',
  },
  {
    id: '2',
    image: '/images/conselho/jeronimo.jpg',
    title: 'Jer??nimo Rafael Ramos',
    text: 'Especialista em microcr??dito, implementou, como Superintendente, a ??rea de microcr??dito no Banco Santander.',
  },
  {
    id: '3',
    image: '/images/conselho/sonia.jpg',
    title: 'S??nia Hess',
    text: 'Vice-presidente do Grupo Mulheres do Brasil, embaixadora da Endeavor e idealizadora do Fundo Dona de Mim.',
  },
  {
    id: '4',
    image: '/images/conselho/denise.jpg',
    title: 'Denise Damiani',
    text: 'Conselheira de Administra????o e idealizadora do Fundo Saphira.',
  },
  {
    id: '5',
    image: '/images/conselho/alessandra.jpg',
    title: 'Alessandra Fran??a',
    text: 'Fundadora do Banco P??rola. Graduada em Marketing, MBA em Gest??o de Pessoas e MBA em Finan??as com ??nfase em Banking pela Funda????o Get??lio Vargas.',
  },
  {
    id: '6',
    image: '/images/conselho/ana.jpg',
    title: 'Ana Maria Drummond',
    text: 'Co-fundadora do Somos Todas Marias. Fez um programa de imers??o nas empresas fundadas pelo professor Muhammad Yunus em Bangladesh.',
  },
  {
    id: '7',
    image: '/images/conselho/adriana.jpg',
    title: 'Adriana Barbosa',
    text: 'CEO da PretaHub, fundadora da Feira Preta e porta-voz dos afroempreendedores.',
  },
  {
    id: '8',
    image: '/images/conselho/anna.jpg',
    title: 'Anna de Souza Aranha',
    text: 'Diretora do Quintessa e aceleradora de neg??cios de impacto.',
  },
  {
    id: '9',
    image: '/images/conselho/karina.jpg',
    title: 'Karina Almeida',
    text: 'Coordenadora de advocacy da Endeavor.',
  },
];

const HomeConselho = () => {
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
    <Section ref={wrapper}>
      <Container>
        <h1 className={active && 'active'}>Membros do Conselho Consultivo</h1>
      </Container>
      <Container className={`containerSlide ${active ? 'slideActive' : ''}`}>
        <Slider {...settings}>
          {conselhoData.map((item) => (
            <HomeConselhoItem
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
              link="https://www1.folha.uol.com.br/colunas/monicabergamo/2021/06/mulheres-empresarias-lancam-movimento-para-impulsionar-credito-para-microempreendedoras.shtml"
            />
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default HomeConselho;
