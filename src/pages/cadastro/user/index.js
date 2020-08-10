import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import TableCategories from '../../../components/Table';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    link_extra: {
      text: '',
    },
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategory] = useState([]);
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devflix-nine.herokuapp.com/categorias';
    fetch(URL)
      .then(async (res) => {
        const result = await res.json();
        setCategory([
          ...result,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategory([...categories, values]);
        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição: "
          type="textarea"
          name="link_extra"
          value={values.link_extra.text}
          onChange={(event) => handleChange({ target: { getAttribute() { return 'link_extra'; }, value: { text: event.target.value } } })}
        />
        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
        <Button onClick={clearForm}>
          Limpar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <TableCategories categories={categories} />
      <Link to="/login">
        Voltar
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
