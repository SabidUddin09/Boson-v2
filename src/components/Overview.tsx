/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Department } from '../types';
import { cn } from '../lib/utils';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';

const DEPT_STATS = [
  { name: 'Content Writing', tasks: 24, completed: 18, efficiency: 92, trend: 'up' },
  { name: 'Graphic Design', tasks: 15, completed: 12, efficiency: 85, trend: 'up' },
  { name: 'Technical', tasks: 8, completed: 7, efficiency: 95, trend: 'up' },
  { name: 'Editorial', tasks: 12, completed: 10, efficiency: 88, trend: 'down' },
  { name: 'Social Media', tasks: 30, completed: 25, efficiency: 90, trend: 'up' },
  { name: 'Video Editing', tasks: 10, completed: 6, efficiency: 75, trend: 'down' },
];

export default function Overview() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">Department Performance</h2>
            <button className="text-slate-400 hover:text-cyan-500">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Total Tasks</th>
                  <th className="px-6 py-4">Completion</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {DEPT_STATS.map((dept) => (
                  <tr key={dept.name} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">{dept.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 font-mono font-bold">{dept.tasks}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 w-40">
                        <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-cyan-400 rounded-full transition-all duration-1000" 
                            style={{ width: `${(dept.completed / dept.tasks) * 100}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-black text-slate-400">
                          {Math.round((dept.completed / dept.tasks) * 100)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-300 group-hover:text-cyan-500 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm bg-gradient-to-br from-white to-cyan-50/30">
            <p className="text-[10px] text-cyan-600 font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> Manager's Oversight
            </p>
            <div className="space-y-6">
              {[
                { name: 'Sabid', role: 'Executive Manager', score: 98 },
                { name: 'John', role: 'Lead Writer', score: 95 },
                { name: 'Emma', role: 'Graphic Designer', score: 92 },
              ].map((person, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-500 transition-all">
                      {person.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-800">{person.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{person.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-cyan-600 font-mono">{person.score}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cyan-500 p-6 rounded-2xl text-white shadow-lg shadow-cyan-100 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-black tracking-tight mb-2 uppercase">Overall Velocity</h3>
            <div className="text-5xl font-black mb-1">94%</div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Cycle efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
