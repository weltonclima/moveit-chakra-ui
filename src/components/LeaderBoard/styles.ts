import styled from "styled-components";

export const Container = styled.div`
  font-family: Inter;

  h1{
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 1.57rem;
    line-height: 2.01rem;
    color: var(--title);
    margin: 1.75rem 0;
  }

  table{
    border-spacing: 0 0.5rem;
    width: 100%;

    th{
      padding: .7rem 1.4rem;
      font-style: normal;
      font-weight: bold;
      font-size: .87rem;
      line-height: 1.06rem;
      color: var(--text);
      text-align: left;
      text-transform: uppercase;
      opacity: 0.6;

      &:first-child {
        padding: 0;
      }
    }

    td {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.18rem;
      padding: .7rem 1.4rem;
      background: var(--white);
      color: var(--text);

      &>span{
        color: var(--blue);
      }

      &:first-child {
        border-right: 4px solid var(--background);
        border-radius: 5px 0px 0px 5px;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.81rem;
        width: 1rem;
        
      }
      &:last-child {
        border-radius: 0px 5px 5px 0px;
      }
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  &>img{
    width: 44.8px;
    height: 44.8px;
    border-radius: 50%;
  }

  &>div{
    margin-left: .7rem;

    span{
      margin-bottom: .4rem;
      display: block;
      font-style: normal;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: var(--title);
    }

    div{
      display: flex;
      align-items: center;
      justify-content: left;
      small{
        margin-left: .5rem;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.18rem;
      }
    }
  }
`;