import React from "react";

import Branding from "../organisms/branding"
import Layout from "../templates/layout";
import Header from "../organisms/header";
import Menu from "../organisms/menu";

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu/>
        <Header/>
        <Branding/>
      </Layout>
    </div>
  );
}

export default App;
