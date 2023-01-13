import React from 'react';

export const Label = ({ children, info }) => {
   return (
      <label>
         {children} {info}{' '}
      </label>
   );
};
