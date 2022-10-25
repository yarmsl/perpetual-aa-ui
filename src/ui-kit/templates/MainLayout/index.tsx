import { FC, memo, Suspense } from 'react';

import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { styles } from './styles';
import Loading from '~/ui-kit/atoms/Loading/';
import Footer from '~/ui-kit/templates/Footer';

const MainLayout: FC = () => (
  <Container maxWidth={false} sx={styles.root} disableGutters>
    <Container component='main' maxWidth='lg' sx={styles.main} disableGutters>
      <Suspense fallback={<Loading fullscreen />}>
        <Outlet />
      </Suspense>
    </Container>
    <Footer />
  </Container>
);

export default memo(MainLayout);
