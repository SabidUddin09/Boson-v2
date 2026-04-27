/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Plus, 
  MoreVertical, 
  MessageSquare, 
  Paperclip, 
  Star,
  ExternalLink
} from 'lucide-react';
import { Task, TaskStatus } from '../types';
import { cn } from '../lib/utils';

const DEFAULT_TASKS: Task[] = [
  {
    id: '1',
    topicName: 'The Higgs Boson Explained',
    department: 'Content Writing',
    status: 'In Progress',
    writerId: 'W1',
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now(),
    rating: 4.5
  },
  {
    id: '2',
    topicName: 'Event Horizon Visualization',
    department: 'Graphic Design',
    status: 'Not Started',
    designerId: 'D1',
    createdAt: Date.now() - 172800000,
    updatedAt: Date.now(),
  },
  {
    id: '3',
    topicName: 'Quantum Entanglement Short',
    department: 'Video Editing',
    status: 'Done',
    videoEditorId: 'V1',
    createdAt: Date.now() - 432000000,
    updatedAt: Date.now(),
    rating: 5
  },
  {
    id: '4',
    topicName: 'Climate Change Infographic',
    department: 'Marketing',
    status: 'Review',
    writerId: 'W2',
    createdAt: Date.now() - 259200000,
    updatedAt: Date.now(),
  }
];

const COLUMNS: TaskStatus[] = ['Not Started', 'In Progress', 'Review', 'Done'];

export default function Pipeline() {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const moveTask = (taskId: string, newStatus: TaskStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus, updatedAt: Date.now() } : t));
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex gap-6 flex-1 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory lg:snap-none">
        {COLUMNS.map((col) => {
          const colTasks = tasks.filter(t => t.status === col);
          const isReview = col === 'Review';
          
          return (
            <div key={col} className="flex flex-col gap-4 min-w-[280px] sm:min-w-[320px] flex-shrink-0 snap-center">
              <div className={cn(
                "flex items-center justify-between px-2",
                isReview ? "text-cyan-600" : "text-slate-500"
              )}>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {col} / {String(colTasks.length).padStart(2, '0')}
                </span>
                <div className={cn(
                  "w-4 h-4 rounded-full",
                  isReview ? "bg-cyan-100" : "bg-slate-200"
                )}></div>
              </div>

              <div className="flex-1 space-y-4 rounded-2xl transition-colors min-h-[400px]">
                {colTasks.map((task) => {
                  const isUrgent = task.status === 'Review';
                  
                  return (
                    <div 
                      key={task.id}
                      className={cn(
                        "group bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md cursor-grab active:cursor-grabbing",
                        isUrgent && "ring-2 ring-cyan-400 ring-offset-2 border-l-4 border-l-cyan-400"
                      )}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={cn(
                          "text-[9px] font-black uppercase tracking-widest",
                          task.department === 'Content Writing' ? "text-amber-500" :
                          task.department === 'Graphic Design' ? "text-indigo-500" :
                          task.department === 'Video Editing' ? "text-rose-500" :
                          "text-cyan-600"
                        )}>
                          {task.department}
                        </span>
                        {isUrgent && (
                          <span className="text-[8px] font-black text-red-500 uppercase tracking-tighter">Urgent</span>
                        )}
                      </div>
                      
                      <h4 className="text-sm font-bold text-slate-800 leading-snug mb-3">
                        {task.topicName}
                      </h4>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500">
                            SB
                          </div>
                          <div className="w-6 h-6 rounded-full border border-white bg-cyan-100 flex items-center justify-center text-[8px] font-bold text-cyan-600">
                            JD
                          </div>
                        </div>
                        <div className="flex gap-2 text-slate-300">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <Paperclip className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <select 
                          className="text-[9px] font-bold text-slate-400 bg-slate-50 border-none rounded p-1 hover:text-cyan-500 focus:ring-0"
                          value={task.status}
                          onChange={(e) => moveTask(task.id, e.target.value as TaskStatus)}
                        >
                          {COLUMNS.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  );
                })}
                
                <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-300 flex items-center justify-center gap-2 hover:border-cyan-200 hover:text-cyan-400 hover:bg-white transition-all text-sm font-bold italic">
                  <Plus className="w-4 h-4" />
                  Drop new concept here
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
