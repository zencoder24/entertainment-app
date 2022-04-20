import React from 'react';

const TrendingContainer = ({title, children}) => {
    return (
        <div>
            <div className="title px-4 py-2 text-2xl font-thin md:py-8 lg:py-10 xl:py-12 md:text-3xl lg:text-5xl">
            {title}
            </div>
            <div className='flex overflow-x-auto no-scrollbar flex-row'>
            {children}
            </div>
      </div>
    );
};

export default TrendingContainer;