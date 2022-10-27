import { SxProps } from '@mui/material';

export const menuItemTextStyles: SxProps = {
  '& .MuiListItemText-primary': {
    fontSize: '20px',
  },
  '& .MuiListItemText-secondary': {
    fontSize: '14px',
  },
};

export const menuItemRootStyles: SxProps = {
  width: '100%',
  minHeight: '58px',
  p: '1px 12px',
  borderRadius: 2,

  whiteSpace: 'nowrap',
};
