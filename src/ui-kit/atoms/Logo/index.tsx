import { FC, memo } from 'react';

import { Box, ButtonBase, Typography } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';
import InfinityIcon from '~/ui-kit/icons/InfinityIcon';

import { rootStyles, textStyles } from './styles';

const Logo: FC = () => {
  const { goHome } = useRouter();

  return (
    <ButtonBase sx={rootStyles} onClick={goHome}>
      <InfinityIcon fontSize='inherit' />
      <Box sx={textStyles}>
        <Typography variant='h6' variantMapping={{ h6: 'h1' }}>
          Perpetual
        </Typography>
        <Typography variant='body2' variantMapping={{ body2: 'h2' }}>
          Autonomous Agent
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default memo(Logo);
