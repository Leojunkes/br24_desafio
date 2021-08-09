import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Link,
} from '@chakra-ui/react';

export default function Home() {
  const usersPost = 'http://localhost:3333/contacts';
  const companyPost = 'http://localhost:3333/companies';
  const redirectPost = 'http://localhost:3000/cadastro';

  return (
    <div>
      <img style={{marginLeft:100, marginTop:20}} src="imagens/BR24.png" />
      <Flex mt="-14" w="100" h="100vh" align="center" justifyContent="center">
        <Flex
          as="form"
          width="100%"
          p="8"
          borderRadius={8}
          flexDirection="column"
          method="POST"
          action={companyPost}
          id="insert_form"
          
        >
          <Stack mt="4">
            <FormControl>
              <FormLabel htmlFor="empresa">Nome da empresa</FormLabel>
              <Input
                name="title"
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
              />
            </FormControl>
          </Stack>
<Link to="/">
<Button
            border="none"
            w="20"
            size="md"
            colorScheme="blue"
            type="submit"
            mt="6"
            
          >
            Submit
          </Button>
</Link>
          
        </Flex>
      </Flex>
    </div>
  );
}
