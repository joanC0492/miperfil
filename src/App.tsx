import "@/scss/components/app.scss";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { About, Resume, Portfolio, Contact } from "@/components/Sections";
import { Footer } from "./components/Footer";
import { HeightProvider } from "./Context/HeightContext";

export const App = () => {
  return (
    <HeightProvider>
      <NavBar />
      <Hero />
      <Main>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
    </HeightProvider>
  );
};
