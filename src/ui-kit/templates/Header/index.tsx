import { FC, memo, useCallback } from 'react';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { AppBar, Box, Container, IconButton } from '@mui/material';

import { useMedia } from '~/hooks/useMedia';
import { useRouter } from '~/hooks/useRouter';
import { useAppDispatch } from '~/store';
import { toggleBurgerMenu } from '~/store/UI';
import DarkModeSwitch from '~/ui-kit/atoms/DarkModeSwitch';
import Logo from '~/ui-kit/atoms/Logo';
import LogoMobile from '~/ui-kit/atoms/LogoMobile';

import NavBar from '../NavBar';
import { headerRootStyles, toolbarMobileStyles, toolbarStyles } from './styles';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isPortable } = useMedia();
  const toggleMenu = useCallback(() => dispatch(toggleBurgerMenu()), [dispatch]);
  const { goBack, canGoBack } = useRouter();

  return (
    <AppBar color='transparent' position='sticky' sx={headerRootStyles}>
      <Container maxWidth='lg' sx={toolbarStyles}>
        {isPortable ? (
          <>
            <Box sx={toolbarMobileStyles}>
              <Box sx={{ width: '40px' }}>
                {canGoBack && (
                  <IconButton onClick={goBack}>
                    <ArrowBackIosNewOutlinedIcon fontSize='inherit' />
                  </IconButton>
                )}
              </Box>
              <LogoMobile />
              <IconButton size='large' onClick={toggleMenu}>
                <MenuOpenOutlinedIcon fontSize='inherit' />
              </IconButton>
            </Box>
          </>
        ) : (
          <>
            <Logo />
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <NavBar />
              <DarkModeSwitch />
            </Box>
          </>
        )}
      </Container>
    </AppBar>
  );
};

export default memo(Header);
