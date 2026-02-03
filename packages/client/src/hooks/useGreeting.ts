import { useCallback, useEffect, useState } from 'react';

import { greetingApi } from '~/api';
import { Greeting } from '~/types';

interface UseGreetingResult {
  greeting: Greeting | null;
  isLoading: boolean;
  error: Error | null;
  refetch: (name?: string) => Promise<void>;
}

export function useGreeting(initialName?: string): UseGreetingResult {
  const [greeting, setGreeting] = useState<Greeting | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchGreeting = useCallback(async (name?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await greetingApi.getGreeting(name);
      setGreeting(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGreeting(initialName);
  }, [fetchGreeting, initialName]);

  return {
    greeting,
    isLoading,
    error,
    refetch: fetchGreeting,
  };
}
