import { FC, memo } from 'react';

import { Box, IconButton } from '@mui/material';

import { socialLinks } from '~/configurations/socialLinks';

import { styles } from './styles';

const SocialBlock: FC = () => (
  <Box sx={styles.root}>
    {socialLinks.map(({ title, Icon, link }) => (
      <IconButton key={title} href={link} rel='noopener noreferrer' target='_blank'>
        <Icon />
      </IconButton>
    ))}
  </Box>
);

export default memo(SocialBlock);
