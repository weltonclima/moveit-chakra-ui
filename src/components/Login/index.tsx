import { signIn } from "next-auth/client";
import { FaGithub } from 'react-icons/fa';
import React, { useState } from 'react'
import { Button, Container } from "./styles";

export function Login() {
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <div>
        <div>
          <img src="Logo.svg" alt="Logo move.it" />
        </div>
        <strong>Bem-vindo</strong>
      </div>
      <div>
        <small>Faça login para começar</small>
      </div>
      <div>
        <Button
          type="button"
          onMouseOver={e => setFocus(true)}
          onMouseOut={e => setFocus(false)}
          isActive={focus}
          isRadius={25}
          isBorder={false}
          onClick={() => signIn('github')}
        >
          <FaGithub />
        </Button>
      </div>
    </Container>
  )
}