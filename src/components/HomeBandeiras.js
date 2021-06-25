import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useScroll from '../hooks/useScroll';
import Container from './Container';
import HomeBandeirasCard from './HomeBandeirasCard';

const BandeirasSection = styled.section`
  background: var(--grey-3);

  h1 {
    color: var(--grey);
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2.75rem;
    opacity: 0;
    transform: translateY(2.5rem);
    transition: opacity 0.7s, transform 1s;
  }

  &.active {
    h1 {
      opacity: 1;
      transform: none;
    }
  }
`;

const BandeiraContainer = styled(Container)`
  border-bottom: 0.0625rem solid var(--grey-5);
  padding-bottom: 7.5rem;
`;

const BandeirasWrapper = styled.div`
  display: grid;
  gap: 2.25rem;

  @media (min-width: 36em) {
    column-gap: 1.5rem;
  }

  @media (min-width: 48em) {
    column-gap: 2.5rem;
  }

  @media (min-width: 62em) {
    column-gap: 2.75rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 75em) {
    column-gap: 2.125rem;
    grid-template-columns: repeat(4, 1fr);
  }

  article {
    opacity: 0;
    transform: translateY(2.5rem);
    transition-delay: 0.3s;
    transition: opacity 0.7s, transform 1s;
  }

  &.active {
    article {
      opacity: 1;
      transform: none;
    }
  }
`;

const bandeiraData = [
  '<strong>Expansão de um modelo simples</strong> e acessível de crédito',
  '<strong>Valorização das micro e pequenas empreendedoras</strong> como protagonistas e importante força de trabalho',
  '<strong>Destaque para a atuação</strong> responsável das mulheres no processo de empreender',
  '<strong>Inclusão socioeconômica sustentável</strong>, por meio de um programa amplo e democrático',
  '<strong>Alternativa</strong> à informalidade',
  '<strong>Transformação e inovação</strong> de micro e pequenos negócios',
  '<strong>Geração de renda</strong> e emprego',
  '<strong>Criação de oportunidades</strong> para o desenvolvimento de negócios geridos por mulheres',
];

const HomeBandeiras = () => {
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
    <BandeirasSection
      id="bandeiras"
      ref={wrapper}
      className={active && 'active'}
    >
      <BandeiraContainer>
        <h1>Nossas bandeiras</h1>
        <BandeirasWrapper className={active && 'active'}>
          {bandeiraData.map((data, index) => (
            <HomeBandeirasCard key={index} content={data} />
          ))}
        </BandeirasWrapper>
      </BandeiraContainer>
    </BandeirasSection>
  );
};

export default HomeBandeiras;
