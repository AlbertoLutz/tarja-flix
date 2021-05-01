import React from "react";
import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import BannerMain from "./components/BannerMain";
import Footer from "./components/Footer";
import dadosIniciais from "./data/dados_iniciais.json";

function App() {
  return (
    <main style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />

      <Footer />
    </main>
  );
}

export default App;
