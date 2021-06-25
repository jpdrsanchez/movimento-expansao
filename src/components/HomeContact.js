import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import useScroll from '../hooks/useScroll';
import Container from './Container';
import Input from './Form/Input';
import PhoneInput from './Form/PhoneInput';
import Textarea from './Form/Textarea';

const Section = styled.section`
  position: relative;
`;

const ContactContainer = styled(Container)`
  padding-top: 7.5rem;
  padding-bottom: 1.75rem;
  border-top: 0.0625rem solid var(--grey-5);

  h1 {
    color: var(--black-3);
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    margin-bottom: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 62rem;
    opacity: 0;
    transform: translateX(2.5rem);
    transition: opacity 0.7s, trasnform 1s;
  }

  &.active {
    h1 {
      transform: none;
      opacity: 1;
    }
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 0.875rem;
  max-width: 55rem;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(2.5rem);
  transition: opacity 0.7s, transform 1s;
  transition-delay: 0.3s;

  &.active {
    opacity: 1;
    transform: none;
  }

  @media (min-width: 36em) {
    grid-template-columns: 1fr 1fr;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border-radius: 1.25rem;
    background: var(--white-3);
    padding: 1.5rem 1.75rem;
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--white-4);
      text-transform: uppercase;
    }

    &.error {
      border: 0.0625rem solid red !important;

      &::placeholder {
        color: red;
      }
    }
  }

  textarea {
    resize: none;
    height: 11.5rem;
    @media (min-width: 36em) {
      grid-column: span 2;
    }
  }

  input {
    &:first-child {
      @media (min-width: 36em) {
        grid-column: span 2;
      }
    }
  }

  button {
    color: var(--white);
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.25rem;
    width: 100%;
    max-width: 8.75rem;
    padding: 0.75rem 0.75rem 0.625rem;
    border: 0.125rem solid var(--orange);
    border-radius: 1.25rem;
    background: var(--black-4);
    margin-left: auto;
    @media (min-width: 36em) {
      grid-column: span 2;
    }

    &:focus {
      outline: none;
    }
  }
`;

const HomeContact = () => {
  const name = useForm();
  const phone = useForm();
  const mail = useForm('email');
  const message = useForm();
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.validate() &&
      phone.validate() &&
      mail.validate() &&
      message.validate()
    ) {
      setSent(true);
    }
  };

  return (
    <Section id="contato" ref={wrapper}>
      <ContactContainer className={active && 'active'}>
        <h1>
          Quer contribuir com ideias, sugestões ou contar sua história para a
          gente ? Entre em contato:
        </h1>
        {sent ? (
          <p>Formulário Enviado</p>
        ) : (
          <Form onSubmit={handleSubmit} className={active && 'active'}>
            <Input type="text" id="nome" label="Nome" {...name} />
            <PhoneInput type="text" id="telefone" label="telefone" {...phone} />
            <Input type="email" id="email" label="E-mail" {...mail} />
            <Textarea id="mensagem" label="Mensagem" {...message} />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </ContactContainer>
    </Section>
  );
};

export default HomeContact;
