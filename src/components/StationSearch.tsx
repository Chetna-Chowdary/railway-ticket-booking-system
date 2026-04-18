import React, { useState } from 'react';
import { Search, MapPin, Calendar, CreditCard, ArrowRightLeft } from 'lucide-react';
import { STATIONS } from '../constants';
import { SearchParams } from '../types';

interface StationSearchProps {
  onSearch: (params: SearchParams) => void;
}

export default function StationSearch({ onSearch }: StationSearchProps) {
  const [params, setParams] = useState<SearchParams>({
    from: STATIONS[0].code,
    to: STATIONS[1].code,
    date: new Date().toISOString().split('T')[0],
    class: 'All Classes',
  });

  const handleSwap = () => {
    setParams(prev => ({ ...prev, from: prev.to, to: prev.from }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(params);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 items-end">
          {/* From Station */}
          <div className="flex flex-col gap-2 flex-1 w-full">
            <label className="text-[11px] font-bold text-text-muted uppercase">From</label>
            <select
              className="w-full p-3 border border-border-minimal rounded bg-bg-gray text-sm outline-none cursor-pointer"
              value={params.from}
              onChange={(e) => setParams({ ...params, from: e.target.value })}
            >
              {STATIONS.map((s) => (
                <option key={s.id} value={s.code}>{s.name} - {s.code}</option>
              ))}
            </select>
          </div>

          <button 
            type="button"
            onClick={handleSwap}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors mb-1 hidden lg:flex shrink-0"
          >
            <ArrowRightLeft className="w-4 h-4 text-irctc-blue" />
          </button>

          {/* To Station */}
          <div className="flex flex-col gap-2 flex-1 w-full">
            <label className="text-[11px] font-bold text-text-muted uppercase">To</label>
            <select
              className="w-full p-3 border border-border-minimal rounded bg-bg-gray text-sm outline-none cursor-pointer"
              value={params.to}
              onChange={(e) => setParams({ ...params, to: e.target.value })}
            >
              {STATIONS.map((s) => (
                <option key={s.id} value={s.code}>{s.name} - {s.code}</option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="flex flex-col gap-2 flex-1 w-full">
            <label className="text-[11px] font-bold text-text-muted uppercase">Date of Journey</label>
            <input
              type="date"
              className="w-full p-3 border border-border-minimal rounded bg-bg-gray text-sm outline-none cursor-pointer"
              value={params.date}
              onChange={(e) => setParams({ ...params, date: e.target.value })}
            />
          </div>

          {/* Class Selection */}
          <div className="flex flex-col gap-2 flex-1 w-full">
            <label className="text-[11px] font-bold text-text-muted uppercase">Class</label>
            <select
               className="w-full p-3 border border-border-minimal rounded bg-bg-gray text-sm outline-none cursor-pointer"
               value={params.class}
               onChange={(e) => setParams({ ...params, class: e.target.value })}
            >
              <option>All Classes</option>
              <option>Sleeper (SL)</option>
              <option>AC 3 Tier (3A)</option>
              <option>AC 2 Tier (2A)</option>
              <option>AC First Class (1A)</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-irctc-orange text-white px-[30px] rounded h-11 font-bold uppercase cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap lg:shrink-0"
          >
            Modify Search
          </button>
        </form>
      </div>
    </div>
  );
}
