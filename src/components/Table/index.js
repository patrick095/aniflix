import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import categoriesRepository from '../../respositories/categories';
import useForm from '../../hooks/useForm';

const Table = styled.table`
width: 100%;
text-align: left;
border: 2px solid #2A7AE4;
box-sizing: border-box;
border-collapse: collapse;
margin: 10px 0;
`;
Table.Thead = styled.thead`
padding: 0;
text-align: left;
`;
Table.Th = styled.th`
text-align: left;
border: 2px solid #2A7AE4;
margin: 0;
padding: 5px;
`;
Table.Td = styled.td`
margin: 0;
padding: 5px;
`;

function TableCategories({ categories }) {
  const [allCategories, setAllCategories] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const { handleChange, values, clearForm } = useForm();

  // verifica se está logado
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('user_info')) || { logged: false };
    const isLogged = info.logged === true;
    setUserInfo(isLogged ? info : { logged: false });
  }, []);
  useEffect(() => {
    setAllCategories(categories);
  }, [categories]);

  function deleteCategory({ name, id }) {
    categoriesRepository.deleteCategory({
      name, id, token: userInfo.token, userid: userInfo.userid,
    })
      .then((res) => {
        setAllCategories(allCategories.filter((category) => category.name !== res.data.name));
      });
  }
  return (
    <Table>
      <Table.Thead>
        <tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Nome</Table.Th>
          <Table.Th>Descrição</Table.Th>
          <Table.Th>Cor</Table.Th>
          <Table.Th>Remover</Table.Th>
        </tr>
      </Table.Thead>
      <tbody>
        {allCategories.map((category) => (
          <tr key={`${category.id}line`}>
            <Table.Td key={`${category.id}id`}>
              {category.id}
            </Table.Td>
            <Table.Td key={`${category.id}name`}>
              {category.name}
            </Table.Td>
            <Table.Td key={`${category.id}description`}>
              {category.description}
            </Table.Td>
            <Table.Td key={`${category.id}color`}>
              {category.color}
            </Table.Td>
            <Table.Td key={`${category.id}delete`}>
              <button type="button" onClick={() => deleteCategory({ name: category.name, id: category.id })}>Remover</button>
            </Table.Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableCategories;
