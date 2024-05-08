import React, { useState } from 'react';
import { Container, Text, VStack, Textarea, Button, Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const Index = () => {
  const [input, setInput] = useState('');
  const [tables, setTables] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const parseAndDisplayTables = () => {
    const rawTables = input.split('\n\n');
    const parsedTables = rawTables.map(table => table.split('\n').map(row => row.split(',')));
    setTables(parsedTables);
  };

  return (
    <Container centerContent maxW="container.xl" py={8}>
      <VStack spacing={4} w="full">
        <Text fontSize="2xl" mb={4}>Data Frame Splitter</Text>
        <Textarea
          placeholder="Paste your data frame here, separate tables with an empty line."
          value={input}
          onChange={handleInputChange}
          size="lg"
          height="200px"
        />
        <Button colorScheme="blue" onClick={parseAndDisplayTables}>Split and Display Tables</Button>
        {tables.map((table, index) => (
          <Box key={index} border="1px" borderColor="gray.200" p={4} mt={4} w="full">
            <Table variant="simple">
              <Thead>
                <Tr>{table[0].map((header, idx) => <Th key={idx}>{header}</Th>)}</Tr>
              </Thead>
              <Tbody>
                {table.slice(1).map((row, idx) => (
                  <Tr key={idx}>
                    {row.map((cell, index) => <Td key={index}>{cell}</Td>)}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;