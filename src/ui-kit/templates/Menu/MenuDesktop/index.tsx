import { FC, memo } from 'react';

import { Box, Divider, List } from '@mui/material';

import DarkModeToggle from '../MenuItems/DarkModeToggle';
import LogoItem from '../MenuItems/LogoItem';
import MenuListItem from '../MenuItems/MenuListItem';
import { menuDesktopStyles, menuBoxStyles, navBoxStyles } from './styles';
import { menuItems } from '~/configurations/menuItems';

const MenuDesktop: FC = () => {
  return (
    <List component='menu' sx={menuDesktopStyles} disablePadding>
      <LogoItem />
      <Divider />
      <Box sx={menuBoxStyles}>
        <Box sx={navBoxStyles}>
          {menuItems.map((item) => (
            <MenuListItem key={item.pathname} {...item} />
          ))}
        </Box>
        <Box>
          <DarkModeToggle />
        </Box>
      </Box>
    </List>
  );
};

export default memo(MenuDesktop);
