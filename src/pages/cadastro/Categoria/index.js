import React, { useState } from "react";
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
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
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

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/"> Voltar para a Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
