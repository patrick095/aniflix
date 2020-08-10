import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../respositories/animes';
import categoriesRepository from '../../../respositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriesTitles = categories.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    category: '',
  });
  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesOnDB) => {
        setCategories(categoriesOnDB);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaId = categories.find((category) => category.titulo === values.category);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaId.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Url do vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="categoria do vídeo"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoriesTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
