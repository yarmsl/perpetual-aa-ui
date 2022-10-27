import { FC, memo, useCallback } from 'react';

import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { AppBar, Box, Container, IconButton } from '@mui/material';

import { headerRootStyles, toolbarStyles } from './styles';
import { useMedia } from '~/hooks/useMedia';
import { useAppDispatch } from '~/store';
import { toggleBurgerMenu } from '~/store/UI';
import LogoMobile from '~/ui-kit/atoms/LogoMobile';
import RouteLocator from '~/ui-kit/atoms/RouteLocator';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isPortable } = useMedia();
  const toggleMenu = useCallback(() => dispatch(toggleBurgerMenu()), [dispatch]);

  return (
    <AppBar color='transparent' position='sticky' sx={headerRootStyles}>
      <Container maxWidth={false} sx={toolbarStyles}>
        {isPortable && (
          <>
            <IconButton size='large' onClick={toggleMenu}>
              <MenuOpenOutlinedIcon fontSize='inherit' />
            </IconButton>
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
              <LogoMobile />
            </Box>
          </>
        )}
        <RouteLocator />
      </Container>
    </AppBar>
  );
};

export default memo(Header);
