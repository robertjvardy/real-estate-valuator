import React, { useState } from "react";
import Layout from "./Components/Layout/Layout";
import { Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import LandingPage from "./Components/LandingPage/LandingPage";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Layout>
        <Route path="/calculator" component={Form} />
        <Route path="/" component={LandingPage} />
      </Layout>
    </div>
  );
};

export default App;
