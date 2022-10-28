import { FC, memo, Suspense, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Box, Paper, SxProps, Tab, Tabs } from '@mui/material';

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
    flexDirection: 'column',
  },
  tabs: {
    width: '100%',
    pl: { xs: '6px', sm: '8px' },
    pr: '8px',
    bgcolor: 'background.default',
    zIndex: 'appBar',
    top: '72px',
    position: 'sticky',
  },
  wrapper: {
    flexGrow: 1,
    width: '100%',
    p: '12px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default memo(TabsLayout);
