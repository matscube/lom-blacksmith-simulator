import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useURLQuery() {
  const searchParams = useSearchParams();
  const updatedURLQuery = useCallback(
    (name: string, value: string | string[] | undefined) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === undefined) {
        params.delete(name);
      } else if (Array.isArray(value)) {
        params.delete(name);
        value.forEach((v) => {
          params.append(name, v);
        });
      } else {
        params.set(name, value);
      }

      const query = params.toString();
      return `?${query}`;
    },
    [searchParams],
  );
  return {
    updatedURLQuery,
  };
}
