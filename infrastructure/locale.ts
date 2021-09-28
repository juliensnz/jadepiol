import React from 'react';

const LocaleContext = React.createContext('fr-FR');
const getLang = (language: string) => language.split('-')[0];
const getLocale = () => ('undefined' !== typeof navigator ?
  navigator.language || (navigator as any).userLanguage :
  'fr-FR'
)

export {LocaleContext, getLang, getLocale};
