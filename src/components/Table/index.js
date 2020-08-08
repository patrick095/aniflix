import React from 'react';
import styled from 'styled-components';

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
  return (
    <Table>
      <Table.Thead>
        <tr>
          <Table.Th>Nome</Table.Th>
          <Table.Th>Descrição</Table.Th>
          <Table.Th>Editar</Table.Th>
          <Table.Th>Remover</Table.Th>
        </tr>
      </Table.Thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <Table.Td>
              {category.titulo}
            </Table.Td>
            <Table.Td>
              {category.link_extra ? category.link_extra.text : ''}
            </Table.Td>
            <Table.Td>
              <button type="button">
                Editar
              </button>
            </Table.Td>
            <Table.Td>
              <button type="button">Remover</button>
            </Table.Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableCategories;
