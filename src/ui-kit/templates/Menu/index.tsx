import { FC, lazy, memo, Suspense } from 'react';

import { useMedia } from '~/hooks/useMedia';
import Loading from '~/ui-kit/atoms/Loading';

const MenuMobile = lazy(() => import('./MenuMobile'));

const Menu: FC = () => {
  const { isPortable } = useMedia();

  if (isPortable)
    return (
      <Suspense fallback={<Loading fullscreen />}>
        <MenuMobile />
      </Suspense>
    );

  return null;
};

export default memo(Menu);
