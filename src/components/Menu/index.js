/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './styles.css';
import Button from '../Button';

function Menu() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});
  // verifica se está logado
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('user_info')) || { logged: false };
    const isLogged = info.logged === true;
    setUserInfo(isLogged ? info : { logged: false });
  }, []);
  // pesquisa todas as categorias na api
  const [userMenu, setUserMenu] = useState(false);
  function NavbarUser() {
    if (userInfo.logged) {
      return (
        <h1
          onMouseEnter={() => setUserMenu(!userMenu)}
          onClick={() => setUserMenu(!userMenu)}
        >
          {' '}
          { userInfo.name }
          {' '}
        </h1>
      );
    }
    return (
      <Button as={Link} to="/login" className="ButtonLink">
        Entrar
      </Button>
    );
  }
  function logout() {
    localStorage.clear();
    history.push('/');
    setUserInfo({ logged: false });
    setUserMenu(false);
  }
  function UserOptions() {
    if (userMenu) {
      return (
        <div className="UserOptions">
          <Link className="options" to="/profile">Perfil</Link>
          <AdminOptions />
          <Link className="options" to="/" onClick={() => logout()}>Sair</Link>
        </div>
      );
    }
    return (<> </>);
  }
  function AdminOptions() {
    if (userInfo.level === 2) {
      return (
        <>
          <Link className="options" to="/editcategories">Categorias</Link>
          <Link className="options" to="/editanimes">Animes</Link>
        </>
      );
    }
    return (<> </>);
  }

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>
      <NavbarUser />
      <UserOptions />
    </nav>
  );
}

export default Menu;
