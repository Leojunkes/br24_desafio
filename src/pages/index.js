import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ModalUpdate from '../components/modalUpdate';

export default function Cadastros() {
  //Função DELETAR!
  const handleDelete = async (idProduto) => {
    // e.preventDefault();
    window.location.replace(reload);
    await axios.delete('http://localhost:3333/users/' + idProduto);
  };

  const reload = 'http://localhost:3000';
  const cad = 'http://localhost:3000/cadastrar';

  const [dados, setDados] = useState([]);

  //Retornando dados da API
  useEffect(() => {
    const users = 'http://localhost:3333/users';

    axios
      .get(users)
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        alert('ocorreu um erro durante o get!');
      });
  }, []);

  return (
    <>
      <img
        style={{ marginTop: 30, marginLeft: 98 }}
        src="imagens/BR24.png"
        alt=""
      />
      <Tabs borderBottom={false} variant="soft-rounded" colorScheme="primary">
        <TabList ml="4">
          <a href={cad}>
            <Tab color="white" background="#3182ce" mt="4">
              novo registro
            </Tab>
          </a>
          <a href={reload}>
            <Tab color="white" background="#396d9d" mt="4">
              Refresh
            </Tab>
          </a>
        </TabList>
      </Tabs>

      <Flex>
        <Table variant="simple">
          <Thead>
            <Tr borderBottom="2px" borderColor="gray.400">
              <Th color="black">Nome da Empresa</Th>
              <Th color="black">Contatos</Th>
            </Tr>
          </Thead>
          {dados.map((c) => (
            <Tbody key={c.id}>
              <Tr key="">
                <Td>{c.companies.title}</Td>
                <Td lineHeight="2" display="flex" paddingTop="14">
                  {c.name} {c.last_name}
                  <br />
                  {c.name1} {c.last_name1}
                </Td>

                <Td>
                  <ModalUpdate />
                  <Button
                    type="button"
                    border="none"
                    w="16"
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDelete(c.id)}
                    ml="1"
                  >
                    Excluir
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Flex>
    </>
  );
}
