/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Filter
} from 'lucide-react';
import { cn } from '../lib/utils';

const EVENTS = [
  {
    id: '1',
    title: 'Physics Olympiad 2026',
    type: 'Olympiad',
    date: '2026-05-15',
    time: '09:00 AM',
    location: 'Dhaka University',
    department: 'Event Management'
  },
  {
    id: '2',
    title: 'Science Writing Workshop',
    type: 'Workshop',
    date: '2026-05-20',
    time: '02:00 PM',
    location: 'Online (Zoom)',
    department: 'Content Writing'
  },
  {
    id: '3',
    title: 'Brand Assets Launch',
    type: 'Internal',
    date: '2026-05-10',
    time: '11:00 AM',
    location: 'Office Room 4',
    department: 'Graphic Design'
  }
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const days = [];
  for (let i = 0; i < firstDayOfMonth(year, month); i++) {
    days.push(<div key={`empty-${i}`} className="h-32 border-b border-r border-slate-100 bg-slate-50/20" />);
  }

  for (let d = 1; d <= daysInMonth(year, month); d++) {
    const isToday = new Date().toDateString() === new Date(year, month, d).toDateString();
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayEvents = EVENTS.filter(e => e.date === dateStr);

    days.push(
      <div key={d} className={cn(
        "h-32 border-b border-r border-slate-100 p-3 group transition-colors hover:bg-cyan-50/10",
        isToday && "bg-cyan-50/20"
      )}>
        <div className="flex justify-between items-center mb-2">
          <span className={cn(
            "text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-lg border transition-all",
            isToday ? "bg-cyan-500 text-white border-cyan-400 shadow-md shadow-cyan-100" : "text-slate-400 border-transparent hover:border-slate-100"
          )}>
            {d}
          </span>
        </div>
        <div className="space-y-1">
          {dayEvents.map(event => (
            <div 
              key={event.id}
              className="text-[9px] font-black p-1.5 rounded-lg bg-white border border-slate-100 text-slate-700 truncate shadow-sm group-hover:border-cyan-200"
              title={event.title}
            >
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block mr-1"></span>
              {event.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <button 
            onClick={prevMonth}
            className="p-1.5 hover:bg-slate-50 rounded-lg transition-colors text-slate-400"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[10px] font-black text-slate-800 px-4 min-w-[120px] text-center uppercase tracking-widest">
            {monthName} {year}
          </span>
          <button 
            onClick={nextMonth}
            className="p-1.5 hover:bg-slate-50 rounded-lg transition-colors text-slate-400"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        <div className="grid grid-cols-7 border-b border-slate-100">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="py-3 text-center text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 flex-1 overflow-y-auto">
          {days}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EVENTS.slice(0, 3).map(event => (
          <div key={event.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 group hover:border-cyan-400 transition-all">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors">
              <span className="text-[8px] font-bold text-slate-400 leading-none">{event.date.split('-')[1]}</span>
              <span className="text-sm font-black text-slate-800 leading-tight">{event.date.split('-')[2]}</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">{event.title}</h4>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase">
                <Clock className="w-3 h-3" />
                {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
