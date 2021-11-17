import React, { PropsWithChildren } from 'react';
import { appHistory } from '@ice/stark-app';

export default ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <button
        onClick={() => {
          appHistory.push('/child1');
        }}
      >
        child1
      </button>
      <button
        onClick={() => {
          appHistory.push('/child2');
        }}
      >
        child2
      </button>
      <div style={{ marginTop: '100px' }}>{children}</div>
    </div>
  );
};
