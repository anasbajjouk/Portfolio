import React, { useState } from "react";
import Header from "./components/header/header.component";
import About from "./components/about/about.component";
import Projects from "./components/projects/projects.component";
import ContactUs from "./components/contact-us/contact-us.component";
import Footer from "./components/footer/footer.component";

//Styles
import { AppWrapper } from "./App.styles";

function App() {
  const [name] = useState("Anas Bajjouk");

  return (
    <AppWrapper>
      <Header name={name} />
      <About />
      <Projects />
      <ContactUs />
      <Footer />
    </AppWrapper>
  );
}

export default App;
