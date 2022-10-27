import { FC, memo, useCallback } from 'react';

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { menuItemRootStyles, menuItemTextStyles } from './styles';
import { useMedia } from '~/hooks/useMedia';
import { useRouter } from '~/hooks/useRouter';
import { useAppDispatch } from '~/store';
import { toggleBurgerMenu } from '~/store/UI';

const CreateItem: FC<IMenuListItem> = ({ pathname, primaryText, secondaryText, Icon }) => {
  const dispatch = useAppDispatch();
  const { goTo, getIsSelectedByParentRoute } = useRouter();
  const { isPortable } = useMedia();

  const handleClick = useCallback(() => {
    goTo(pathname);
    if (isPortable) dispatch(toggleBurgerMenu());
  }, [dispatch, goTo, isPortable, pathname]);

  return (
    <ListItemButton
      selected={getIsSelectedByParentRoute(pathname)}
      sx={menuItemRootStyles}
      onClick={handleClick}
    >
      <ListItemIcon>
        <Icon fontSize='large' />
      </ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} sx={menuItemTextStyles} />
    </ListItemButton>
  );
};

export default memo(CreateItem);
