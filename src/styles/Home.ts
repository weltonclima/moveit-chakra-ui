import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 992px;
  padding: 2.5rem 2rem;
  display: flex;

  @media (min-width: 980px){
    section{
      flex: 1;
      display: grid;
      
      grid-template-columns: 1fr 1fr;
      gap: 6.25rem;
      align-items: center;
    }

    flex-direction: column;
  }

  @media (max-width: 980px){
    justify-content: center;
    max-width: 540px;

    >header{
      top: 0;
      left: 0;
      right: 0;
      position: absolute;
      padding: .5rem 3.5rem;
    }
  }
`;

export const BackLogin = styled.div`
  background: var(--blue-dark);
`;

export const ContainerLogin = styled.div`
  height: 100vh;
  max-width: 1108px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  section {
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    background: var(--blue);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  @media(min-width: 980px){
    section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-items: center;
    height: 80vh;
    }
  }
`;