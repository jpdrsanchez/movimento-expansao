import { useState } from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  position: relative;
`;

const MenuButton = styled.button`
  position: relative;
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  z-index: 10000;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 0.1875rem;
    background: var(--orange);
    box-shadow: 0 0.5625rem var(--orange), 0 -0.5625rem var(--orange);
    transition: all 0.3s;
    ${(props) =>
      props.isopen &&
      css`
        box-shadow: none;
        transform: rotate(-45deg);
      `}
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.1875rem;
    background: var(--orange);
    position: absolute;
    transition: all 0.3s;
    ${(props) =>
      props.isopen &&
      css`
        transform: rotate(45deg);
      `}
  }

  &:focus {
    outline: none;
  }
`;

const MainMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  z-index: 9999;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-100%);
  transition: all 0.5s;

  &.active {
    transform: none;
  }

  li {
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 1.875rem;
    }
  }

  a {
    color: var(--white);
    font-size: 1.875rem;
    font-weight: 600;
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <MenuButton
        aria-label="Abrir Menu"
        type="button"
        isopen={open}
        onClick={() => setOpen(!open)}
      />
      <MainMenu className={open && 'active'}>
        <ul>
          <li>
            <a href="#manifesto" onClick={() => setOpen(false)}>
              Manifesto
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setOpen(false)}>
              Quem somos
            </a>
          </li>
          <li>
            <a href="#bandeiras" onClick={() => setOpen(false)}>
              Nossas Bandeiras
            </a>
          </li>
          <li>
            <a href="#videos" onClick={() => setOpen(false)}>
              Vídeos
            </a>
          </li>
          <li>
            <a href="#artigos" onClick={() => setOpen(false)}>
              Artigos
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => setOpen(false)}>
              Contato
            </a>
          </li>
          <li>
            <a href="#apoiadores" onClick={() => setOpen(false)}>
              Apoiadores
            </a>
          </li>
        </ul>
      </MainMenu>
    </Nav>
  );
};

export default Menu;
