import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import globalStyles from '../styles/global-styles';

// injectGlobalStyles
globalStyles();

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <html>
        <Head>
          <title>My page</title>
          <link href="https://fonts.googleapis.com/css?family=Permanent+Marker%7CSpace+Mono:400,400i,700,700i%7CPoppins:400,700%7CReenie+Beanie" rel="stylesheet"></link>
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
