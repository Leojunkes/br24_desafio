import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';

export default function Home() {
  async function postUsers(e) {
    e.preventDefault();
    const user = {
      title:title,
      name:contato1
    }
    const res = await axios.post('http://localhost:3333/companies', { user });

res.data.json
  }
  return (
    <Flex w="100" h="100vh" align="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onClick={postUsers}
        onSubmit={postUsers}
      >
        <Stack mt="4">
          <FormControl>
            <FormLabel htmlFor="empresa">Nome da empresa</FormLabel>
            <Input
              name="title"
              id="title"
              variant="filled"
              focusBorderColor="pink.500"
              w="100%"
              type=""
              _hover={{ bgColor: 'gray.900' }}
              size="md"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email da empresa</FormLabel>
            <Input
              focusBorderColor="pink.500"
              w="100%"
              name="email"
              id="email"
              type="email"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="md"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="contato1">Nome do contato 1</FormLabel>
            <Input
              focusBorderColor="pink.500"
              w="100%"
              name="contato1"
              id="contato1"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="md"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sobrenome1">Sobrenome do contato 1</FormLabel>
            <Input
              focusBorderColor="pink.500"
              w="100%"
              name="last_name"
              id="last_name"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="md"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="contato2">Nome do contato 2</FormLabel>
            <Input
              focusBorderColor="pink.500"
              w="100%"
              name="name"
              id="name1"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="md"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sobrenome2">Sobrenome do contato 2</FormLabel>
            <Input
              focusBorderColor="pink.500"
              w="100%"
              name="last_name"
              id="last_name1"
              type="text"
              variant="filled"
              _hover={{ bgColor: 'gray.200' }}
              size="md"
            />
          </FormControl>
        </Stack>

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
      </Flex>
    </Flex>
  );
}
