import React from 'react';
import { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <div className="hundyhundy">
      <h1>{children}</h1>
      <hr />
    </div>
  );
};
