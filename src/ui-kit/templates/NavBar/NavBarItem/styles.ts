import { SxProps } from '@mui/material';

export const rootStyles: SxProps = {
  height: '100%',
  p: '5px 10px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '22px',
  gap: '10px',
  transition: 'all 200ms ease-in-out',
};

export const textStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '&>*': {
    whiteSpace: 'nowrap',
  },
};

export const titleStyles: SxProps = {
  fontWeight: 300,
};

export const selectedTitleStyles: SxProps = {
  fontWeight: 500,
};

export const rootStylesSelected: SxProps = {
  ...rootStyles,
  fontSize: '32px',
};
