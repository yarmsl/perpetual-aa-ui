import { FC, memo, Suspense, useMemo } from 'react';

import { Box, Paper, SxProps, Tab, Tabs } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { getUrlParamByPosition } from '~/helpers/url';
import Loading from '~/ui-kit/atoms/Loading';

const TabsLayout: FC<ITabsLayoutProps> = ({ pageConf }) => {
  const nav = useNavigate();
  const loc = useLocation();

  const tabIndex = useMemo(() => {
    const i = pageConf.map((page) => page.path).indexOf(getUrlParamByPosition(loc.pathname, -1));
    return i < 0 ? 0 : i;
  }, [loc.pathname, pageConf]);

  return (
    <Box sx={styles.root}>
      <Tabs sx={styles.tabs} value={tabIndex} variant='scrollable'>
        {pageConf.map((page) => {
          return <Tab key={page.title} label={page.title} onClick={() => nav(page.path)} />;
        })}
      </Tabs>

      <Paper sx={styles.wrapper}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Paper>
    </Box>
  );
};

const styles: Record<string, SxProps> = {
  root: {
    flexGrow: 1,
    width: '100%',
    minHeight: '100%',
    display: 'flex',
  },
  tabs: {
    width: '100%',
    pl: { xs: '20px', sm: '28px', md: '96px', xl: '310px' },
    pr: '24px',
    position: 'fixed',
    bgcolor: 'background.default',
    zIndex: 'appBar',
    left: 0,
    transition: 'box-shadow 250ms ease-in-out',
  },
  wrapper: {
    flexGrow: 1,
    width: '100%',
    p: '12px',
    mt: '56px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default memo(TabsLayout);
