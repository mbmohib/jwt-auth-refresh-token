import { ChakraProvider } from '@chakra-ui/react';
import { render as rtlRender } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from 'react-router-dom';

import theme from '../styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function render(
  ui: React.ReactElement,
  {
    client = queryClient,
    rtlOptions = {},
  }: { client?: QueryClient; rtlOptions?: object } = {},
) {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    );
  };

  return { ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }) };
}

export function renderWithRouter(
  ui: React.ReactElement,
  {
    route = '/',
    client = queryClient,
    rtlOptions = {},
  }: {
    route?: string;
    client?: QueryClient;
    rtlOptions?: object;
  } = {},
) {
  const history = createMemoryHistory({ initialEntries: [route] });

  const Wrapper: React.FC = ({ children }) => {
    return (
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <Router location={history.location} navigator={history}>
            {children}
          </Router>
        </ChakraProvider>
      </QueryClientProvider>
    );
  };

  return { ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }), history };
}

export function createClientWrapper() {
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export const userEvent = fireEvent;
