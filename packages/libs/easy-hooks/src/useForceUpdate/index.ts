import { useReducer } from 'react';

export function useForceUpdate() {
  const [, dispatch] = useReducer(() => Object.create(null), {});
  return dispatch;
}
