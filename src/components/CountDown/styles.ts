import styled from "styled-components";

export const CountDownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  >span {
  font-size: 6.25rem;
  margin: 0 0.5rem;
  }
`;

export const DivCountDown = styled.div`
 flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    flex: 1;
  }

  span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  span:last-child {
    border-left: 1px solid #f0f1f3;
  }
`;

interface CountDownButtonProps {
  isActive: boolean;
}

export const CountDownButton = styled.button<CountDownButtonProps>`
  width: 100%;
  height: 5rem;
  margin: 2rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;

  ${(props)=> props.isActive
    ? `
      color: var(--title);
      background: var(--white);

      &:not(:disabled):hover{
        background: var(--red);
        color: var(--white)
      }
    `
    : `
      color: var(--white);
      background: var(--blue);

      &:not(:disabled):hover{
        background: var(--blue-dark);

      }
    `
  }

  &:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }
`;