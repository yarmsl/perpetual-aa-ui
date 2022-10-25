import { FC, memo } from 'react';

import HelmetTitle from '~/ui-kit/atoms/Meta/';

const Home: FC = () => (
  <>
    <HelmetTitle title='Obyte | Autonomous Agents Statistics' />
    <h1>HOME</h1>
  </>
);
export default memo(Home);
