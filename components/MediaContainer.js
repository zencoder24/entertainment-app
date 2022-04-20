import React from 'react';

export default function MediaContainer({children}) {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3">{children}</div>
  );
}
