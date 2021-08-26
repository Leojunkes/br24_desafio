import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Input,
  Tabs,
  TabList,
  Tab,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Cadastrar() {
  const [dados, setDados] = useState([]);
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');

  const companyPost = 'http://localhost:3333/companies';
  const redirectPost = 'http://localhost:3000/';
  const company = 'http://localhost:3333/companies';
  const reload = 'http://localhost:3000/companies';
  const cad = 'http://localhost:3000/cadastrar';

  const notify = () => toast.success('Empresa cadastrada com sucesso!');

  useEffect(() => {
    axios
      .get(company)
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        alert('ocorreu erro durante o get!');
      });
  }, []);

  //Função DELETAR!
  const handleDelete = async (idProduto) => {
    // e.preventDefault();
    window.location.replace(reload);

    await axios.delete('http://localhost:3333/companies/' + idProduto);
  };

  //Cadastrar nova empresa
  async function handleCreateNewCompany(e) {
    e.preventDefault();
    const data = { title, email };
    window.location.replace(reload);

    setTitle('');
    setEmail('');

    axios.post(companyPost, data);
    if (data) {
      return notify();
    }
  }

  return (
    <>
      <div>
        <ToastContainer />
        <img
          style={{ marginTop: 30, marginLeft: 98 }}
          src="imagens/BR24.png"
          alt=""
        />
        <Flex
          as="form"
          width="100%"
          p="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleCreateNewCompany}
          id="insert_form"
        >
          <Tabs
            borderBottom={false}
            variant="soft-rounded"
            colorScheme="primary"
          >
            <TabList ml="4">
              <a href={cad}>
                <Tab
                  _hover={{ color: 'white', bg: 'blue.600' }}
                  color="white"
                  background="blue.500"
                  mt="4"
                >
                  novo contato
                </Tab>
              </a>

              <a href={redirectPost}>
                <Tab
                  _hover={{ color: 'white', bg: 'blue.600' }}
                  color="white"
                  background="blue.500"
                  ml="1"
                  mt="4"
                >
                  Cadastro geral
                </Tab>
              </a>
              <a href={reload}>
                <Tab color="white" background="#396d9d" mt="4">
                  refresh
                </Tab>
              </a>
            </TabList>
          </Tabs>
          <Flex mt="4" flexDirection="column">
            <FormControl>
              <FormLabel htmlFor="empresa">Nome da empresa</FormLabel>

              <Input
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                name="title"
                id="title"
                variant="filled"
                w="100%"
                type="text"
                _hover={{ bgColor: 'gray.200' }}
                size="md"
                required="true"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="empresa">Email da empresa</FormLabel>

              <Input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                name="title"
                id="title"
                variant="filled"
                w="100%"
                type="email"
                _hover={{ bgColor: 'gray.200' }}
                size="md"
                required="true"
              />
            </FormControl>
          </Flex>

          <Flex mt="1">
            <Button
              border="none"
              w="22"
              size="md"
              colorScheme="blue"
              type="submit"
            >
              Cadastrar Empresas
            </Button>
          </Flex>
        </Flex>

        <Flex>
          <Table variant="simple">
            <Thead>
              <Tr borderBottom="2px" borderColor="gray.400">
                <Th color="black">Nome da Empresa</Th>

                <Th color="black">Email da Empresa</Th>
                <Th><a href='http://localhost:3000/cadastroUpdateTitle'><Button size='md' _hover={{ color: 'white', bg: 'blue.600' }}
                  color="white"
                  background="blue.500">Alterar Cadastro de Contatos</Button></a></Th>
              </Tr>
            </Thead>
            {dados.map((c) => (
              <Tbody key={c.id}>
                <Tr key="">
                  <Td>{c.title}</Td>
                  <Td>{c.email}</Td>
                  

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
    </>
  );
}
