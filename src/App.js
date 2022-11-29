import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Card from "./components/Card"


export default function App() {
  const [users, setUsers] = useState([]);
  console.log(users)

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider resetCSS>
      <h1>Me apague quando for iniciar!</h1>

      <Flex gap={"16px"}
        wrap={"wrap"}>
      {users && 
      users.map((user)=>{
        return <Card user={user} key = {user.id}/>
      })}
      </Flex>
       
    </ChakraProvider>
  );
}
