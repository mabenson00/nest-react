import React, { FC, useEffect, useState } from 'react';

import { Dictionary } from '@nest-react/domain';

import { useGreeting } from '~/hooks';
import { checkServerVersion } from '~/utils';

export const App: FC<unknown> = () => {
  const [name, setName] = useState('');
  const { greeting, isLoading, error, refetch } = useGreeting();

  useEffect(() => {
    checkServerVersion();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch(name || undefined);
  };

  const dictExample: Dictionary<number> = {
    first: 1,
    second: 2,
  };

  return (
    <>
      <div>
        Here we use a <code>Dictionary&lt;number&gt;</code> interface from the{' '}
        <code>@nest-react/domain</code> package:
        <pre>{JSON.stringify(dictExample)}</pre>
      </div>

      <div>
        <h3>Greeting API Example</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Get Greeting</button>
        </form>

        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        {greeting && (
          <div>
            <p>
              <strong>Message:</strong> {greeting.message}
            </p>
            <p>
              <strong>Timestamp:</strong> {greeting.timestamp}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
