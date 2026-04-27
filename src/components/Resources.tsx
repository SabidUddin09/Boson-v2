/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Plus, 
  ExternalLink,
  Book,
  FileText,
  Link as LinkIcon,
  Tag
} from 'lucide-react';
import { cn } from '../lib/utils';

const RESOURCES = [
  {
    id: '1',
    title: 'Boson Style Guide v2',
    category: 'Style Guide',
    url: '#',
    type: 'Document',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: '2',
    title: 'Brand Assets Packet 2026',
    category: 'Brand Assets',
    url: '#',
    type: 'Archive',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    id: '3',
    title: 'Editorial Guidelines',
    category: 'Style Guide',
    url: '#',
    type: 'PDF',
    color: 'bg-amber-50 text-amber-600'
  },
  {
    id: '4',
    title: 'Main Science Repository',
    category: 'Common Link',
    url: '#',
    type: 'Link',
    color: 'bg-emerald-50 text-emerald-600'
  }
];

export default function Resources() {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
          <input 
            type="text" 
            placeholder="Search resources & brand assets..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-xs font-bold uppercase tracking-tight focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESOURCES.map(resource => (
          <div key={resource.id} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-md transition-all">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm", resource.color)}>
              {resource.type === 'Document' ? <FileText className="w-6 h-6" /> : <LinkIcon className="w-6 h-6" />}
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-cyan-600 transition-colors">{resource.title}</h3>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">{resource.category}</p>
            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{resource.type}</span>
              <button className="text-slate-200 group-hover:text-cyan-400 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-white transition-all bg-slate-50/50">
          <Plus className="w-8 h-8" />
          <span className="text-xs font-black uppercase tracking-widest">New Archive</span>
        </button>
      </div>
    </div>
  );
}
