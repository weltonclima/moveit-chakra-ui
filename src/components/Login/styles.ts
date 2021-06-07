import styled from "styled-components";

export const Container = styled.div`
  div{
    img {
      width: 15.75rem;
      height: 3.32rem;
      margin-bottom: 3.2rem;
      }

      strong {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 1.57rem;
      line-height: 2.01rem;
      color: var(--white);
    }
  }

  div{
    small {
      display:inline-block;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 1.40rem;
      line-height: 1.87rem;
      color: var(--text-highlight);
      margin-top: 1.48rem;
      margin-bottom: 2.18rem;
    }
  }

  div:last-child{
    display: flex;
    align-items:center;
    justify-content: left;
  }

  @media (max-width: 980px){
    div{
      strong{
        justify-content: center;
        display: flex;
      }
    }
    div{
      small{
        text-align: center;
      }
    }
    div:last-child{
      justify-content: center;
    }
  }
`;

interface ButtonProps {
  isActive: boolean;
  isRadius: number;
  isBorder: boolean;
}

export const Button = styled.button<ButtonProps>`
  height: 3rem;
  width: 3rem;

  border-radius:${(props) => props.isRadius > 0
    && `${props.isRadius}px`};
  
  background: var(--blue-dark);
  color:var(--white);
  border: ${(props) => props.isBorder
    ? `1px solid var(--white)`
    : `2px solid var(--blue-dark)`};

  display: flex;
  align-items: center;
  justify-content:center;

  svg{
    width: 3rem;
    height: 3rem;
  }

  transition: background 0.2s;

  &:hover{
  background:${(props) => props.isActive
    && `var(--white)`};

  color:${(props) => props.isActive
    && `var(--blue-dark)`};

  border: ${(props) => props.isBorder
    ? `2px solid var(--blue-dark)`
    : `1px solid var(--white)`};
  }

  &+button{
    margin-left: 0.5rem;
  }
`;