import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Select,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cadastrar() {
  const redirectPost = 'http://localhost:3000/';
  const redirectPostCompanies = 'http://localhost:3000/companies';

  const [dados, setDados] = useState([]);

  const [newName, setNewName] = useState('');
  const [newLast, setNewLast] = useState('');
  const [newName1, setNewName1] = useState('');
  const [newLast1, setNewLast1] = useState('');

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

  const handleUpdate = async (id) => {
    window.location.replace('http://localhost:3000/');
    await axios
      .put('http://localhost:3333/putUsers/' + id, {
        name: newName,
        last_name: newLast,
        name1: newName1,
        last_name1: newLast1,
        id: id,
      })
      .then((res) => {
        alert('update');
      });
  };

  //Notificações de Sucesso!
  const notify = () => toast.success('Contatos cadastrados com sucesso!');

  return (
    <>
      <ToastContainer />
      <img
        alt=""
        style={{ marginLeft: 100, marginTop: 20 }}
        src="imagens/BR24.png"
      />
      <Flex paddingLeft="8">
        <Tabs variant="soft-rounded" colorScheme="primary">
          <TabList>
            <a href={redirectPost}>
              <Tab mt="4">Cadastro geral</Tab>
            </a>
            <a href={redirectPostCompanies}>
              <Tab ml="4" mt="4">
                Cadastro empresas
              </Tab>
            </a>
          </TabList>
        </Tabs>
      </Flex>

      <Flex
        width="100%"
        p="8"
        borderRadius={8}
        flexDirection="column"
        id="insert_form"
      >
        <Stack mt="2">
          Atualize contatos para a empresa abaixo:
          <FormControl>
            <FormLabel htmlFor="contato1">Nome do contato 1</FormLabel>
            <Input
              w="100%"
              name="name"
              id="contato1"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
              required="true"
              value={newName}
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sobrenome1">Sobrenome do contato 1</FormLabel>
            <Input
              w="100%"
              name="last_name"
              id="last_name"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
              required="true"
              value={newLast}
              onChange={(event) => {
                setNewLast(event.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="contato2">Nome do contato 2</FormLabel>
            <Input
              w="100%"
              name="name1"
              id="name1"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
              value={newName1}
              onChange={(event) => {
                setNewName1(event.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sobrenome2">Sobrenome do contato 2</FormLabel>
            <Input
              w="100%"
              name="last_name1"
              id="last_name1"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
              value={newLast1}
              onChange={(event) => {
                setNewLast1(event.target.value);
              }}
            />
          </FormControl>
        </Stack>

        <Flex flexDirection="column" mt='2'>
        <label fontSize='8' mt='2'>Escolha abaixo qual empresa você quer alterar: </label>
          {dados.map((cad) => (
            <Button
              border="none"
              w="22"
              size="md"
              colorScheme="blue"
              
              onClick={() => handleUpdate(cad.id)}
              key={cad.id}
              mt='0.5'
            >
              {cad.companies.title}
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
