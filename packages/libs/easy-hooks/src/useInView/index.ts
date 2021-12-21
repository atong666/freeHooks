import { useEffect, useState } from 'react';
import { useForceUpdate } from '../useForceUpdate';

export function useInView() {
  const dispatch = useForceUpdate();
  const [bool, setBool] = useState(false);
  useEffect(() => {
    dispatch();
    setBool(true);
  }, []);
  return bool;
}

export const xx = useForceUpdate;
