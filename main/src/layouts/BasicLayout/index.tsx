import React, { PropsWithChildren, useEffect } from 'react';
import { appHistory } from '@ice/stark-app';
import { event } from '@ice/stark-data';
import { usePersistFn } from 'ahooks';

export default ({ children }: PropsWithChildren<{}>) => {
  const onAppHistoryRequestChange = usePersistFn((payload: { method: 'push'; path: string }) => {
    console.log('apphistory', payload);

    appHistory.push('/child1');
  });

  useEffect(() => {
    event.on('appHistory', onAppHistoryRequestChange);
    return () => {
      event.off('appHistory', onAppHistoryRequestChange);
    };
  }, [onAppHistoryRequestChange]);

  return (
    <div>
      <div style={{ marginTop: '100px' }}>{children}</div>
    </div>
  );
};
