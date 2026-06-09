import React from 'react';
import { Search } from 'lucide-react';

export default function SearchInput({ value, onChange, placeholder = "Search dishes..." }) {
  return (
    <div className="relative w-full max-w-sm mx-auto md:mx-0">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-primary-gold/60" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-[#CBAA6A]/30 rounded-full leading-5 bg-black/40 text-primary-cream placeholder-primary-cream/40 focus:outline-none focus:bg-[#111] focus:ring-1 focus:ring-primary-gold focus:border-primary-gold sm:text-sm transition-colors duration-300"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
