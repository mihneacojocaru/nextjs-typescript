import React from "react";
import Head from "next/head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <title>TypeScript - Crashcourse</title>
        <meta
          name="description"
          content="This is my first typescript project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
