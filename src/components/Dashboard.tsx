/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp 
} from 'lucide-react';

const velocityData = [
  { name: 'Mon', articles: 4, videos: 2 },
  { name: 'Tue', articles: 6, videos: 3 },
  { name: 'Wed', articles: 5, videos: 5 },
  { name: 'Thu', articles: 8, videos: 4 },
  { name: 'Fri', articles: 7, videos: 6 },
  { name: 'Sat', articles: 3, videos: 2 },
  { name: 'Sun', articles: 2, videos: 1 },
];

const StatCard = ({ title, value, subtext, progress, color }: any) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{title}</p>
    <p className="text-3xl font-black text-slate-800 mt-1">{value}</p>
    {progress !== undefined ? (
      <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={cn("h-full transition-all duration-1000", color)} style={{ width: `${progress}%` }}></div>
      </div>
    ) : (
      <p className="text-[10px] text-cyan-600 mt-2 font-bold uppercase tracking-tight">{subtext}</p>
    )}
  </div>
);

import { cn } from '../lib/utils';

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Active Projects" 
          value="24" 
          progress={75}
          color="bg-cyan-400" 
        />
        <StatCard 
          title="Review Pending" 
          value="08" 
          subtext="Critical priority: 3" 
        />
        <StatCard 
          title="Upcoming Events" 
          value="12" 
          subtext="Next: Sci-Olympiad '26" 
        />
        <StatCard 
          title="Team Velocity" 
          value="92%" 
          subtext="Weekly target reached" 
          color="bg-gradient-to-br from-white to-cyan-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Pipeline Velocity</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={velocityData}>
                <defs>
                  <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: '1px solid #e2e8f0', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    fontSize: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="articles" 
                  stroke="#22d3ee" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorVelocity)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-slate-700 mb-6 flex items-center gap-2 underline decoration-cyan-400 underline-offset-4">
            Upcoming Cycles
          </h3>
          <div className="space-y-6 flex-1">
            {[
              { date: 'MAY 12', title: 'Space Science Series', dept: 'Technical' },
              { date: 'MAY 15', title: 'Regional Olympiad', dept: 'Events' },
              { date: 'MAY 20', title: 'Style Guide Final', dept: 'Graphics' }
            ].map((event, i) => (
              <div key={i} className="flex gap-4 items-center group cursor-pointer">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors">
                  <span className="text-[8px] font-bold text-slate-400 leading-none">{event.date.split(' ')[0]}</span>
                  <span className="text-sm font-black text-slate-800 leading-tight">{event.date.split(' ')[1]}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">{event.title}</p>
                  <p className="text-[10px] text-slate-400 font-medium">Coordination: {event.dept} Team</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
            <p className="text-[10px] text-cyan-600 font-bold uppercase mb-1">Manager's Quick Note</p>
            <p className="text-xs text-cyan-800 leading-relaxed font-medium">
              Review the Q2 distribution strategy with the Social Media team by Friday EOD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
