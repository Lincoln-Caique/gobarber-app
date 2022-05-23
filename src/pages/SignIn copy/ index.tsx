import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from '../SignIn/styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/input / index';
import Button from '../../components/Button/  index';

const SingnIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber Logo" />

      <form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Content>

    <Background />
  </Container>
);

export default SingnIn;
