import React from 'react';
import {GetStaticPropsContext} from 'next';
import Link from 'next/link';

import styled from 'styled-components';

import {Client} from '../prismic-configuration';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  display: flex;
`;
const Title = styled.h1`
  flex: 1;
  text-align: center;
  text-transform: uppercase;
  font-style: bold;
  font-size: 24px;
  margin: 38px 0;

  font-family: 'Playfair Display', 'Times New Roman', Times, serif;

  a {
    text-decoration: none;
    color: black;
  }
`;
const Menu = styled.div`
  margin: 45px 45px 0 0;
  position: absolute;
  top: 0;
  right: 0;
`;
const MenuItem = styled.a`
  line-height: 20px;
  font-family: 'Raleway';
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
`;

const Content = styled.div`
  position: relative;
`;

const Table = styled.img`
  position: absolute;
  top: -25vw;
  left: -35vw;
  width: 140vw;
  z-index: -1;
  /* background: red; */
`;

const Hand = styled.img`
  position: absolute;
  top: 50vw;
  right: 2vw;
  width: 60vw;
  z-index: -1;
  /* background: red; */
`;

type PrismicElement = {
  type: string;
  text: string;
  spans: any[];
};

type IllustrationProps = {
  elements: {
    title: [PrismicElement];
  };
};

const Illustration = ({elements}: IllustrationProps) => {
  return (
    <Container>
      <Header>
        <Title>
          <Link href="/">
            <a>{elements.title[0].text}</a>
          </Link>
        </Title>
      </Header>
      <Menu>
        <MenuItem href="mailto:bonjour@jadepiol.com?subject=Bonjour%20Jade">Contact</MenuItem>
      </Menu>
      <Content>
        <Table src="/assets/table.png" />
        <Hand src="/assets/hand.png" />
      </Content>
    </Container>
  );
};

export async function getServerSideProps({preview = null, previewData = {}}: {preview: any; previewData: any}) {
  const {ref} = previewData;
  const illustration = await Client().getSingle('illustration', ref ? {ref} : {});

  return {
    props: {
      elements: illustration.data,
      preview,
    },
  };
}

export default Illustration;
