'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

export default function Searchbox({}: Props) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  }

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
