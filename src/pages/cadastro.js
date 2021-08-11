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
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';

async function hadleDelete(id) {
  const userDelete = '/http:/localhost:3333/users';
  if (confirm('Deseja realmente excluir este usuário?')) {
    const result = await axios.delete(userDelete);
  }
}

const home = 'http://localhost:3000/';
const Cadastros = ({ dados }) => (
  <div>
    <Link href={home}>
      <Button
        border="none"
        w="25"
        size="md"
        colorScheme="blue"
        type="submit"
        mt="6"
        ml="5"
      >
        Novo registro
      </Button>
    </Link>
    <img style={{ marginTop: 30, marginLeft: 98 }} src="imagens/BR24.png" alt=""  />
    <Flex>
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
                  mr="-64"
                >
                  Editar
                </Button>
              </Td>
              <Td>
                <Button
                  border="none"
                  w="16"
                  size="sm"
                  colorScheme="red"
                  type="submit"
                  onClick={hadleDelete}
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
