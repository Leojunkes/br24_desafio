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
  const usersPost = 'http://localhost:3333/contacts';
  const companyPost = 'http://localhost:3333/companies';
  const redirectPost = 'http://localhost:3000/';
  const redirectPostCompanies = 'http://localhost:3000/companies';

  const capitalize = (str) => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  const [dados, setDados] = useState([]);

  useEffect(() => {
    const company = 'http://localhost:3333/companies';

    axios
      .get(company)
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        alert('ocorreu erro durante o get!');
      });
  }, []);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [last_name, setLastName] = useState('');
  const [last_name1, setLastName1] = useState('');
  const [companiesId, setCompaniesId] = useState('');

  //Notificações de Sucesso!
  const notify = () => toast.success('Empresa cadastrada com sucesso!');

  //Cadastrar nova empresa
  async function handleCreateNewCompany(e) {
    e.preventDefault();
    const data = { title, id };

    setTitle('');

    axios.post(companyPost, data);
    if (title) {
      return notify();
    }
  }
  //Cadastrar novos contatos para a empresa
  function handleCreateNewUsers(e) {
    e.preventDefault();
    const data = {
      name,
      name1,
      last_name,
      last_name1,
      companiesId,
    };
    setId('');
    setName('');
    setLastName('');
    setLastName1('');
    setName1('');
    axios.post(usersPost, data);
    notify();
    window.location.href = 'http://localhost:3000/';
  }

  return (
    <>
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
        as="form"
        width="100%"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleCreateNewCompany}
        id="insert_form"
      >
        <FormControl>
          <FormLabel htmlFor="empresa">Nome da empresa</FormLabel>
          <ToastContainer autoClose={8000} />
          <Input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            name="title"
            id="title"
            variant="filled"
            w="100%"
            type=""
            _hover={{ bgColor: 'gray.200' }}
            size="md"
            required="true"
          />
        </FormControl>
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

      <Flex
        as="form"
        width="100%"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleCreateNewUsers}
        id="insert_form"
      >
        <Stack mt="2">
          <FormControl>
            <FormLabel mt="-10" color="gray.700" htmlFor="empresa">
              Cadastre contatos para empresa abaixo:
            </FormLabel>

            <Select
              variant="outline"
              _hover={{ bgColor: 'gray.200' }}
              required="true"
              onChange={(e) => setCompaniesId(e.target.value)}
            >
              {dados.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.title}
                </option>
              ))}
            </Select>

            <Input
              value={companiesId}
              name="companiesId"
              id="title"
              variant="filled"
              w="100%"
              type=""
              _hover={{ bgColor: 'gray.200' }}
              size="md"
              readOnly
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email da empresa</FormLabel>
            <Input
              w="100%"
              name="email"
              id="email"
              type="email"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
            />
          </FormControl>
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
              value={name}
              onChange={(event) => {
                setName(event.target.value);
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
              value={last_name}
              onChange={(event) => {
                setLastName(event.target.value);
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
              value={name1}
              onChange={(event) => {
                setName1(event.target.value);
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
              value={last_name1}
              onChange={(event) => {
                setLastName1(event.target.value);
              }}
            />
          </FormControl>
        </Stack>
        <Flex mt="1">
          <a href="http://localhost:3000/">
            <Button
              border="none"
              w="22"
              size="md"
              colorScheme="blue"
              type="submit"
            >
              Cadastrar Contatos
            </Button>
          </a>
        </Flex>
      </Flex>
    </>
  );
}
