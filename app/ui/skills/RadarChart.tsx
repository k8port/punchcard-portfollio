'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ChartComponent = dynamic(
  () => import('./RadarChartInner').then(mod => mod.default),
  { loading: () => null }
);

interface RadarChartProps {
  data: Array<{ skill: string; value: number }>;
}

const RadarChart = (props: RadarChartProps) => (
  <div className="w-full h-64">
    <Suspense fallback={<div className="w-full h-64 bg-offwhite/80 animate-pulse rounded-lg" />}>
      <ChartComponent {...props} />
    </Suspense>
  </div>
);

export default RadarChart;