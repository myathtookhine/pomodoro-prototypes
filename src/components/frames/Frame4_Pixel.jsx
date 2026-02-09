
import React, { useState } from 'react';
import { usePomodoro } from '../../hooks/usePomodoro';
import { Play, Pause, RotateCcw, Save, SkipForward, Home, Clock, Settings, Trash2, Check } from 'lucide-react';

const Frame4_Pixel = () => {
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
    <div className="frame-container frame4-pixel">
      {/* Toast */}
      {showToast && (
        <div className="pixel-toast">
          ★ {toastMessage.toUpperCase()} ★
        </div>
      )}

      {/* Save Modal */}
      {showSaveModal && (
        <div className="pixel-modal-overlay">
          <div className="pixel-modal">
            <div className="pixel-modal-border">
              <h3>SAVE SESSION?</h3>
              <p>TIME: {Math.ceil(elapsedTime / 60)} MIN</p>
              <input 
                type="text"
                name="sessionName"
                id="sessionName-pixel"
                className="pixel-input"
                placeholder="ENTER NAME..."
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value.toUpperCase())}
              />
              <div className="pixel-modal-btns">
                <button className="pixel-btn" onClick={cancelSave}>CANCEL</button>
                <button className="pixel-btn primary" onClick={handleSave}>SAVE</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pixel-content">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <>
            <header className="pixel-header">
              <h2>FOCUS QUEST</h2>
              <div className={`pixel-badge ${sessionType}`}>
                {sessionType === 'focus' ? '⚔ FOCUS' : '🛡 BREAK'}
              </div>
            </header>

            <div className="pixel-timer-box">
              <div className="pixel-timer-display">
                <span className="pixel-time">{formatTime(timeLeft)}</span>
              </div>
              <div className="pixel-status">
                {isActive ? (isPaused ? '▸▸ PAUSED' : '▶ RUNNING') : '■ READY'}
              </div>
              <div className="pixel-hearts">
                {'❤'.repeat(Math.min(5, Math.ceil(timeLeft / (focusDuration * 12))))}
                {'🖤'.repeat(5 - Math.min(5, Math.ceil(timeLeft / (focusDuration * 12))))}
              </div>
            </div>

            <div className="pixel-controls">
              <button className="pixel-btn" onClick={resetTimer}>RESET</button>
              <button className="pixel-btn primary large" onClick={toggleTimer}>
                {isActive && !isPaused ? 'PAUSE' : 'START'}
              </button>
              {sessionType === 'focus' ? (
                <button className="pixel-btn" onClick={manualSave} disabled={elapsedTime === 0}>SAVE</button>
              ) : (
                <button className="pixel-btn" onClick={skipBreak}>SKIP</button>
              )}
            </div>
          </>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className="pixel-history">
            <header className="pixel-tab-header">
              <h2>QUEST LOG</h2>
              {Object.keys(groupedSessions).length > 0 && (
                <button className="pixel-btn small" onClick={clearAllSessions}>CLEAR</button>
              )}
            </header>
            <div className="pixel-history-list">
              {Object.keys(groupedSessions).length === 0 ? (
                <div className="pixel-empty">NO QUESTS YET</div>
              ) : (
                Object.entries(groupedSessions).map(([date, items]) => (
                  <div key={date} className="pixel-date-group">
                    <div className="pixel-date-header">- {formatDate(date)} -</div>
                    {items.map(session => (
                      <div key={session.id} className="pixel-history-item">
                        <span className="item-name">★ {session.name}</span>
                        <span className="item-duration">{session.duration}M</span>
                        <button className="pixel-delete" onClick={() => deleteSession(session.id)}>X</button>
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
          <div className="pixel-settings">
            <header className="pixel-tab-header">
              <h2>OPTIONS</h2>
            </header>
            <div className="pixel-settings-list">
              <div className="pixel-setting-item">
                <span>FOCUS:</span>
                <div className="pixel-setting-control">
                  <button onClick={() => setTempFocus(tempFocus <= 5 ? 1 : tempFocus - 5)}>◀</button>
                  <span>{tempFocus}M</span>
                  <button onClick={() => setTempFocus(tempFocus === 1 ? 5 : Math.min(60, tempFocus + 5))}>▶</button>
                </div>
              </div>
              <div className="pixel-setting-item">
                <span>BREAK:</span>
                <div className="pixel-setting-control">
                  <button onClick={() => setTempBreak(Math.max(1, tempBreak - 1))}>◀</button>
                  <span>{tempBreak}M</span>
                  <button onClick={() => setTempBreak(Math.min(30, tempBreak + 1))}>▶</button>
                </div>
              </div>
              <button className="pixel-btn primary" onClick={handleSaveSettings}>SAVE CONFIG</button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="pixel-nav">
        <button className={`pixel-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          HOME
        </button>
        <button className={`pixel-nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
          LOG
        </button>
        <button className={`pixel-nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          OPT
        </button>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .frame4-pixel {
          background: #1a1c2c;
          font-family: 'Press Start 2P', monospace;
          color: #f4f4f4;
          display: flex;
          flex-direction: column;
          image-rendering: pixelated;
        }

        .pixel-content {
          flex: 1;
          padding: 1rem;
          overflow-y: hidden;
          padding-bottom: 55px;
          display: flex;
          flex-direction: column;
        }

        .pixel-header, .pixel-tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 4px solid #5f574f;
        }

        .pixel-header h2, .pixel-tab-header h2 {
          margin: 0;
          font-size: 0.8rem;
          color: #ffcd75;
        }

        .pixel-badge {
          background: #38b764;
          color: #1a1c2c;
          padding: 0.2rem 0.4rem;
          font-size: 0.5rem;
        }

        .pixel-badge.break {
          background: #29adff;
        }

        /* Toast */
        .pixel-toast {
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          background: #38b764;
          color: #1a1c2c;
          padding: 0.5rem;
          font-size: 0.5rem;
          text-align: center;
          border: 4px solid #1a1c2c;
          z-index: 100;
        }

        /* Modal */
        .pixel-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 28, 44, 0.9);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .pixel-modal {
          width: 100%;
          background: #333c57;
          border: 4px solid #5f574f;
          padding: 4px;
        }

        .pixel-modal-border {
          border: 4px solid #ffcd75;
          padding: 1rem;
        }

        .pixel-modal h3 {
          margin: 0 0 0.5rem;
          font-size: 0.7rem;
          color: #ffcd75;
          text-align: center;
        }

        .pixel-modal p {
          font-size: 0.5rem;
          text-align: center;
          margin: 0 0 1rem;
        }

        .pixel-input {
          width: 100%;
          padding: 0.5rem;
          border: 4px solid #5f574f;
          background: #1a1c2c;
          color: #f4f4f4;
          font-family: inherit;
          font-size: 0.5rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .pixel-modal-btns {
          display: flex;
          gap: 0.5rem;
        }

        .pixel-modal-btns .pixel-btn {
          flex: 1;
        }

        /* Timer */
        .pixel-timer-box {
          background: #333c57;
          // border: 4px solid #5f574f;
          padding: 2rem 1rem;
          margin-bottom: 0;
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pixel-timer-display {
          background: #333c57;
    border: 4px dashed #ffcd75;
    padding: 2rem 1rem;
    margin-bottom: 1rem;
        }

        .pixel-time {
          font-size: 2.8rem;
          color: #ffcd75;
          letter-spacing: 6px;
        }

        .pixel-status {
          font-size: 0.6rem;
          margin-bottom: 1rem;
          color: #94b0c2;
        }

        .pixel-hearts {
          font-size: 1.2rem;
          letter-spacing: 6px;
        }

        /* Controls */
        .pixel-controls {
          display: flex;
          gap: 0.75rem;
          margin: 1rem 0;
        }

        .pixel-btn {
          background: #5f574f;
          border: 4px solid #333c57;
          color: #f4f4f4;
          padding: 0.75rem;
          font-family: inherit;
          font-size: 0.55rem;
          cursor: pointer;
          flex: 1;
          transition: all 0.1s;
        }

        .pixel-btn:hover {
          background: #94b0c2;
          color: #1a1c2c;
        }

        .pixel-btn:active {
          transform: scale(0.95);
        }

        .pixel-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pixel-btn.primary {
          background: #ff6b6b;
          border-color: #c92a2a;
        }

        .pixel-btn.primary:hover {
          background: #fa5252;
        }

        .pixel-btn.large {
          padding: 1rem;
          font-size: 0.7rem;
        }

        .pixel-btn.small {
          padding: 0.3rem 0.4rem;
          font-size: 0.4rem;
        }

        /* History */
        .pixel-history, .pixel-settings {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pixel-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .pixel-empty {
          text-align: center;
          padding: 2rem;
          font-size: 0.5rem;
          color: #5f574f;
        }

        .pixel-date-group {
          margin-bottom: 1rem;
        }

        .pixel-date-header {
          font-size: 0.5rem;
          color: #94b0c2;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .pixel-history-item {
          display: flex;
          align-items: center;
          background: #333c57;
          border: 2px solid #5f574f;
          padding: 0.4rem;
          margin-bottom: 0.25rem;
          font-size: 0.45rem;
        }

        .pixel-history-item .item-name {
          flex: 1;
          color: #ffcd75;
        }

        .pixel-history-item .item-duration {
          margin-right: 0.5rem;
        }

        .pixel-delete {
          background: #ff6b6b;
          border: 2px solid #c92a2a;
          color: #fff;
          width: 18px;
          height: 18px;
          font-family: inherit;
          font-size: 0.4rem;
          cursor: pointer;
        }

        /* Settings */
        .pixel-settings-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pixel-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #333c57;
          border: 2px solid #5f574f;
          padding: 0.5rem;
          font-size: 0.5rem;
        }

        .pixel-setting-control {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pixel-setting-control button {
          background: #5f574f;
          border: 2px solid #333c57;
          color: #f4f4f4;
          width: 24px;
          height: 24px;
          font-family: inherit;
          font-size: 0.5rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Bottom Nav */
        .pixel-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45px;
          background: #333c57;
          border-top: 4px solid #5f574f;
          display: flex;
          z-index: 10;
        }

        .pixel-nav-item {
          flex: 1;
          background: transparent;
          border: none;
          border-right: 2px solid #5f574f;
          color: #94b0c2;
          font-family: inherit;
          font-size: 0.5rem;
          cursor: pointer;
        }

        .pixel-nav-item:last-child {
          border-right: none;
        }

        .pixel-nav-item.active {
          background: #5f574f;
          color: #ffcd75;
        }
      `}</style>
    </div>
  );
};

export default Frame4_Pixel;
