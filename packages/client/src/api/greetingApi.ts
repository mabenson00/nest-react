import { Greeting } from '~/types';

import { apiClient } from './client';

export const greetingApi = {
  getGreeting: (name?: string): Promise<Greeting> => {
    const query = name ? `?name=${encodeURIComponent(name)}` : '';
    return apiClient.get<Greeting>(`/greeting${query}`);
  },
};
