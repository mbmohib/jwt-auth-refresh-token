import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import userImage from '../assets/images/user-image.png';
import { useLogout } from '../services/auth.api';

export default function Header() {
  const logout = useLogout();

  return (
    <Box
      height="72px"
      position="fixed"
      width="100%"
      zIndex="docked"
      top="0"
      bg="secondary.600"
    >
      <Flex
        bg="secondary.500"
        alignItems="center"
        justifyContent="flex-end"
        px="2"
        height="64px"
      >
        <Flex alignItems="center">
          <Menu>
            <MenuButton ml="2">
              <Image width="40px" src={userImage} alt="user image profile" />
            </MenuButton>

            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={() => logout.mutate()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
