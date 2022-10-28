import { SxProps } from '@mui/material';

export const rootStyles: SxProps = {
  height: '100%',
  p: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '50px',
};

export const textStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '&>*': {
    whiteSpace: 'nowrap',
  },
};
