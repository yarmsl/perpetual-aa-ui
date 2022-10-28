import { FC, memo, useCallback } from 'react';

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';
import { useAppDispatch } from '~/store';
import { toggleBurgerMenu } from '~/store/UI';

import { menuItemRootStyles, menuItemTextStyles } from './styles';

const CreateItem: FC<IMenuListItem> = ({ pathname, primaryText, secondaryText, Icon }) => {
  const dispatch = useAppDispatch();
  const { goTo, getIsSelectedByParentRoute } = useRouter();

  const handleClick = useCallback(() => {
    goTo(pathname);
    dispatch(toggleBurgerMenu());
  }, [dispatch, goTo, pathname]);

  return (
    <ListItemButton
      selected={getIsSelectedByParentRoute(pathname)}
      sx={menuItemRootStyles}
      onClick={handleClick}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} sx={menuItemTextStyles} />
    </ListItemButton>
  );
};

export default memo(CreateItem);
