import { FC, memo } from 'react';

import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

import { styles } from './styles';

const Loading: FC<ILoadingProps> = ({ fullscreen }) => {
  if (fullscreen)
    return (
      <Backdrop sx={styles.fullscreen} open>
        <CircularProgress />
        <Typography sx={styles.title}>Obyte</Typography>
      </Backdrop>
    );

  return (
    <Box sx={styles.common}>
      <CircularProgress />
      <Typography sx={styles.title}>Obyte</Typography>
    </Box>
  );
};

export default memo(Loading);
