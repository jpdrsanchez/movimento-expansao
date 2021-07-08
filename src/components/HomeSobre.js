import styled from 'styled-components';
import Container from './Container';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useScroll from '../hooks/useScroll';

const SobreSection = styled.section`
  padding-top: 7.125rem;
`;

const SobreContainer = styled(Container)`
  display: grid;
  align-items: center;
  gap: 3.75rem;

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
    gap: 0.9375rem;
  }

  @media (min-width: 62em) {
    gap: 3.75rem;
  }
  padding-bottom: 7.5rem;
  margin-bottom: 6rem;
  border-bottom: 0.0625rem solid var(--grey-5);
`;

const SobreImage = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transform: translateX(-2.5rem);
  transition: opacity 0.7s, transform 1s;

  &.active {
    opacity: 1;
    transform: none;
  }
`;

const SobreContent = styled.div`
  opacity: 0;
  transform: translateX(2.5rem);
  transition: opacity 0.7s, transform 1s;

  &.active {
    opacity: 1;
    transform: none;
  }
  @media (max-width: 47.9375em) {
    text-align: center;
  }

  h1 {
    color: var(--grey);
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.1875rem;

    &::after {
      content: '';
      display: block;
      width: 2.125rem;
      height: 0.125rem;
      background: var(--orange);
      margin-top: 1.5rem;
      margin-bottom: 1.875rem;

      @media (max-width: 47.9375em) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  p {
    color: var(--grey-2);
    font-size: 1.125rem;
    line-height: 1.625rem;

    & + p {
      margin-top: 1.25rem;
    }
  }
`;

const HomeSobre = () => {
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
    <SobreSection id="sobre" ref={wrapper}>
      <SobreContainer>
        <SobreImage className={active && 'active'}>
          <Image
            src="/images/quem-somos.png"
            alt="Quem somos e o que buscamos"
            width={517}
            height={633}
            quality={100}
          />
        </SobreImage>
        <SobreContent className={active && 'active'}>
          <h1>
            Quem somos
            <br />e o que buscamos
          </h1>
          <p>
            Somos um movimento de causa, suprapartidário, da sociedade civil que
            reúne representantes de entidades associativas e sindicais,
            formadores de opinião, empresas, representantes do poder público,
            especialistas, associações e ONGs, unidos por um objetivo maior;
          </p>
          <p>
            Sensibilizar os tomadores de decisão do Banco Central, a partir da
            mobilização da sociedade, em favor de um novo programa de concessão
            de microcrédito voltado às mulheres empreendedoras.
          </p>
        </SobreContent>
      </SobreContainer>
    </SobreSection>
  );
};

export default HomeSobre;
