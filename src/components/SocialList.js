import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    &:not(:last-child) {
      margin-right: 1.125rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.iconWidth};
    height: ${(props) => props.iconHeight};
    color: ${(props) => props.iconColor};
    background: ${(props) => props.iconBg};
    font-size: ${(props) => props.iconSize};
    border-radius: 50%;
  }
`;

const SocialList = ({ width, height, color, background, fontSize }) => {
  return (
    <SocialNav
      iconWidth={width}
      iconHeight={height}
      iconColor={color}
      iconBg={background}
      iconSize={fontSize}
    >
      <ul>
        <li>
          <a
            href="https://www.facebook.com/mov.expansao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/movimentoexpansao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/movimento_expansao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </SocialNav>
  );
};

SocialList.defaultProps = {
  width: '2rem',
  height: '2rem',
  color: 'var(--white)',
  background: 'var(--black)',
  fontSize: '1rem',
};

export default SocialList;
