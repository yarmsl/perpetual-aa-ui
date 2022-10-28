import { FC, memo } from 'react';

import { Box } from '@mui/material';

import { menuItems } from '~/configurations/menuItems';

import NavBarItem from './NavBarItem';
import { rootStyles } from './styles';

const NavBar: FC = () => {
  return (
    <Box component='nav' sx={rootStyles}>
      {menuItems.map((item) => (
        <NavBarItem key={item.pathname} {...item} />
      ))}
    </Box>
  );
};

export default memo(NavBar);
