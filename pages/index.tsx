import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import {Flowered} from '../components/Flowered';
import {getMenuItems, getHomePage, HomePage, MenuItem as MenuItemModel} from '../infrastructure/prismic';
import {getLocale} from '../infrastructure/locale';
import {Loading} from '../components/Loading';
import {Blur} from '../components/Blur';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
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
`;

const Menu = styled.div`
  margin: 45px 45px 0 0;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 500px) {
    top: auto;
    right: auto;
    bottom: 10px;
    width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;
const MenuItem = styled.a`
  line-height: 20px;
  font-family: 'Raleway';
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 0 10px 0;
  color: inherit;
`;

const Content = styled.div`
  position: relative;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2400px;

  background: linear-gradient(#c6c4f3, rgba(255, 255, 255, 0));
`;

const SubTitle = styled.div`
  margin-left: 8vw;
  margin-top: 9vw;
  margin-bottom: 5vw;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    margin-left: 0;
  }
`;

const Scale = styled.div`
  @media screen and (max-width: 500px) {
    transform: scale(1.2);
  }
`;
type HomeProps = {
  page: HomePage;
  menuItems: MenuItemModel[];
};

const Home = ({page, menuItems}: HomeProps) => {
  return (
    <>
      <Gradient />
      <Container>
        <Header>
          <Title>{page.title}</Title>
        </Header>
        <Menu>
          {menuItems.map((menuItem: MenuItemModel) => (
            <MenuItem key={menuItem.label} href={menuItem.link}>
              {menuItem.label}
            </MenuItem>
          ))}
        </Menu>
        <Content>
          <SubTitle>
            <Scale>
              <Flowered
                style={{
                  fontFamily: 'Playfair Display',
                  fontSize: '13vw',
                  textTransform: 'uppercase',
                  fontWeight: 'normal',
                }}
              >
                {page.subtitle}
              </Flowered>
            </Scale>
          </SubTitle>
          <Blur />
        </Content>
      </Container>
      <Loading />
    </>
  );
};

export async function getServerSideProps({preview = null, previewData = {}}: {preview: any; previewData: any}) {
  const {ref} = previewData;

  return {
    props: {
      page: await getHomePage(ref),
      menuItems: await getMenuItems(getLocale()),
      preview,
    },
  };
}

export default Home;
