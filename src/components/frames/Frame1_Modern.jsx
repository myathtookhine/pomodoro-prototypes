
import React, { useState } from 'react';
import { usePomodoro } from '../../hooks/usePomodoro';
import { Play, Pause, RotateCcw, Save, SkipForward, Home, Clock, Settings, Trash2, X, Check } from 'lucide-react';

const Frame1_Modern = () => {
  const {
    timeLeft,
    isActive,
    isPaused,
    sessionType,
    elapsedTime,
    focusDuration,
    breakDuration,
    showSaveModal,
    showToast,
    toastMessage,
    groupedSessions,
    toggleTimer,
    resetTimer,
    saveSession,
    cancelSave,
    skipBreak,
    manualSave,
    deleteSession,
    clearAllSessions,
    updateSettings,
    formatTime
  } = usePomodoro();

  const [activeTab, setActiveTab] = useState('home');
  const [sessionName, setSessionName] = useState('');
  const [tempFocus, setTempFocus] = useState(focusDuration);
  const [tempBreak, setTempBreak] = useState(breakDuration);

  // Progress calculation for circular timer
  const totalTime = sessionType === 'focus' ? focusDuration * 60 : breakDuration * 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const handleSave = () => {
    if (sessionName.trim()) {
      saveSession(sessionName.trim());
      setSessionName('');
    }
  };

  const handleSaveSettings = () => {
    updateSettings(tempFocus, tempBreak);
    setActiveTab('home');
  };

  const formatDate = (dateStr) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (dateStr === today) return 'Today';
    if (dateStr === yesterday) return 'Yesterday';
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="frame-container frame1-modern">
      {/* Background Gradient */}
      <div className="frame1-bg"></div>

      {/* Toast */}
      {showToast && (
        <div className="toast">
          <Check size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Save Modal / Bottom Sheet */}
      {showSaveModal && (
        <div className="modal-overlay">
          <div className="bottom-sheet">
            <div className="sheet-handle"></div>
            <h3>Do you want to save this session?</h3>
            <p className="sheet-subtitle">You focused for {Math.ceil(elapsedTime / 60)} minutes</p>
            <input 
              type="text"
              className="sheet-input"
              placeholder="Please enter your session name!"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
            <div className="sheet-actions">
              <button className="sheet-btn cancel" onClick={cancelSave}>Cancel</button>
              <button className="sheet-btn save" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="frame1-content">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <>
            <header className="frame1-header">
              <h3 style={{fontSize: 39, fontWeight: 200}}>Focus Flow</h3>
            </header>

            <div className="timer-container">
              <svg className="timer-svg" width="260" height="260">
                <circle
                  className="timer-circle-bg"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="transparent"
                  r={radius}
                  cx="130"
                  cy="130"
                />
                <circle
                  className="timer-circle-progress"
                  stroke={sessionType === 'focus' ? '#fff' : '#4ade80'}
                  strokeWidth="8"
                  fill="transparent"
                  r={radius}
                  cx="130"
                  cy="130"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset,
                    transition: 'stroke-dashoffset 1s linear'
                  }}
                />
              </svg>
              <div className="timer-text">
                <h1 style={{fontWeight: 700}}>{formatTime(timeLeft)}</h1>
                <p>{isActive ? (isPaused ? 'PAUSED' : (sessionType === 'focus' ? 'FOCUSING' : 'RESTING')) : 'READY'}</p>
              </div>
            </div>

            <div className="status-badge" style={{marginBottom: 40}}>
              <span className={`${sessionType}`}>
                {sessionType === 'focus' ? 'Focus Mode' : 'Break Time'}
              </span>
            </div>
            <div className="controls">
              <button className="control-btn secondary" onClick={resetTimer}>
                <RotateCcw size={24} />
              </button>
              <button className="control-btn main" onClick={toggleTimer}>
                {isActive && !isPaused ? <Pause size={32} /> : <Play size={32} fill="currentColor" />}
              </button>
              {sessionType === 'focus' ? (
                <button className="control-btn secondary" onClick={manualSave} disabled={elapsedTime === 0}>
                  <Save size={24} />
                </button>
              ) : (
                <button className="control-btn secondary" onClick={skipBreak}>
                  <SkipForward size={24} />
                </button>
              )}
            </div>
          </>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className="history-container">
            <header className="tab-header">
              <h3 style={{ fontSize: 39, fontWeight: '300' }}>History</h3>
              {Object.keys(groupedSessions).length > 0 && (
                <button className="clear-all-btn" onClick={clearAllSessions}>
                  Clear All
                </button>
              )}
            </header>
            <div className="history-list">
              {Object.keys(groupedSessions).length === 0 ? (
                <div className="empty-state">
                  <Clock size={48} strokeWidth={1} />
                  <p>No sessions yet</p>
                </div>
              ) : (
                Object.entries(groupedSessions).map(([date, items]) => (
                  <div key={date} className="date-group">
                    <div className="date-header">{formatDate(date)}</div>
                    {items.map(session => (
                      <div key={session.id} className="history-item">
                        <div className="item-info">
                          <span className="item-name">{session.name}</span>
                          <span className="item-duration">{session.duration} mins</span>
                        </div>
                        <button className="delete-btn" onClick={() => deleteSession(session.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="settings-container">
            <header className="tab-header">
              <h3 style={{ fontSize: 39, fontWeight: '300' }}>Settings</h3>
            </header>
            <div className="settings-list">
              <div className="setting-item">
                <label>Focus Duration</label>
                <div className="setting-control">
                  <button onClick={() => setTempFocus(tempFocus <= 5 ? 1 : tempFocus - 5)}>-</button>
                  <span>{tempFocus} min</span>
                  <button onClick={() => setTempFocus(tempFocus === 1 ? 5 : Math.min(60, tempFocus + 5))}>+</button>
                </div>
              </div>
              <div className="setting-item">
                <label>Break Duration</label>
                <div className="setting-control">
                  <button onClick={() => setTempBreak(Math.max(1, tempBreak - 1))}>-</button>
                  <span>{tempBreak} min</span>
                  <button onClick={() => setTempBreak(Math.min(30, tempBreak + 1))}>+</button>
                </div>
              </div>
              <button className="save-settings-btn" onClick={handleSaveSettings}>
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className={`nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
          <Clock size={20} />
          <span>History</span>
        </button>
        <button className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </nav>

      <style>{`
        .frame1-modern {
          color: white;
          font-family: 'Google Sans', 'Product Sans', sans-serif;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .frame1-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          z-index: 0;
        }

        .frame1-content {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          padding-bottom: 70px;
          overflow-y: hidden;
        }

        .frame1-header, .tab-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .frame1-header h3, .tab-header h3 {
          margin: 0;
          font-weight: 600;
        }

        .status-badge {
          background: rgba(255,255,255,0.2);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          backdrop-filter: blur(5px);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-badge.break {
          background: rgba(74, 222, 128, 0.3);
        }

        /* Toast */
        .toast {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(74, 222, 128, 0.9);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 100;
          font-size: 0.85rem;
          animation: slideDown 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        @keyframes slideDown {
          from { top: -50px; opacity: 0; }
          to { top: 20px; opacity: 1; }
        }

        /* Modal / Bottom Sheet */
        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 50;
          display: flex;
          align-items: flex-end;
        }

        .bottom-sheet {
          width: 100%;
          background: white;
          border-radius: 20px 20px 0 0;
          padding: 1.5rem;
          color: #333;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .sheet-handle {
          width: 40px;
          height: 4px;
          background: #ddd;
          border-radius: 2px;
          margin: 0 auto 1rem;
        }

        .bottom-sheet h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
        }

        .sheet-subtitle {
          color: #666;
          font-size: 0.85rem;
          margin: 0 0 1rem;
        }

        .sheet-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #eee;
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .sheet-input:focus {
          border-color: #667eea;
        }

        .sheet-actions {
          display: flex;
          gap: 12px;
        }

        .sheet-btn {
          flex: 1;
          padding: 0.75rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }

        .sheet-btn.cancel {
          background: #f0f0f0;
          color: #666;
        }

        .sheet-btn.save {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        /* Timer */
        .timer-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 1rem;
        }

        .timer-svg {
          transform: rotate(-90deg);
        }

        .timer-text {
          position: absolute;
          text-align: center;
        }

        .timer-text h1 {
          font-size: 3.5rem;
          margin: 0;
          font-weight: 200;
          letter-spacing: 2px;
        }

        .timer-text p {
          margin: 0;
          font-size: 0.8rem;
          opacity: 0.8;
          letter-spacing: 3px;
        }

        /* Controls */
        .controls {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .control-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        .control-btn:hover {
          transform: scale(1.1);
        }

        .control-btn:active {
          transform: scale(0.95);
        }

        .control-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .control-btn.main {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .control-btn.secondary {
          opacity: 0.7;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .control-btn.secondary:hover {
          opacity: 1;
          background: rgba(255,255,255,0.2);
        }

        /* History */
        .history-container, .settings-container {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .clear-all-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .history-list {
          flex: 1;
          overflow-y: auto;
        }

        .empty-state {
          text-align: center;
          opacity: 0.5;
          margin-top: 3rem;
        }

        .empty-state p {
          margin-top: 1rem;
        }

        .date-group {
          margin-bottom: 1.5rem;
        }

        .date-header {
          font-size: 0.75rem;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.1);
          padding: 0.75rem 1rem;
          border-radius: 12px;
          margin-bottom: 0.5rem;
        }

        .item-info {
          display: flex;
          flex-direction: column;
        }

        .item-name {
          font-weight: 500;
        }

        .item-duration {
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .delete-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.6;
        }

        .delete-btn:hover {
          opacity: 1;
          background: rgba(239, 68, 68, 0.5);
        }

        /* Settings */
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .setting-item {
          background: rgba(255,255,255,0.1);
          padding: 1rem;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .setting-item label {
          font-weight: 500;
        }

        .setting-control {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .setting-control button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.2);
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .setting-control span {
          min-width: 60px;
          text-align: center;
        }

        .save-settings-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 0;
        }

        .save-settings-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        /* Bottom Navigation */
        .bottom-nav {
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          border-radius: 0;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 10;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          padding: 6px 40px;
          border-radius: 40px;
          transition: all 0.2s;
        }

        .nav-item span {
          font-size: 0.7rem;
        }

        .nav-item.active {
          color: white;
          background: rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
};

export default Frame1_Modern;
