import React from 'react';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40  z-20">
      <div className="relative flex flex-col">
        <div className="relative w-32 h-32 ">
          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-blue-400 border-b-blue-400 animate-spin" style={{animationDuration: '3s'}} />
          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-blue-400 animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-blue-400/5 animate-pulse rounded-full blur-sm" />
      </div>
    </div>
  );
}

export default Loader;
