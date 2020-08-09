import * as React from 'react';

export function useWillMount<T extends any>(callback: () => T): T {
  const ref = React.useRef<{ value: T }>();

  if (!ref.current) {
    ref.current = {
      value: callback(),
    };
  }
  return ref.current.value;
}

export default useWillMount;
