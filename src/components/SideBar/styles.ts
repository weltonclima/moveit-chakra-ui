import styled from "styled-components";

interface divProp{
  isActive: boolean;
}

export const Container = styled.div<divProp>`
  position: absolute;
  display: flex;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  >img{
    position: absolute;
    
  }

  ul{
    list-style: none;

   li{
      div{
        span{
          position: absolute;
          content: "";
        }

        img{
          color: var(--blue);
          cursor: pointer;
        }
      } 
    }
  }

  button{
    position: absolute;
    border-radius: 25px;
    background: var(--blue);
    border: 1px solid var(--blue);
    display: flex;
    align-items: center;
    justify-content:center;

    svg{
      width: 3rem;
      height: 3rem;
    }
  }
  @media (min-width: 1090px){
    width: 4.9rem;
    height: 35,87rem;
    border-radius: 0px 5px 5px 0px;
    left: 0;
    top: 0;
    bottom: 0;
    align-items: center;

    >img {
      top: 0;
      height: 29.4px;
      width: 33.6px;
      margin: 1.4rem;
    }

    ul{
      li{
        div{
          width: 3.15rem;
          height: 2.45rem;
          span{
            height: 2.45rem;
            width: .20rem;
            left: 1px;
            border-radius: 0px 5px 5px 0px;
          }
          img{
            width: 22.4px;
            height: 22.4px;
            margin: .5rem 0 0 1.6rem;
          }
        }
      }
    }
    button{
      margin:  .9rem;
      bottom: 0px;
      height: 3rem;
      width: 3rem;
    }
  }

  @media (max-width: 1090px){
    left: 0;
    top: 0;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 5px 5px;    

    >img{
      left: 16px;
      height: 20.58px;
      width: 23.53px;
    }

    ${(props)=> props.isActive
      ? `
        width: 100%;
        
        ul{
          display: flex;
          li{
            div{
              height: 3.15rem;
              width: 2.45rem;
              
              span{
                top: 1px;
                height: .20rem;
                width: 2.45rem;
                border-radius: 0 0 5px 5px;
              }
    
              img{
                width: 22.4px;
                height: 22.4px;
                margin: 1.12rem 0 0 .50rem;
              }
            }
          }
        }
    
        button{
          right: 16px;
          height: 2.1rem;
          width: 2.1rem;
        }
      }
      `
      : `
        width: 3rem;

        ul{
          display: flex;
          li{
            div{
              visibility: hidden;
              height: 0;
              width: 0;
              
              span{
                height: 0;
                width: 0;
              }
    
              img{
                width: 0;
                height: 0;
              }
            }
          }
        }
    
        button{
          visibility: hidden;
          height: 0;
          width: 0;
        }
      }
      `
    }
  }
  `;

interface SpanProps {
  isActive: boolean;
}

export const Span = styled.span<SpanProps>`
  background: ${(props) => props.isActive
    ? `#5965e0`
    : `none`};
`;