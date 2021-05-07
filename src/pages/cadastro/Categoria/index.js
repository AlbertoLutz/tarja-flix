import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import FormField from "../../../components/Formfield";
import PageDefault from "../../../components/PageDefault";

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "black",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  function handleChange(event) {
    setValue(event.target.getAttribute("nome"), event.target.value);
  }

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "https://tarja-flix.herokuapp.com";
      fetch(URL).then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error("Não foi possível pegar os dados");
      });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="titulo"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          as="textarea"
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.titulo}`}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/"> Voltar para a Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
