import { useState } from 'react';
import styled from 'styled-components';
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
    max-width: 62rem;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 0.875rem;
  max-width: 55rem;
  margin: 0 auto;

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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <Section id="contato">
      <ContactContainer>
        <h1>
          Quer contribuir com ideias, sugestões ou contar sua história para a
          gente ? Entre em contato:
        </h1>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input type="text" id="nome" label="Nome" setValue={setName} />
          <PhoneInput
            type="text"
            id="telefone"
            label="telefone"
            setValue={setPhone}
          />
          <Input type="email" id="email" label="E-mail" setValue={setMail} />
          <Textarea id="mensagem" label="Mensagem" setValue={setMessage} />
          <button type="submit">Enviar</button>
        </Form>
      </ContactContainer>
    </Section>
  );
};

export default HomeContact;
