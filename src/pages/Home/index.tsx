import { FC } from 'react';

import { Box } from '@mui/material';

import HelmetTitle from '~/ui-kit/atoms/Meta/';
import Exchange from '~/ui-kit/organisms/Exchange';

const Home: FC = () => (
  <>
    <HelmetTitle title='Perpetual' />
    <Box sx={{ py: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Exchange />
    </Box>
  </>
);
export default Home;
