import { FC, memo, useCallback, useMemo } from 'react';

import { Box, ButtonBase, Typography } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';

import {
  rootStyles,
  rootStylesSelected,
  selectedTitleStyles,
  textStyles,
  titleStyles,
} from './styles';

const NavBarItem: FC<IMenuListItem> = ({ pathname, primaryText, secondaryText, Icon }) => {
  const { goTo, getIsSelectedByParentRoute } = useRouter();

  const handleClick = useCallback(() => goTo(pathname), [goTo, pathname]);

  const isSelected = useMemo(
    () => getIsSelectedByParentRoute(pathname),
    [getIsSelectedByParentRoute, pathname],
  );

  return (
    <ButtonBase sx={isSelected ? rootStylesSelected : rootStyles} onClick={handleClick}>
      <Icon fontSize='inherit' />
      <Box sx={textStyles}>
        <Typography
          sx={isSelected ? selectedTitleStyles : titleStyles}
          variant='h6'
          variantMapping={{ h6: 'p' }}
        >
          {primaryText}
        </Typography>
        {secondaryText && (
          <Typography variant='body2' variantMapping={{ body2: 'p' }}>
            {secondaryText}
          </Typography>
        )}
      </Box>
    </ButtonBase>
  );
};

export default memo(NavBarItem);
