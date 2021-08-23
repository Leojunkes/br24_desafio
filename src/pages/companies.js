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
  Input,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import axios from 'axios';

 //Função DELETAR!
 const handleDelete = async (idProduto) => {
  // e.preventDefault();
  window.location.replace(reload);

  await axios.delete('http://localhost:3333/companies/' + idProduto);
};
const reload = 'http://localhost:3000/companies';
const cad = 'http://localhost:3000/cadastrar';
const Companies = ({ dados }) => (
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
            <Th color="black">ID</Th>
            <Th></Th>
          </Tr>
        </Thead>
        {dados.map((c) => (
          <Tbody key={c.id}>
            <Tr key="">
              <Td>{c.title}</Td>
              <Td lineHeight="2" display="flex" paddingTop="14">
                {c.id}
              </Td>

              <Td>
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
  </div>
);

Companies.getInitialProps = async () => {
  const company = 'http://localhost:3333/companies';

  const response = await axios.get(company);

  return {
    dados: response.data,
  };
};

export default Companies;
