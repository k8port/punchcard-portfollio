import React, { ReactNode } from 'react';

interface SlideProps {
    children: ReactNode;
}

export default function Slide({ children }: SlideProps) {
    return <div className="w-full h-full">{children}</div>;
}