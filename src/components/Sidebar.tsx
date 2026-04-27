/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LayoutDashboard, 
  Kanban, 
  Calendar as CalendarIcon, 
  BookOpen, 
  BarChart3,
  PenTool,
  Code,
  Palette,
  Share2,
  Megaphone,
  Users,
  Video,
  Settings,
  ShieldCheck,
  X,
  Activity
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Department } from '@/types';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const departments: { name: Department; icon: any }[] = [
  { name: 'Content Writing', icon: PenTool },
  { name: 'Editorial', icon: BookOpen },
  { name: 'Technical', icon: Code },
  { name: 'Graphic Design', icon: Palette },
  { name: 'Social Media', icon: Share2 },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Coordination', icon: Users },
  { name: 'Event Management', icon: CalendarIcon },
  { name: 'Video Editing', icon: Video },
  { name: 'Executive Management', icon: ShieldCheck },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col overflow-hidden shadow-2xl lg:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-cyan-400 rounded-xl flex items-center justify-center transform rotate-3 shadow-lg shadow-cyan-100">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight uppercase text-slate-800">
              Boson
            </span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-3">Systems</div>
          <NavLink
            to="/"
            onClick={() => onClose()}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-tight",
                isActive 
                  ? "bg-cyan-500 text-white shadow-xl shadow-cyan-100" 
                  : "text-slate-500 hover:bg-slate-50"
              )
            }
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="/pipeline"
            onClick={() => onClose()}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-tight",
                isActive 
                  ? "bg-cyan-500 text-white shadow-xl shadow-cyan-100" 
                  : "text-slate-500 hover:bg-slate-50"
              )
            }
          >
            <Kanban className="w-4 h-4" />
            Pipeline
          </NavLink>
          <NavLink
            to="/calendar"
            onClick={() => onClose()}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-tight",
                isActive 
                  ? "bg-cyan-500 text-white shadow-xl shadow-cyan-100" 
                  : "text-slate-500 hover:bg-slate-50"
              )
            }
          >
            <CalendarIcon className="w-4 h-4" />
            Calendar
          </NavLink>

          <div className="mt-8 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-3 text-center border-b border-slate-50 pb-2">Departments</div>
          <div className="grid grid-cols-1 gap-1">
            {departments.map((dept) => (
              <NavLink
                key={dept.name}
                to={`/dept/${dept.name.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => onClose()}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-[10px] font-bold transition-all uppercase tracking-tighter",
                    isActive 
                      ? "bg-cyan-50 text-cyan-700 border border-cyan-100" 
                      : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  )
                }
              >
                <dept.icon className="w-3.5 h-3.5" />
                {dept.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-8 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-3">Management</div>
          <NavLink
            to="/resources"
            onClick={() => onClose()}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-tight",
                isActive 
                  ? "bg-cyan-500 text-white shadow-xl shadow-cyan-100" 
                  : "text-slate-500 hover:bg-slate-50"
              )
            }
          >
            <BookOpen className="w-4 h-4" />
            Resources
          </NavLink>
          <NavLink
            to="/overview"
            onClick={() => onClose()}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-tight",
                isActive 
                  ? "bg-cyan-500 text-white shadow-xl shadow-cyan-100" 
                  : "text-slate-500 hover:bg-slate-50"
              )
            }
          >
            <BarChart3 className="w-4 h-4" />
            Performance
          </NavLink>
        </nav>

        <div className="p-4 mt-auto border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3 p-2 rounded-2xl bg-white border border-slate-100">
            <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-xs font-black text-cyan-600 uppercase">
              SU
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-slate-800 uppercase tracking-tighter leading-none">Sabid Uddin</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Manager</p>
            </div>
            <button className="p-2 text-slate-300 hover:text-cyan-500 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
