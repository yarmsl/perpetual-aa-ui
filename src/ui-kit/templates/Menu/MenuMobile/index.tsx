import { FC, memo, useCallback } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import { List, SwipeableDrawer, Box } from '@mui/material';

import { menuItems } from '~/configurations/menuItems';
import { useAppDispatch, useAppSelector } from '~/store';
import { isBurgerMenuOpenSelector, toggleBurgerMenu } from '~/store/UI';

import DarkModeToggle from './MenuItems/DarkModeToggle';
import MenuListItem from './MenuItems/MenuListItem';
import { menuMobileStyles, navBoxStyles } from './styles';

const MenuMobile: FC = () => {
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const dispatch = useAppDispatch();
  const isBurgerMenuOpen = useAppSelector(isBurgerMenuOpenSelector);
  const toggleMenu = useCallback(() => dispatch(toggleBurgerMenu()), [dispatch]);
  return (
    <SwipeableDrawer
      anchor='right'
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={isBurgerMenuOpen}
      onClose={toggleMenu}
      onOpen={toggleMenu}
    >
      <List component='menu' sx={menuMobileStyles}>
        <Box component='nav' sx={navBoxStyles}>
          <MenuListItem Icon={HomeIcon} pathname='' primaryText='Home' />
          {menuItems.map((item) => (
            <MenuListItem key={item.pathname} {...item} />
          ))}
        </Box>
        <Box>
          <DarkModeToggle />
        </Box>
      </List>
    </SwipeableDrawer>
  );
};

export default memo(MenuMobile);
