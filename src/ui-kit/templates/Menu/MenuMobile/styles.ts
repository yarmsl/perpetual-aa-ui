import { SxProps } from '@mui/material';

export const menuMobileStyles: SxProps = {
  width: { xs: '100vw', sm: '100%' },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  '&>*': {
    flexGrow: 'unset',
  },
};

export const navBoxStyles: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  p: '4px',
  gap: '4px',
};
