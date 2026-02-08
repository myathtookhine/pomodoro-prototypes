
import React, { useState } from 'react';
import { usePomodoro } from '../../hooks/usePomodoro';
import { Play, Pause, RotateCcw, Save, SkipForward, Home, Clock, Settings, Trash2, X, Check } from 'lucide-react';

const Frame2_Brutalism = () => {
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
    if (dateStr === today) return 'TODAY';
    if (dateStr === yesterday) return 'YESTERDAY';
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
  };

  return (
    <div className="frame-container frame2-brutalism">
      {/* Toast */}
      {showToast && (
        <div className="brutal-toast">
          ★ {toastMessage.toUpperCase()} ★
        </div>
      )}

      {/* Save Modal / Bottom Sheet */}
      {showSaveModal && (
        <div className="brutal-modal-overlay">
          <div className="brutal-bottom-sheet">
            <h3>★★★ SAVE SESSION? ★★★</h3>
            <p>YOU FOCUSED FOR {Math.ceil(elapsedTime / 60)} MINUTES</p>
            <input 
              type="text"
              className="brutal-input"
              placeholder="ENTER SESSION NAME..."
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value.toUpperCase())}
            />
            <div className="brutal-sheet-actions">
              <button className="brutal-btn sheet-btn" onClick={cancelSave}>CANCEL</button>
              <button className="brutal-btn sheet-btn primary" onClick={handleSave}>SAVE</button>
            </div>
          </div>
        </div>
      )}

      <div className="brutal-content">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <>
            <header className="brutal-header">
              <h2>POMODORO</h2>
              <div className={`brutal-badge ${sessionType}`}>
                {sessionType === 'focus' ? 'FOCUS' : 'BREAK'}
              </div>
            </header>

            <div className="brutal-timer-display">
              <h1>{formatTime(timeLeft)}</h1>
              <div className="brutal-status">
                {isActive ? (isPaused ? '/// PAUSED ///' : (sessionType === 'focus' ? '/// FOCUSING ///' : '/// RESTING ///')) : '/// READY ///'}
              </div>
            </div>

            <div className="brutal-controls">
              <button className="brutal-btn main" onClick={toggleTimer}>
                {isActive && !isPaused ? 'PAUSE' : 'START'}
              </button>
              <div className="brutal-secondary">
                <button className="brutal-btn small" onClick={resetTimer}>RESET</button>
                {sessionType === 'focus' ? (
                  <button className="brutal-btn small" onClick={manualSave} disabled={elapsedTime === 0}>SAVE</button>
                ) : (
                  <button className="brutal-btn small" onClick={skipBreak}>SKIP</button>
                )}
              </div>
            </div>
          </>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className="brutal-history">
            <header className="brutal-tab-header">
              <h2>LOGS</h2>
              {Object.keys(groupedSessions).length > 0 && (
                <button className="brutal-btn tiny" onClick={clearAllSessions}>CLEAR</button>
              )}
            </header>
            <div className="brutal-history-list">
              {Object.keys(groupedSessions).length === 0 ? (
                <div className="brutal-empty">NO DATA</div>
              ) : (
                Object.entries(groupedSessions).map(([date, items]) => (
                  <div key={date} className="brutal-date-group">
                    <div className="brutal-date-header">[{formatDate(date)}]</div>
                    {items.map(session => (
                      <div key={session.id} className="brutal-history-item">
                        <span className="item-name">{session.name}</span>
                        <span className="item-duration">{session.duration}M</span>
                        <button className="brutal-delete" onClick={() => deleteSession(session.id)}>X</button>
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
          <div className="brutal-settings">
            <header className="brutal-tab-header">
              <h2>CONFIG</h2>
            </header>
            <div className="brutal-settings-list">
              <div className="brutal-setting-item">
                <span>FOCUS TIME:</span>
                <div className="brutal-setting-control">
                  <button onClick={() => setTempFocus(tempFocus <= 5 ? 1 : tempFocus - 5)}>-</button>
                  <span>{tempFocus}M</span>
                  <button onClick={() => setTempFocus(tempFocus === 1 ? 5 : Math.min(60, tempFocus + 5))}>+</button>
                </div>
              </div>
              <div className="brutal-setting-item">
                <span>BREAK TIME:</span>
                <div className="brutal-setting-control">
                  <button onClick={() => setTempBreak(Math.max(1, tempBreak - 1))}>-</button>
                  <span>{tempBreak}M</span>
                  <button onClick={() => setTempBreak(Math.min(30, tempBreak + 1))}>+</button>
                </div>
              </div>
              <button className="brutal-btn" onClick={handleSaveSettings}>SAVE CONFIG</button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="brutal-nav">
        <button className={`brutal-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          HOME
        </button>
        <button className={`brutal-nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
          LOGS
        </button>
        <button className={`brutal-nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          CONFIG
        </button>
      </nav>

      <style>{`
        .frame2-brutalism {
          background: #f0f0f0;
          font-family: 'Space Grotesk', sans-serif;
          color: #000;
          display: flex;
          flex-direction: column;
        }

        .brutal-content {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          padding-bottom: 60px;
        }

        .brutal-header, .brutal-tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 4px solid #000;
          padding-bottom: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .brutal-header h2, .brutal-tab-header h2 {
          margin: 0;
          font-weight: 900;
          font-size: 1.4rem;
        }

        .brutal-badge {
          background: #000;
          color: #fff;
          padding: 0.2rem 0.6rem;
          font-weight: bold;
          font-size: 0.75rem;
        }

        .brutal-badge.break {
          background: #4caf50;
        }

        /* Toast */
        .brutal-toast {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          background: #4caf50;
          color: #fff;
          padding: 0.75rem;
          font-weight: 900;
          text-align: center;
          border: 4px solid #000;
          z-index: 100;
          animation: brutalSlide 0.2s ease;
        }

        @keyframes brutalSlide {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        /* Modal */
        .brutal-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          z-index: 50;
          display: flex;
          align-items: flex-end;
        }

        .brutal-bottom-sheet {
          width: 100%;
          background: #ffeb3b;
          border: 4px solid #000;
          border-bottom: none;
          padding: 1.5rem;
          animation: brutalUp 0.2s ease;
        }

        @keyframes brutalUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .brutal-bottom-sheet h3 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }

        .brutal-bottom-sheet p {
          margin: 0 0 1rem;
          font-size: 0.85rem;
        }

        .brutal-input {
          width: 100%;
          padding: 0.75rem;
          border: 3px solid #000;
          font-family: inherit;
          font-weight: bold;
          font-size: 1rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .brutal-sheet-actions {
          display: flex;
          gap: 1rem;
        }

        .brutal-btn.sheet-btn {
          flex: 1;
        }

        .brutal-btn.sheet-btn.primary {
          background: #000;
          color: #fff;
        }

        /* Timer */
        .brutal-timer-display {
          text-align: center;
          border: 4px solid #000;
          padding: 7rem 1rem;
          background: #ffeb3b;
          margin-bottom: 1.5rem;
        }

        .brutal-timer-display h1 {
          font-size: 4rem;
          margin: 0;
          font-weight: 900;
        }

        .brutal-status {
          margin-top: 0.5rem;
          font-weight: bold;
          font-size: 0.9rem;
        }

        /* Controls */
        .brutal-controls {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brutal-btn {
          background: #fff;
          border: 4px solid #000;
          padding: 0.75rem;
          font-family: inherit;
          font-weight: 900;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 4px 4px 0px #000;
          transition: all 0.1s;
        }

        .brutal-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000;
        }

        .brutal-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 0px 0px 0px #000;
        }

        .brutal-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .brutal-btn.main {
          background: #ff5722;
          color: #fff;
        }

        .brutal-btn.tiny {
          padding: 0.3rem 0.6rem;
          font-size: 0.7rem;
          box-shadow: 2px 2px 0 #000;
        }

        .brutal-secondary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* History */
        .brutal-history, .brutal-settings {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .brutal-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .brutal-empty {
          text-align: center;
          padding: 2rem;
          border: 4px dashed #000;
          font-weight: bold;
          opacity: 0.5;
        }

        .brutal-date-group {
          margin-bottom: 1rem;
        }

        .brutal-date-header {
          font-weight: 900;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          text-decoration: underline;
        }

        .brutal-history-item {
          display: flex;
          align-items: center;
          border: 3px solid #000;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          background: #fff;
        }

        .brutal-history-item .item-name {
          flex: 1;
          font-weight: bold;
          font-size: 0.85rem;
        }

        .brutal-history-item .item-duration {
          font-weight: 900;
          margin-right: 0.5rem;
        }

        .brutal-delete {
          background: #000;
          color: #fff;
          border: none;
          width: 24px;
          height: 24px;
          font-weight: bold;
          cursor: pointer;
        }

        /* Settings */
        .brutal-settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brutal-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 3px solid #000;
          padding: 0.75rem;
          background: #fff;
          font-weight: bold;
        }

        .brutal-setting-control {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .brutal-setting-control button {
        display: flex;
    justify-content: center;
    align-items: center;
          width: 30px;
          height: 30px;
          border: 3px solid #000;
          background: #ffeb3b;
          font-weight: 900;
          font-size: 1.2rem;
          cursor: pointer;
        }

        /* Bottom Nav */
        .brutal-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50px;
          background: #000;
          display: flex;
          z-index: 10;
        }

        .brutal-nav-item {
          flex: 1;
          background: #000;
          color: #666;
          border: none;
          font-family: inherit;
          font-weight: 900;
          font-size: 0.75rem;
          cursor: pointer;
          border-right: 2px solid #333;
        }

        .brutal-nav-item:last-child {
          border-right: none;
        }

        .brutal-nav-item.active {
          background: #ffeb3b;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Frame2_Brutalism;
