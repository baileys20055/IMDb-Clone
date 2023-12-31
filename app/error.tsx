'use client';
import { useEffect } from 'react';
import React from 'react';

type Props = { error: Error; reset: any };

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong...</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
