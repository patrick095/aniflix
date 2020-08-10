import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import TableCategories from '../../../components/Table';
import useForm from '../../../hooks/useForm';
import categories from '../../../respositories/categories';

function CadastroCategoria() {
  const [userInfo, setUserInfo] = useState({});
  // verifica se está logado
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('user_info')) || { logged: false };
    const isLogged = info.logged === true;
    setUserInfo(isLogged ? info : { logged: false });
  }, []);

  const initialValues = {
    titulo: '',
    link_extra: {
      text: '',
    },
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [allCategories, setCategory] = useState([]);
  const [newCategories, setNewCategory] = useState([]);
  useEffect(() => {
    categories.getAll()
      .then((response) => {
        setCategory(response);
      });
  }, [newCategories]);
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // setCategory([...allCategories, values]);
        categories.createNewCategory({
          name: values.name,
          id: values.id,
          description: values.description,
          color: values.color,
          token: userInfo.token,
          userid: userInfo.userid,
        })
          .then((response) => {
            setNewCategory(response.data);
          });

        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Id "
          type="number"
          name="id"
          value={values.id}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
        <Button type="Button" onClick={clearForm}>
          Limpar
        </Button>
      </form>

      {allCategories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <TableCategories categories={allCategories} />
      <Link to="/cadastro/video">
        Voltar
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
