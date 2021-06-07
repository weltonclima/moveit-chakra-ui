import React, { useState } from "react";
import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar/index";
import { Profile } from "../components/Profile/index";
import { CompletedChallenges } from "../components/CompletedChallenges/index";
import { CountDown } from "../components/CountDown/index";
import { ChallengeBox } from "../components/ChallengeBox/index";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Login } from "../components/Login/index";
import { Logo } from "../components/Logo/index";
import { getSession } from "next-auth/client";
import {
  Container, BackLogin,
  ContainerLogin
} from "../styles/Home";
import { SideBar } from "../components/SideBar/index";
import { LeaderBoard } from "../components/LeaderBoard/index";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";

interface HomeProps {
  session: Session
}

export default function Home({ session }: HomeProps) {
  const [home, setHome] = useState(true);

  return (
    <ChallengesProvider>
      <CountDownProvider>
        {!session ? (
          <BackLogin>
            <ContainerLogin>
              <Head>
                <title>Login | move.it</title>
              </Head>
              <section>
                <div>
                  <Logo />
                </div>
                <div>
                  <Login />
                </div>
              </section>
            </ContainerLogin>
          </BackLogin>
        ) : (
          <Container>

            <Head>
              <title>Inicio | move.it</title>
            </Head>
            {home ? <>
              <ExperienceBar />
              <SideBar
                setHome={setHome}
                home={home}
              />
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <CountDown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </> : <>
              <Head>
                <title>LeaderBoard | move.it</title>
              </Head>
              <SideBar
                setHome={setHome}
                home={home}
              />
              <LeaderBoard 
                home={home}
              />
            </>}
          </Container>
        )}
      </CountDownProvider>
    </ChallengesProvider >
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,      
    }
  }
}