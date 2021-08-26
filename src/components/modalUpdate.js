import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ModalUpdate() {
  const [dados, setDados] = useState([]);
  const [newName, setNewName] = useState('');
  const [newLast, setNewLast] = useState('');
  const [newName1, setNewName1] = useState('');
  const [newLast1, setNewLast1] = useState('');
  //   const [newCompany,setNewCompany]=useState('');
  //Função ATUALIZAR!
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        border="none"
        w="16"
        size="sm"
        colorScheme="blue"
        onClick={onOpen}
      >
        Atualizar
      </Button>
      
      <Modal   isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
       
          <ModalContent>
            <ModalHeader>Atualizar Cadastro</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Nome do contato 1</FormLabel>
                <Input
                  type="text"
                  placeholder="nome"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Sobrenome do contato 1</FormLabel>
                <Input
                  type="text"
                  placeholder="sobrenome"
                  onChange={(event) => {
                    setNewLast(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Nome do contato 2</FormLabel>
                <Input
                  type="text"
                  placeholder="nome"
                  onChange={(event) => {
                    setNewName1(event.target.value);
                  }}
                />
              </FormControl>
              {dados.map((c)=>(

             
              <FormControl key={c.id}>
                <FormLabel>Sobrenome do contato 2</FormLabel>
                <Input
                  type="text"
                  placeholder="sobrenome"
                  onChange={(event) => {
                    setNewLast1(event.target.value);
                  }}
                />
                <Button
                type="button"
                border="none"
                w="16"
                size="sm"
                colorScheme="white"
                onClick={() => handleUpdate(c.id)}
              ></Button>
              </FormControl>
               ))}
            </ModalBody>

            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        
      </Modal>
      
    </>
  );
}
export default ModalUpdate;
