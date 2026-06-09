import React from 'react';
import { Search } from 'lucide-react';

export default function SearchInput({ value, onChange, placeholder = "Search dishes..." }) {
  return (
    <div className="relative w-full max-w-sm mx-auto md:mx-0">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-accent-gold/60" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-border-subtle rounded-full leading-5 bg-surface-card text-content-primary placeholder-content-secondary focus:outline-none focus:bg-surface-paper focus:ring-1 focus:ring-accent-gold focus:border-accent-gold sm:text-sm transition-colors duration-300"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
