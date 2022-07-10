import { Button, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Sidebar } from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <Flex>
      <Heading>A Chakra Page</Heading>

      <Sidebar />
    </Flex>
  );
};

export default Home;
