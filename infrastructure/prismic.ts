import {Client} from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import {getLocale} from './locale';

type MenuItem = {
  label: string;
  link: string;
};
type HomePage = {
  title: string;
  subtitle: string;
};

const getMenuItems = async (locale: string): Promise<MenuItem[]> => {
  const menuItems = await Client().query(Prismic.Predicates.at('document.type', 'menu-item'), {lang: '*' });

  return menuItems.results.filter(menuItem => menuItem.lang === locale.toLowerCase()).map((menuItem) => ({
    label: menuItem.data.label[0].text,
    link: menuItem.data.link.url,
  }));
};

const getHomePage = async (ref: any): Promise<HomePage> => {
  const home = await Client().getSingle('home', ref ? {ref, lang: 'en-us' } : {lang: 'en-us' });

  return {
    title: home.data.title[0].text,
    subtitle: home.data.subtitle[0].text,
  };
};

export {getMenuItems, getHomePage};
export type {MenuItem, HomePage};
