import { FC, memo } from 'react';

import { Typography } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';

const RouteLocator: FC = () => {
  const { selectedParentRouteTitle } = useRouter();

  return <Typography variant='h6'>{selectedParentRouteTitle}</Typography>;
};

export default memo(RouteLocator);
