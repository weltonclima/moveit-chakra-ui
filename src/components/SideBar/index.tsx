import {  getSession, signOut } from "next-auth/client";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { api } from "../../services/api";
import { Container, Span } from './styles';

interface SideBarProp {
  setHome: (event) => void;
  home: boolean;
}
export function SideBar({ setHome, home }: SideBarProp) {
  const [focus, setFocus] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [provider, setProvider] = useState('');

  useEffect(() => {
    async function getUser() {
      const session = await getSession();
      if (!session) {
        return
      }
      const res = await api.get('/user');
      console.log(res.data)
      setProvider(res.data.provider)

    }
    getUser()
  }, [])

  useEffect(() => {

    setTimeout(() => {
      openSideBar && setOpenSideBar(false);

    }, 5000)

  }, [openSideBar])

  function handleSignOut() {
    setTimeout(() => {
      setFocus(false);
    }, 1000);
  }

  return (
    <Container
      isActive={openSideBar}
    >
      <img
        onClick={e => { !openSideBar && setOpenSideBar(true) }}
        src="LogoSideBar.svg"
        alt="Logo"
      />
      <ul>
        <li>
          <div>
            <Span isActive={home} />
            <img
              onClick={e => setHome(true)}

              src={home ? `home.svg` : `homeHide.svg`}
              alt="Home"
            />
          </div>
        </li>
        <li>
          <div>
            <Span isActive={!home} />
            <img
              onClick={e => setHome(false)}
              src={!home ? `award.svg` : `awardHide.svg`}
              alt="Ranking"
            />
          </div>
        </li>
      </ul>
      <button
        type="button"
        onMouseOver={e => setFocus(true)}
        onMouseOut={e => handleSignOut()}
        onClick={() => signOut()}
      >
        {focus ? <>
          <FiX color="#FFF" />
        </> : <>
          {provider == 'google' && <FaGoogle color="#FFF" />}
          {provider == 'github' && <FaGithub color="#FFF" />}
        </>}
      </button>
    </Container>
  );
}