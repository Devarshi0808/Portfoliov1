'use client';
import { useEffect } from 'react';

import useFluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    // The useFluidCursor hook runs immediately when called
    useFluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0">
      <canvas id="fluid" className="h-screen w-screen" />
    </div>
  );
};
export default FluidCursor;
