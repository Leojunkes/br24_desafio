import { Button, Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';
import axios from 'axios';

const Cadastros = ({ dados }) => (
  <div>
    
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
            <Td>{c.title}</Td>
            <Td>{console.log(c.title)}</Td>

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
              >
                Excluir
              </Button>
            </Td>
          </Tr>
        </Tbody>
      ))}
    </Table>
  </div>
);

Cadastros.getInitialProps = async () => {
  const user = 'http://localhost:3333/users';
  const company = 'http://localhost:3333/companies';

  const response = await axios.get(company);
  

  return {
    dados: response.data,
    
  };
};

export default Cadastros;
