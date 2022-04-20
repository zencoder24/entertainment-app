import React from 'react';

export default function MediaContainer({children, title}) {
  return (
    <div>
      <div className="title px-4 py-6 text-2xl font-thin md:py-8 lg:py-10 xl:py-12 md:text-3xl lg:text-5xl">
        {title}
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
