import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Flex,
  Select,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import axios from 'axios';

const handleDelete = async (idProduto) => {
  window.location.replace ('http://localhost:3000/');
  // window.location.reload();
  if (confirm('Deseja realmente exluir este usuário?')) {
    await axios.delete('http://localhost:3333/users/' + idProduto);
  }
};

const cad = 'http://localhost:3000/cadastrar';
const Cadastros = ({ dados }) => (
  <div>
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
      </TabList>
    </Tabs>

    <Flex >
      <Table variant="simple">
        <Thead>
          <Tr borderBottom="2px" borderColor="gray.400">
            <Th color="black">Conpany Title</Th>
            <Th color="black">Contact Name</Th>
            <Th></Th>
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
                <Button
                  border="none"
                  w="16"
                  size="sm"
                  colorScheme="blue"
                  type="submit"
                  onClick={() => handleDelete(c.id)}
                >
                  Atualizar
                </Button>
                <Button
                  border="none"
                  w="16"
                  size="sm"
                  colorScheme="red"
                  type="submit"
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
  </div>
);

Cadastros.getInitialProps = async () => {
  const user = 'http://localhost:3333/users';
  const company = 'http://localhost:3333/companies';

  const response = await axios.get(user);
  return {
    dados: response.data,
  };
};

export default Cadastros;
