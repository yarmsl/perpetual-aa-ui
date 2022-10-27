import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { createPageConf } from '~/configurations/tabsRouter';
import Family from '~/pages/Create/Family';
import Token from '~/pages/Create/Token';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import MainLayout from '~/ui-kit/templates/MainLayout';
import TabsLayout from '~/ui-kit/templates/TabsLayout';

const Router: FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} path='*'>
        <Route element={<Home />} path='' />
        <Route element={<TabsLayout pageConf={createPageConf} />} path='create'>
          <Route element={<Family />} index />
          <Route element={<Family />} path='family' />
          <Route element={<Token />} path='token' />
          <Route element={<NotFound />} path='*' />
        </Route>

        <Route element={<NotFound />} path='*' />
      </Route>
      <Route element={<NotFound />} path='*' />
    </Routes>
  );
};

export default Router;
