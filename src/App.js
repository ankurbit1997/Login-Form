import React, { useState } from "react";
import Footer from "./components/footer";

import Form from "./components/form";
import "./style.scss";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "form-container dark" : "form-container"}>
      <div className="theme-toggle " onClick={() => setDark(!dark)}>
        <div className={dark ? "toggle-container toggled" : "toggle-container"}>
          <span></span>
        </div>
        <p style={{ color: dark ? "white" : "black" }}>
          {!dark ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
      <Form dark={dark} />
      <Footer dark={dark} />
    </div>
  );
};

export default App;
