import type { NextPage } from "next";
import Layout from "../components/Layout";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default Home;
