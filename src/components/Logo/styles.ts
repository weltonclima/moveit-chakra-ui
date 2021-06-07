import styled from "styled-components";

export const Container = styled.div`
  img {
    margin-top: 3.5rem;
    width: 33.6rem;
    height: 28.87rem;
    opacity: 0.8;
  }

  img:hover {
    opacity: 1;
  }

  @media (max-width:980px){
    width: 0;
    height: 0;
    img{
      margin-top: 3.5rem;
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
`;
