import { SxProps } from '@mui/material';

export const menuDesktopStyles: SxProps = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: { xs: '66px', xl: '280px' },
  height: '100%',
  zIndex: 'drawer',
  transition: 'width 200ms ease-in-out',
  boxShadow: 7,
  overflow: 'hidden',
  '&>*': {
    flexGrow: 'unset',
  },
  '&:hover': {
    width: '280px',
  },
};

export const menuBoxStyles: SxProps = {
  width: '100%',
  height: 'calc(100% - 72px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};

export const navBoxStyles: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  p: '4px',
  gap: '4px',
};
