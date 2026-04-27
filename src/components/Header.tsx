/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Bell, Menu, Activity } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export default function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <h2 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-tight truncate max-w-[150px] sm:max-w-none">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Global search..." 
            className="bg-transparent border-none text-[10px] font-bold text-slate-600 focus:outline-none w-32 lg:w-48 uppercase tracking-widest"
          />
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-2 text-slate-400 hover:text-cyan-500 hover:bg-cyan-50 rounded-xl transition-all relative">
            <Bell className="w-4 h-4 sm:w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="flex items-center gap-2 pl-1 sm:pl-2">
            <div className="text-right hidden sm:block">
              <p className="text-[9px] font-black text-slate-800 leading-none">SABID UDDIN</p>
              <p className="text-[7px] font-bold text-cyan-600 leading-none mt-1 uppercase tracking-widest">Active</p>
            </div>
            <div className="w-8 h-8 sm:w-10 h-10 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-[10px] sm:text-xs font-black text-slate-400 shadow-sm">
              SU
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
