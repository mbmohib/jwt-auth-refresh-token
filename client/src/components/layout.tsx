import { Box } from '@chakra-ui/layout';

import { Header } from '.';
import { useAuth } from '../hooks';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  return (
    <Box>
      {isAuthenticated && <Header />}
      <Box ml="60px" mt="72px">
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
