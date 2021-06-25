import styled from 'styled-components';
import Image from 'next/image';
import Container from './Container';
import Menu from './Menu';
import SocialList from './SocialList';

const HeaderWrapper = styled.header`
  background: var(--white);
  padding-top: 1.25rem;
  padding-bottom: 1rem;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    &:first-child {
      @media (max-width: 35.9375em) {
        order: 1;
      }
    }

    &:last-child {
      @media (max-width: 35.9375em) {
        display: none;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Menu />
        <div>
          <Image
            src="/images/logo.png"
            width={130}
            height={82}
            quality={100}
            alt="Movimento Expansão"
          />
        </div>
        <SocialList />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
