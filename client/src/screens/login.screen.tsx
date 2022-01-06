import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { useEffect, FormEvent, useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks';
import { useLogin } from '../services/auth.api';
import { Location } from '../types';

export default function LoginPage() {
  const login = useLogin();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const location = useLocation() as Location;
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login.mutate(
      {
        data: form,
      },
      {
        onError: () => {
          setIsError(true);
        },
      },
    );
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({
      ...state,
      password: event.target.value,
    }));
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({
      ...state,
      email: event.target.value,
    }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Flex
      height="100vh"
      alignItems="center"
      width="full"
      bgColor="secondary.600"
      position="relative"
    >
      <Container>
        <Box
          bgColor="secondary.500"
          p="6"
          borderRadius="md"
          pt="7"
          zIndex="dropdown"
          boxShadow="0px 20px 60px rgba(0, 0, 0, 0.2)"
        >
          <Heading fontSize="xl" mb="6">
            Here you can login
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb="4">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                onChange={handleEmail}
                value={form.email}
                placeholder="email"
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                onChange={handlePassword}
                id="password"
                value={form.password}
                placeholder="password"
              />
            </FormControl>

            {isError && (
              <Text textColor="error">
                Email or password is not matched. Please try again
              </Text>
            )}

            <Button
              isFullWidth
              variant="solid"
              mt="3"
              type="submit"
              isLoading={login.isLoading}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </Flex>
  );
}
