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
  
  
  async function hadleDelete(id) {
    const userDelete = '/http:/localhost:3333/users';
    if (confirm('Deseja realmente excluir este usuário?')) {
      const result = await axios.delete(userDelete);
    }
  }
  
  const cad = 'http://localhost:3000/cadastrar';
  const Companies = ({ dados }) => (
  
    
    <div>
     
      <Link href={cad}>
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
              <Th color="black">ID</Th>
              <Th></Th>
            </Tr>
          </Thead>
          {dados.map((c) => (
            <Tbody key={c.id}>
              <Tr key="">
                <Td>{c.title}</Td>
                <Td lineHeight="2" display="flex" paddingTop="14">
                 {c.id }
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
  
  Companies.getInitialProps = async () => {
    const user = 'http://localhost:3333/users';
    const company = 'http://localhost:3333/companies';
  
    const response = await axios.get(company);
  
    return {
      dados: response.data,
    };
  };
  
  export default Companies;
  