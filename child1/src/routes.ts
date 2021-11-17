import { IRouterConfig } from 'ice';
import Home from '@/pages/Home';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Jump from './pages/Jump';

const routerConfig: IRouterConfig[] = [
  {
    path: '/test',
    component: Test1,
  },
  {
    path: '/jump',
    component: Jump,
  },
  {
    path: '/plan',
    children: [
      {
        path: '/test',
        component: Test2,
      },
    ],
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
