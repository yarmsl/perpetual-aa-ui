import { FC, memo } from 'react';

import { Box, Typography } from '@mui/material';

import InfinityIcon from '~/ui-kit/icons/InfinityIcon';

const LogoMobile: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '50px',
        position: 'relative',
      }}
    >
      <InfinityIcon fontSize='inherit' />
      <Typography fontSize='10px' sx={{ position: 'absolute', top: '32px' }}>
        Perpetual
      </Typography>
    </Box>
  );
};

export default memo(LogoMobile);
