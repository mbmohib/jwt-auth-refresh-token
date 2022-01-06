import { Heading, Container } from '@chakra-ui/react';
import { useProtectedApi } from '../services/protected.api';
import { PreLoader } from '../components';

export default function Dashboard() {
  const { isLoading } = useProtectedApi();

  return (
    <PreLoader isLoading={isLoading}>
      <Container>
        <Heading mt="40vh">Congratulations! You are in!</Heading>
      </Container>
    </PreLoader>
  );
}
