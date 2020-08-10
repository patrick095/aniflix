import React from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import users from '../../respositories/users';

function Login() {
  const history = useHistory();
  const initialValues = {
    titulo: '',
    link_extra: {
      text: '',
    },
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  async function signin(user, password) {
    users.signin(user, password)
      .then((response) => {
        if (response.data === 'invalid username') {
          return alert('Usuário não cadastrado!');
        }
        if (response.data === 'invalid password') {
          return alert('Usuário ou senha inválido!');
        }
        if (response.data.userWithToken) {
          const userInfo = {
            // eslint-disable-next-line no-underscore-dangle
            userid: response.data.userWithToken._id,
            token: `Bearer ${response.data.userWithToken.token}`,
            logged: true,
            name: response.data.userWithToken.name,
            level: response.data.userWithToken.level,
          };
          localStorage.setItem('user_info', JSON.stringify(userInfo));
          history.push('/');
        }
      });
  }

  return (
    <PageDefault>
      <div>
        <h1>Entrar</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          signin(values.user, values.password);
          clearForm();
        }}
        >
          <FormField
            label="Usuário"
            type="text"
            name="user"
            value={values.user}
            onChange={handleChange}
          />
          <FormField
            label="Senha"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button>
            Entrar
          </Button>
          <Button onClick={clearForm}>
            Limpar
          </Button>
        </form>
      </div>
    </PageDefault>
  );
}

export default Login;
