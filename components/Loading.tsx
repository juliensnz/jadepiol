import {useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div<{hide: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => (props.theme.nightMode ? '#000011' : 'white')};
  color: ${(props) => (props.theme.nightMode ? 'white' : 'black')};
  transition: 3s opacity ease-in-out;
  transition-delay: 1s;
  opacity: ${({hide}) => (hide ? 0 : 1)};
`;

const Loading = () => {
  const [hide, setHide] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    setHide(true);

    setTimeout(() => {
      setHidden(true);
    }, 4000);
  }, []);

  if (hidden) return null;

  return <Container hide={hide} />;
};

export {Loading};
