import { runApp, IAppConfig } from 'ice';
import { ConfigProvider } from '@alifd/next';
import NotFound from '@/components/NotFound';
import React from 'react';
import BasicLayout from './layouts/BasicLayout';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>,
  },
  router: {
    type: 'browser',
  },
  icestark: {
    Layout: BasicLayout,
    getApps: async () => {
      const apps = [
        {
          activePath: '/child1',
          title: '子应用1',
          // url: ['http://localhost:6602'],
          entry: 'http://localhost:6602',
          sandbox: true,
          loadScriptMode: 'import',
        },
        {
          activePath: '/child2',
          title: '子应用2',
          // url: ['http://localhost:6603'],
          entry: 'http://localhost:6603',
          sandbox: true,
          loadScriptMode: 'import',
        },
      ];
      return apps;
    },
    appRouter: {
      NotFoundComponent: NotFound,
    },
  },
};

runApp(appConfig);
