import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { menuItems } from '~/configurations/menuItems';
import { getUrlParamByPosition } from '~/helpers/url';

interface useRouterOutputInterface {
  /**
   * Title of current route
   */
  selectedParentRouteTitle: string;
  /**
   * Get isSelected flag
   * @param pathname - parent path
   */
  getIsSelectedByParentRoute: (pathname: string) => boolean;
  /**
   * Ability to go back flag
   */
  canGoBack: boolean;
  /**
   * Navigate to pathname
   * @param pathname - path to page
   */
  goTo: (pathname: string) => void;
  /** Navigate to home page */
  goHome: () => void;
  /** Navigate to previous page */
  goBack: () => void;
}

export const useRouter = (): useRouterOutputInterface => {
  const navTo = useNavigate();
  const loc = useLocation();

  const selectedParentRouteTitle = useMemo(
    () =>
      menuItems.find(({ pathname }) => pathname === getUrlParamByPosition(loc.pathname, 1))
        ?.primaryText || 'Home',
    [loc.pathname],
  );

  const getIsSelectedByParentRoute = useCallback(
    (pathname: string) => getUrlParamByPosition(loc.pathname, 1) === pathname,
    [loc.pathname],
  );

  const canGoBack = useMemo(() => loc.pathname !== '/', [loc.pathname]);
  const goTo = useCallback((pathname: string) => navTo(pathname), [navTo]);
  const goHome = useCallback(() => navTo('/'), [navTo]);
  const goBack = useCallback(() => navTo(-1), [navTo]);

  return {
    selectedParentRouteTitle,
    getIsSelectedByParentRoute,
    canGoBack,
    goTo,
    goHome,
    goBack,
  };
};
