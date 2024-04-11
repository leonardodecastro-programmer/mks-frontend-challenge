import styled from 'styled-components'

export const Skeleton = styled.div`
  position: relative;
  background-color: #eeeeee;
  height: 503px;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px 0px #00000022;

  &::before {
    content: '';
    border-radius: 0.5rem;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #eeeeee 0%,
      #c8c8c87f 20%,
      #eeeeee 40%,
      #eeeeee 100%
    );
    background-size: 450px 503px;
    background-repeat: no-repeat;
    animation: shimmer 1s linear infinite;
  }
  @keyframes shimmer {
    0% {
      background-position: 450px 0;
    }
    100% {
      background-position: -450px 0;
    }
  }

  @media (min-width: 768px) {
    height: 640px;
  }
`
