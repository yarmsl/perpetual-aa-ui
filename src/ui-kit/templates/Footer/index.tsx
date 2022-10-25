import { FC, memo } from 'react';

import { Box, Link, Typography } from '@mui/material';

import { styles } from './styles';
import SocialBlock from '~/ui-kit/atoms/SocialBlock/';

const Footer: FC = () => (
  <Box component='footer' sx={styles.root}>
    <SocialBlock />
    <Box>
      <Typography sx={styles.copyright}>
        © 2022{' '}
        <Link href='https://obyte.org/' sx={styles.link} target='_blank'>
          Obyte.
        </Link>{' '}
        All Rights Reserved
      </Typography>
    </Box>
  </Box>
);
export default memo(Footer);
