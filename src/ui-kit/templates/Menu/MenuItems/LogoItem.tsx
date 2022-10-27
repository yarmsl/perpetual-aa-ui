import { FC, memo } from 'react';

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { menuItemTextStyles } from './styles';
import { useRouter } from '~/hooks/useRouter';
import InfinityIcon from '~/ui-kit/icons/InfinityIcon';

const LogoItem: FC = () => {
  const { goHome } = useRouter();
  return (
    <ListItemButton sx={{ pl: '8px' }} onClick={goHome}>
      <ListItemIcon sx={{ fontSize: '50px' }}>
        <InfinityIcon fontSize='inherit' />
      </ListItemIcon>
      <ListItemText primary='Perpetual' secondary='Autonomous Agent' sx={menuItemTextStyles} />
    </ListItemButton>
  );
};

export default memo(LogoItem);
