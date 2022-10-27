import { FC, memo, Suspense } from 'react';

import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { rootStyles } from './styles';
import Loading from '~/ui-kit/atoms/Loading/';
import Footer from '~/ui-kit/templates/Footer';
import Header from '~/ui-kit/templates/Header';
import Menu from '~/ui-kit/templates/Menu';

const MainLayout: FC = () => (
  <Container maxWidth={false} sx={rootStyles} disableGutters>
    <Header />
    <Menu />
    <Container component='main' maxWidth={false}>
      <Suspense fallback={<Loading fullscreen />}>
        <Outlet />
      </Suspense>
    </Container>
    <Footer />
  </Container>
);
export default memo(MainLayout);
