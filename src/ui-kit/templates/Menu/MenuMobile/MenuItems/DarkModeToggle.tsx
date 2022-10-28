import { FC, memo, useCallback } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { useAppDispatch, useAppSelector } from '~/store';
import { darkModeSelector, toggleDarkMode } from '~/store/UI';

import { menuItemTextStyles } from './styles';

const DarkModeToggle: FC = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(darkModeSelector);

  const handleToggleMode = useCallback(() => dispatch(toggleDarkMode()), [dispatch]);

  return (
    <ListItemButton sx={{ pl: '21px' }} onClick={handleToggleMode}>
      <ListItemIcon>{darkMode ? <DarkModeIcon /> : <LightModeIcon />}</ListItemIcon>
      <ListItemText primary={darkMode ? 'Dark Mode' : 'Light Mode'} sx={menuItemTextStyles} />
    </ListItemButton>
  );
};

export default memo(DarkModeToggle);
