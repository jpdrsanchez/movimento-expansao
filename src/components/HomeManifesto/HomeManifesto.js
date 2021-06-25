import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useScroll from '../../hooks/useScroll';
import Container from '../Container';
import HomeManisfestoCards from './HomeManisfestoCards';

const Section = styled.section`
  background: url('/images/wave-1.svg') no-repeat center bottom;
  background-size: cover;
  color: var(--white);
  padding-top: 8rem;
  padding-bottom: 14.5rem;

  &.active {
    h1 {
      opacity: 1;
      transform: none;
    }

    & > div > p {
      opacity: 1;
      transform: none;
    }
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateX(1.25rem);
    transition: transform 0.7s, opacity 1s;
  }

  & > div > p {
    max-width: 69rem;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    opacity: 0;
    transform: translateX(1.25rem);
    transition: transform 0.7s, opacity 1s;
    transition-delay: 0.3s;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  align-items: center;
  margin-top: 5rem;
  max-width: 60rem;
  margin: 5rem auto 0;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 48em) {
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 62em) {
    grid-template-columns: auto auto auto;
  }

  article {
    opacity: 0;
    transition: transform 0.7s, opacity 1s;
    transition-delay: 0.6s;
    transform: translateY(3.375rem);

    &:nth-child(1) {
      transition-delay: 0.6s;
    }

    &:nth-child(2) {
      transition-delay: 0.8s;
    }

    &:nth-child(3) {
      transition-delay: 1s;
    }
  }

  &.active {
    article {
      opacity: 1;
      transform: none;
    }
  }
`;

const cardContent = [
  {
    id: '1',
    image: '/images/card-1.jpg',
    content:
      'As mulheres representam quase a metade da força econômica das MEIs (micro empresas individuais).Seus índices de inadimplência são inferiores aos dos homens e, ainda assim, há grande resistência na disponibilização de linhas de crédito que possam estimular a criação, manutenção e crescimento de seus negócios. Uma enorme desvantagem na largada. A ausência do ponto de partida.',
    intro:
      'As mulheres representam quase a metade da força econômica das MEIs (micro empresas individuais).',
  },
  {
    id: '2',
    image: '/images/card-2.jpg',
    content:
      'Empreendedorismo Feminino é evolução social, geração de renda, de empregos, progresso.O Movimento Expansão prevê também estímulo a todo o ecossistema empreendedor com capacitação técnica, educação financeira e inclusão sustentável das mulheres no fortalecimento da economia do País.',
    intro:
      'Empreendedorismo Feminino é evolução social, geração de renda, de empregos, progresso.',
  },
  {
    id: '3',
    image: '/images/card-3.jpg',
    content:
      'Pelo incentivo às parcerias entre entidades públicas e privadas, pelo envolvimento e sensibilização da sociedade como um todo, acreditamos que este é o momento para transformar dificuldades em oportunidades. Transformar o cenário empreendedor brasileiro, permitindo que sonhos se tornem realidade.',
    intro:
      'Transformar o cenário empreendedor brasileiro, permitindo que sonhos se tornem realidade.',
  },
];

const HomeManifesto = () => {
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
    <Section id="manifesto" ref={wrapper} className={active && 'active'}>
      <Container>
        <h1>Manifesto</h1>
        <p>
          O Movimento Expansão nasce como uma ação panorâmica, que tem como
          objetivo principal viabilizar linhas de crédito dedicadas ao
          empreendedorismo feminino. Não propõe nenhuma mudança na legislação,
          mas uma efetiva e coordenada iniciativa para a destinação de recursos
          existentes e já previstos para este fim pelo Banco Central, que pode -
          e deve - ser praticada por todas as instituições financeiras
          habilitadas.
        </p>
        <CardWrapper className={active && 'active'}>
          {cardContent.map((card) => (
            <HomeManisfestoCards
              key={card.id}
              image={card.image}
              intro={card.intro}
              content={card.content}
            />
          ))}
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default HomeManifesto;
