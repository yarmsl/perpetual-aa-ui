import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import HelmetTitle from '~/ui-kit/atoms/Meta';

const NotFound = (): JSX.Element => {
  const nav = useNavigate();

  const goHome = useCallback(() => nav('/'), [nav]);

  return (
    <>
      <HelmetTitle title='404' />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ m: '20px 0' }} variant='h3'>
          There is no such page yet
        </Typography>
        <Button color='secondary' size='large' variant='contained' onClick={goHome}>
          back to safe
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
