/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Pipeline from './components/Pipeline';
import Calendar from './components/Calendar';
import Resources from './components/Resources';
import Overview from './components/Overview';
import Header from './components/Header';

function AppContent() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getTitle = () => {
    switch (location.pathname) {
      case '/': return 'Executive Dashboard Overview';
      case '/pipeline': return 'The Boson Pipeline';
      case '/calendar': return 'Event Management Calendar';
      case '/resources': return 'Resource & Brand Repository';
      case '/overview': return 'Executive Manager Overview';
      default: return 'Boson Task Management';
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <Header 
          title={getTitle()} 
          onMenuClick={() => setIsMobileMenuOpen(true)} 
        />
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/dept/:deptId" element={<Pipeline />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
