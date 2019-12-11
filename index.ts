import * as React from 'react';

export default function useWillMount<T extends any>(callback: () => T): T {
  return React.useMemo(() => {
    return callback();
  }, []);
}
