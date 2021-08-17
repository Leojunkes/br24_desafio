import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Link,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const usersPost = 'http://localhost:3333/contacts';
  const companyPost = 'http://localhost:3333/companies';
  const redirectPost = 'http://localhost:3000/cadastro';
  const redirectPostCompanies = 'http://localhost:3000/companies';

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [last_name, setLastName] = useState('');
  const [last_name1, setLastName1] = useState('');
  const [companiesId, setCompaniesId] = useState('');

  const notify = () => toast.success('Empresa cadastrada com sucesso!');
  const notifyError = () => toast.error('Empresa não existe!');
  const notifyError1 = () => toast.error('Empresa ja cadastrada!');

  async function handleCreateNewCompany(e) {
    e.preventDefault();
    const data = { title, id };
    
    //window.location.href="http://localhost:3000/cadastro"
    setTitle('');

    axios.post(companyPost, data);
    
  }
  function handleCreateNewUsers(e) {
    e.preventDefault();
    const data = {
      name,
      name1,
      last_name,
      last_name1,
      companiesId,
      
    };
    setName('');
    setLastName('');
    setLastName1('');
    setName1('');
    axios.post(usersPost, data);
    alert('contatos salvo com sucesso!');
  }

  return (
    <div>
      <img
        alt=""
        style={{ marginLeft: 100, marginTop: 20 }}
        src="imagens/BR24.png"
      />
      <Flex paddingLeft="8">
      <Tabs variant="soft-rounded" colorScheme="primary">
  <TabList>
    <a href={redirectPost}><Tab mt='4'>Cadastro geral</Tab></a>
    <a href={redirectPostCompanies}><Tab ml='4' mt='4'>Cadastro empresas</Tab></a>
  </TabList>
  
</Tabs>
        {/* <a href={redirectPost}>cadastro</a>
        <a style={{ marginLeft: 20 }} href={redirectPostCompanies}>
          cadastroCompanies
        </a> */}
      </Flex>

      <Flex
        as="form"
        width="100%"
        p="8"
        borderRadius={8}
        flexDirection="column"
        // method="POST"
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
            w="20"
            size="md"
            colorScheme="blue"
            type="submit"
          >
            cadastrar
          </Button>
        </Flex>
      </Flex>

      <Flex mt="-100" w="100" h="100vh" align="center" justifyContent="center">
        <Flex
          as="form"
          width="100%"
          p="8"
          borderRadius={8}
          flexDirection="column"
          // method="POST"
          onSubmit={handleCreateNewUsers}
          id="insert_form"
        >
          <Stack mt="4">
            <FormControl>
              <FormLabel htmlFor="empresa">ID da empresa</FormLabel>
              <Input
                value={companiesId}
                onChange={(event) => {
                  setCompaniesId(event.target.value);
                }}
                name="companiesId"
                id="title"
                variant="filled"
                w="100%"
                type=""
                _hover={{ bgColor: 'gray.200' }}
                size="md"
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
            <Button
              border="none"
              w="20"
              size="md"
              colorScheme="blue"
              type="submit"
            >
              cadastrar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
