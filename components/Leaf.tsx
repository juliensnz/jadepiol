import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {Size} from '../hooks/useElementSize';
import {Point} from '../hooks/useLeafPoints';
import Leafs from './Leafs';

const Container = styled.div`
  transform-origin: top left;
  overflow: visible;
  position: absolute;
`;

const bouquet = Leafs;

const RotateLeaf = styled.g<Point & {isVisible: boolean}>`
  @keyframes rotateLeaf${(props) => props.index} {
    from {
      transform: rotate(${(props) => props.angle}deg);
    }
    to {
      transform: rotate(${(props) => props.angle + props.gap}deg);
    }
  }
  animation: ${(props) => props.timing}s ease-in-out 0.5s infinite alternate ${(props) => `rotateLeaf${props.index}`};

  transform: rotate(${(props) => (props.isVisible ? props.angle : 0)}deg);
  transition: transform 2s ease-in-out;
  transform-origin: 50px 95px;
`;

const ScaleLeaf = styled.g<Point & {isVisible: boolean}>`
  transform: scale(${(props) => (props.isVisible ? props.scale : 0)});
  transition: transform ${(props) => props.growthLength}s ease-in-out;
  transition-delay: ${(props) => props.growthDelay}s;
  transform-origin: 50px 95px;
`;

const TranslateLeaf = styled.svg<{point: Point; scale: number}>`
  position: absolute;
  overflow: visible;
  transform: translate(${(props) => props.point.x - 50}px, ${(props) => props.point.y - 95}px);
`;

type LeafProps = {
  point: Point;
  size: Size;
};

const Leaf = ({point, size}: LeafProps) => {
  const [isVisible, display] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      display(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TranslateLeaf
      width={100}
      height={100}
      viewBox="0 0 100 100"
      point={point}
      scale={point.scale}
      key={point.x + point.y + point.index}
    >
      <ScaleLeaf isVisible={isVisible} {...point}>
        <RotateLeaf isVisible={isVisible} {...point}>
          {bouquet[point.leafIndex]}
        </RotateLeaf>
      </ScaleLeaf>
    </TranslateLeaf>
  );
};

type LeafCollectionProps = {
  size: Size;
  points: Point[];
  scale: number;
};

const LeafCollection = ({size, points, scale}: LeafCollectionProps) => {
  return (
    <Container style={{width: `${size.width}px`, height: `${size.height}px`, transform: `scale(${scale})`}}>
      {points.map((point) => (
        <Leaf key={point.index} point={point} size={size} />
      ))}
    </Container>
  );
};

export {LeafCollection};
