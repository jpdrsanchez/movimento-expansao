import styled from 'styled-components';
import Container from './Container';
import SocialList from './SocialList';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: url('/images/wave-4.png') no-repeat top center;
  background-size: auto;

  @media (min-width: 90em) {
    background-size: 120% auto;
  }

  h2 {
    color: var(--grey-6);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
    text-align: center;
    margin-top: 5.375rem;
    margin-bottom: 1.75rem;
  }

  & > div > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 2.125rem;
    border-bottom: 0.125rem solid var(--orange);

    li {
      padding: 1rem;
    }
  }
`;

const FooterSocial = styled.div`
  max-width: 55rem;
  background: var(--black);
  color: var(--white);
  margin: 0 auto;
  border-radius: 2.8125rem;
  display: grid;
  gap: 3.75rem;
  padding: 2rem 1rem;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 65px #0000006e;

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
    gap: 7.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;

    @media (min-width: 48em) {
      text-align: right;
    }
  }

  &::after {
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    position: absolute;
    width: 4.375rem;
    height: 0.1875rem;

    @media (min-width: 48em) {
      width: 0.1875rem;
      height: 4.375rem;
    }
  }

  nav {
    ul {
      @media (max-width: 47.9375em) {
        justify-content: center;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper id="apoiadores">
      <Container>
        <FooterSocial>
          <p>Acompanhe o Movimento nas redes sociais</p>
          <SocialList
            width="4.125rem"
            height="4.125rem"
            color="var(--black)"
            background="var(--white)"
            fontSize="1.5rem"
          />
        </FooterSocial>
        <h2>Apoiadores</h2>
        <ul>
          <li>
            <Image
              src="/images/empreendedoras.png"
              width={214}
              height={120}
              quality={100}
              alt="Empreendedoras Maduras"
            />
          </li>
          <li>
            <Image
              src="/images/ahsim.png"
              width={71}
              height={71}
              quality={100}
              alt="Empreendedoras Maduras"
            />
          </li>
          <li>
            <Image
              src="/images/grano.png"
              width={114}
              height={79}
              quality={100}
              alt="Grano Criação e Design"
            />
          </li>
          <li>
            <Image
              src="/images/inpressoficina.png"
              width={198}
              height={24}
              quality={100}
              alt="In Press Oficina"
            />
          </li>
          <li>
            <Image
              src="/images/noz.png"
              width={140}
              height={110}
              quality={100}
              alt="Noz Pesquisa e Inteligência"
            />
          </li>
        </ul>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
