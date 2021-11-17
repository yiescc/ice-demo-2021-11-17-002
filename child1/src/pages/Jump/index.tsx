import { event } from '@ice/stark-data';
import { useEffect } from 'react';

function Jump() {
  useEffect(() => {
    console.log('jump');

    event.emit('appHistory');
  }, []);

  return <div>...</div>;
}

export default Jump;
