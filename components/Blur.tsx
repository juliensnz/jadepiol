import styled, {keyframes} from 'styled-components';

const breathAnimations = [
  () => {
    return keyframes`
      0% {
        transform: scale(1)  translate(0px, 0px);
      }
      20% {
        transform: scale(1.1)  translate(-10px, 30px);
      }
      40% {
        transform: scale(1.2)  translate(-20px, 0px);
      }
      80% {
        transform: scale(1)  translate(-50px, -20px);
      }
      100% {
        transform: scale(1)  translate(0px, 0px);
      }
    `;
  },
  () => {
    return keyframes`
      0% {
        transform: scale(1.2)  translate(-20px, 20px);
      }
      23% {
        transform: scale(1.2) translate(-50px, 0px);
      }
      45% {
        transform: scale(1) translate(0px, 0px);
      }
      78% {
        transform: scale(1.1)  translate(0px, 0px);
      }
      100% {
        transform: scale(1.2)  translate(-20px, 20px);
      }
    `;
  },
  () => {
    return keyframes`
      0% {
        transform: scale(1.3) translate(0px, 0px);
      }
      7% {
        transform: scale(1.3)  translate(-10px, -30px);
      }
      17% {
        transform: scale(1.4)  translate(0px, 0px);
      }
      42% {
        transform: scale(1.2)  translate(-20px, -10px);
      }
      83% {
        transform: scale(1.4) translate(30px, -20px);
      }
      100% {
        transform: scale(1.3) translate(0px, 0px);
      }
    `;
  },
];

const Container = styled.div`
  width: 100vw;
  overflow: visible;
  padding-top: 200px;

  svg {
    overflow: visible;
    width: 100vw;
  }

  ellipse,
  circle {
    transform-box: fill-box;
    transform-origin: center;
    overflow: visible;

    /* &:nth-child(n + 1) {
      animation: ${breathAnimations[0]} 30s ease-in-out alternate infinite;
    }
    &:nth-child(n + 2) {
      animation: ${breathAnimations[1]} 25s ease-in-out alternate infinite;
    }
    &:nth-child(n + 3) {
      animation: ${breathAnimations[2]} 35s ease-in-out alternate infinite;
    } */
  }
`;

const Blur = () => {
  return (
    <Container>
      <svg viewBox="0 0 1440 2058" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
          </filter>
        </defs>
        <g>
          <circle filter="url(#blur)" cx="1437" cy="265" r="325" fill="#FB9C8F" />
          <circle filter="url(#blur)" cx="1210" cy="520" r="490" fill="#FB9C8F" />
          <circle filter="url(#blur)" cx="1489" cy="971" r="390" fill="#FB9C8F" />
          <circle filter="url(#blur)" cx="133" cy="1455" r="390" fill="#FB9C8F" />
          <circle filter="url(#blur)" cx="-74" cy="1052" r="338" fill="#FB9C8F" />
          <circle filter="url(#blur)" cx="1601.5" cy="1636.5" r="502.5" fill="#FB9C8F" />
        </g>
      </svg>
    </Container>
  );
};

export {Blur};
