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

  const [newCompany, setNewCompany] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    const users = 'http://localhost:3333/companies';
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
      .put('http://localhost:3333/putCompanies/' + id, {
        title: newCompany,
        email: newEmail,
        
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
            <FormLabel htmlFor="contato1">Nome da Empresa</FormLabel>
            <Input
              w="100%"
              name="name"
              id="contato1"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
              
              value={newCompany}
              onChange={(event) => {
                setNewCompany(event.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sobrenome1">Email</FormLabel>
            <Input
              w="100%"
              name="last_name"
              id="last_name"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
              
              value={newEmail}
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
            />
          </FormControl>
        </Stack>

        <Flex flexDirection="column" mt="2">
          <label fontSize="8" mt="2">
            Escolha abaixo qual empresa você quer alterar:{' '}
          </label>
          {dados.map((cad) => (
            <Button
              border="none"
              w="22"
              size="md"
              colorScheme="blue"
              onClick={() => handleUpdate(cad.id)}
              key={cad.id}
              mt="0.5"
            >
              {cad.title}
            </Button>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
