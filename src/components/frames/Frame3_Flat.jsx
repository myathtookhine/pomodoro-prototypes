
import React, { useState } from 'react';
import { usePomodoro } from '../../hooks/usePomodoro';
import { Play, Pause, RotateCcw, Save, SkipForward, Home, Clock, Settings, Trash2, Check } from 'lucide-react';

const Frame3_Flat = () => {
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
    <div className="frame-container frame3-flat">
      {/* Toast */}
      {showToast && (
        <div className="flat-toast">
          <Check size={16} />
          {toastMessage}
        </div>
      )}

      {/* Save Modal / Bottom Sheet */}
      {showSaveModal && (
        <div className="flat-modal-overlay">
          <div className="flat-bottom-sheet">
            <h3>Save this session?</h3>
            <p>You focused for {Math.ceil(elapsedTime / 60)} minutes</p>
            <input 
              type="text"
              className="flat-input"
              placeholder="Enter session name..."
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
            <div className="flat-sheet-actions">
              <button className="flat-btn secondary" onClick={cancelSave}>Cancel</button>
              <button className="flat-btn primary" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="flat-content">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <>
            <header className="flat-header">
              <div className="flat-header-icon">
                <Clock size={24} />
              </div>
              <h3>Pomodoro</h3>
              <div className={`flat-badge ${sessionType}`}>
                {sessionType === 'focus' ? 'Focus' : 'Break'}
              </div>
            </header>

            <div className="flat-timer">
              <div className={`timer-circle ${sessionType} ${isActive ? 'active' : ''}`}>
                <span className="time-digits">{formatTime(timeLeft)}</span>
                <span className="time-label">
                  {isActive ? (isPaused ? 'Paused' : (sessionType === 'focus' ? 'Focusing' : 'Resting')) : 'Ready'}
                </span>
              </div>
            </div>

            <div className="flat-controls">
              <button className="flat-btn secondary icon" onClick={resetTimer}>
                <RotateCcw size={20} />
              </button>
              <button className={`flat-btn round primary ${isActive && !isPaused ? 'pause' : ''}`} onClick={toggleTimer}>
                {isActive && !isPaused ? <Pause fill="white" size={28} /> : <Play fill="white" size={28} />}
              </button>
              {sessionType === 'focus' ? (
                <button className="flat-btn secondary icon" onClick={manualSave} disabled={elapsedTime === 0}>
                  <Save size={20} />
                </button>
              ) : (
                <button className="flat-btn secondary icon" onClick={skipBreak}>
                  <SkipForward size={20} />
                </button>
              )}
            </div>
          </>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className="flat-history">
            <header className="flat-tab-header">
              <h3>History</h3>
              {Object.keys(groupedSessions).length > 0 && (
                <button className="flat-btn small" onClick={clearAllSessions}>Clear All</button>
              )}
            </header>
            <div className="flat-history-list">
              {Object.keys(groupedSessions).length === 0 ? (
                <div className="flat-empty">
                  <Clock size={40} strokeWidth={1.5} />
                  <p>No sessions yet</p>
                </div>
              ) : (
                Object.entries(groupedSessions).map(([date, items]) => (
                  <div key={date} className="flat-date-group">
                    <div className="flat-date-header">{formatDate(date)}</div>
                    {items.map(session => (
                      <div key={session.id} className="flat-history-item">
                        <div className="item-info">
                          <span className="item-name">{session.name}</span>
                          <span className="item-duration">{session.duration} mins</span>
                        </div>
                        <button className="flat-delete" onClick={() => deleteSession(session.id)}>
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
          <div className="flat-settings">
            <header className="flat-tab-header">
              <h3>Settings</h3>
            </header>
            <div className="flat-settings-list">
              <div className="flat-setting-item">
                <span>Focus Duration</span>
                <div className="flat-setting-control">
                  <button onClick={() => setTempFocus(tempFocus <= 5 ? 1 : tempFocus - 5)}>−</button>
                  <span>{tempFocus} min</span>
                  <button onClick={() => setTempFocus(tempFocus === 1 ? 5 : Math.min(60, tempFocus + 5))}>+</button>
                </div>
              </div>
              <div className="flat-setting-item">
                <span>Break Duration</span>
                <div className="flat-setting-control">
                  <button onClick={() => setTempBreak(Math.max(1, tempBreak - 1))}>−</button>
                  <span>{tempBreak} min</span>
                  <button onClick={() => setTempBreak(Math.min(30, tempBreak + 1))}>+</button>
                </div>
              </div>
              <button className="flat-btn primary full" onClick={handleSaveSettings}>Save Settings</button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="flat-nav">
        <button className={`flat-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <Home size={18} />
          <span>Home</span>
        </button>
        <button className={`flat-nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
          <Clock size={18} />
          <span>History</span>
        </button>
        <button className={`flat-nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </nav>

      <style>{`
        .frame3-flat {
          background: #ecf0f1;
          font-family: 'Inter', sans-serif;
          color: #2c3e50;
          display: flex;
          flex-direction: column;
        }

        .flat-content {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          padding-bottom: 70px;
          display: flex;
          flex-direction: column;
        }

        .flat-header, .flat-tab-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .flat-header-icon {
          display: flex;
          align-items: center;
          margin-right: 0.75rem;
          color: #3498db;
        }

        .flat-header h3, .flat-tab-header h3 {
          flex: 1;
          margin: 0;
          font-weight: 700;
        }

        .flat-badge {
          background: #3498db;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .flat-badge.break {
          background: #2ecc71;
        }

        /* Toast */
        .flat-toast {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          background: #2ecc71;
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          z-index: 100;
          animation: flatSlide 0.2s ease;
        }

        @keyframes flatSlide {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Modal */
        .flat-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(44, 62, 80, 0.8);
          z-index: 50;
          display: flex;
          align-items: flex-end;
        }

        .flat-bottom-sheet {
          width: 100%;
          background: white;
          border-radius: 12px 12px 0 0;
          padding: 1.5rem;
          animation: flatUp 0.2s ease;
        }

        @keyframes flatUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .flat-sheet-dots {
          display: flex;
          gap: 6px;
          margin-bottom: 1rem;
        }

        .flat-bottom-sheet h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
        }

        .flat-bottom-sheet p {
          margin: 0 0 1rem;
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .flat-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: #ecf0f1;
          border-radius: 4px;
          font-size: 1rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .flat-sheet-actions {
          display: flex;
          gap: 12px;
        }

        /* Buttons */
        .flat-btn {
          border: none;
          border-radius: 4px;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.1s;
        }

        .flat-btn:active {
          transform: translateY(2px);
        }

        .flat-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .flat-btn.primary {
          background: #3498db;
          color: white;
          box-shadow: 0 4px 0 #2980b9;
        }

        .flat-btn.primary:active {
          box-shadow: 0 0 0 #2980b9;
        }

        .flat-btn.primary.pause {
          background: #f39c12;
          box-shadow: 0 4px 0 #d35400;
        }

        .flat-btn.secondary {
          background: #95a5a6;
          color: white;
          box-shadow: 0 4px 0 #7f8c8d;
          flex: 1;
        }

        .flat-btn.secondary:active {
          box-shadow: 0 0 0 #7f8c8d;
        }

        .flat-btn.round {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flat-btn.icon {
          width: 50px;
          height: 50px;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flat-btn.small {
          padding: 0.4rem 0.8rem;
          font-size: 0.75rem;
        }

        .flat-btn.full {
          width: 100%;
          margin-top: 0;
        }

        /* Timer */
        .flat-timer {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
        }

        .timer-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: #3498db;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          transition: background 0.3s;
        }

        .timer-circle.break {
          background: #2ecc71;
        }

        .timer-circle.active {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .time-digits {
          font-size: 3rem;
          font-weight: 700;
        }

        .time-label {
          font-size: 0.85rem;
          opacity: 0.9;
          text-transform: uppercase;
        }

        /* Controls */
        .flat-controls {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          margin: 2rem;
        }

        /* History */
        .flat-history, .flat-settings {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .flat-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .flat-empty {
          text-align: center;
          color: #95a5a6;
          padding: 3rem 0;
        }

        .flat-empty p {
          margin-top: 1rem;
        }

        .flat-date-group {
          margin-bottom: 1rem;
        }

        .flat-date-header {
          font-size: 0.75rem;
          font-weight: 700;
          color: #7f8c8d;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .flat-history-item {
          display: flex;
          align-items: center;
          background: white;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .flat-history-item .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .flat-history-item .item-name {
          font-weight: 600;
        }

        .flat-history-item .item-duration {
          font-size: 0.8rem;
          color: #7f8c8d;
        }

        .flat-delete {
          background: #ecf0f1;
          border: none;
          padding: 8px;
          border-radius: 4px;
          color: #7f8c8d;
          cursor: pointer;
        }

        .flat-delete:hover {
          background: #e74c3c;
          color: white;
        }

        /* Settings */
        .flat-settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .flat-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 1rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .flat-setting-control {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .flat-setting-control button {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          border: none;
          background: #3498db;
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* Bottom Nav */
        .flat-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: #34495e;
          display: flex;
          z-index: 10;
        }

        .flat-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: none;
          border: none;
          color: #7f8c8d;
          cursor: pointer;
        }

        .flat-nav-item span {
          font-size: 0.65rem;
          font-weight: 700;
        }

        .flat-nav-item.active {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Frame3_Flat;
