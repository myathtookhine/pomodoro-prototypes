
import React, { useState, useEffect } from 'react';
import { usePomodoro } from '../../hooks/usePomodoro';
import { Play, Pause, RotateCcw, Save, SkipForward, Home, Clock, Settings, Trash2, Check, Zap } from 'lucide-react';

const Frame5_Cyberpunk = () => {
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

  // Progress calculation
  const totalTime = sessionType === 'focus' ? focusDuration * 60 : breakDuration * 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  // Current date/time state
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
    if (dateStr === today) return '// TODAY';
    if (dateStr === yesterday) return '// YESTERDAY';
    return '// ' + new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
  };

  return (
    <div className="frame-container frame5-cyber">
      {/* Animated background */}
      <div className="cyber-bg">
        <div className="cyber-grid"></div>
        <div className="cyber-scanline"></div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="cyber-toast">
          <Zap size={14} /> {toastMessage}
        </div>
      )}

      {/* Save Modal */}
      {showSaveModal && (
        <div className="cyber-modal-overlay">
          <div className="cyber-modal">
            <div className="cyber-modal-header">
              <span className="cyber-glitch" data-text="SAVE_SESSION">SAVE_SESSION</span>
            </div>
            <p className="cyber-modal-sub">ELAPSED: {Math.ceil(elapsedTime / 60)} CYCLES</p>
            <input 
              type="text"
              name="sessionName"
              id="sessionName-cyber"
              className="cyber-input"
              placeholder="ENTER_IDENTIFIER..."
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
            <div className="cyber-modal-btns">
              <button className="cyber-btn secondary" onClick={cancelSave}>
                <span>ABORT</span>
              </button>
              <button className="cyber-btn primary" onClick={handleSave}>
                <span>CONFIRM</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="cyber-content">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <>
            <header className="cyber-header">
              <div className="cyber-logo">
                <Zap size={16} />
                <span>NEURAL_FOCUS</span>
              </div>
              <div className={`cyber-status ${sessionType}`}>
                {sessionType === 'focus' ? 'ACTIVE' : 'RECHARGE'}
              </div>
            </header>

            <div className={`cyber-tv-display ${isActive && !isPaused ? (sessionType === 'focus' ? 'focus-active' : 'break-active') : ''}`}>
              <div className="cyber-tv-frame">
                <div className="cyber-tv-screen">
                  <div className="cyber-tv-scanlines"></div>
                  <div className="cyber-tv-content">
                    <div className="cyber-tv-header">
                      <span className="cyber-tv-date">
                        {currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).toUpperCase()}
                      </span>
                      <span className="cyber-tv-clock">
                        {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                      </span>
                    </div>
                    <div className="cyber-tv-timer">
                      <span className="cyber-time">{formatTime(timeLeft)}</span>
                    </div>
                    <div className="cyber-tv-status">
                      <span className={`cyber-tv-mode ${sessionType}`}>
                        {sessionType === 'focus' ? '◆ FOCUS MODE' : '◇ BREAK MODE'}
                      </span>
                      <span className="cyber-tv-state">
                        {isActive ? (isPaused ? 'PAUSED' : 'RUNNING') : 'STANDBY'}
                      </span>
                    </div>
                    <div className="cyber-tv-progress">
                      <div className="cyber-tv-progress-bar">
                        <div className="cyber-tv-progress-fill" style={{ width: `${progress}%` }}></div>
                      </div>
                      <span className="cyber-tv-progress-text">{Math.round(progress)}%</span>
                    </div>
                  </div>
                </div>
                <div className="cyber-tv-indicator"></div>
              </div>
            </div>

            <div className="cyber-controls">
              <button className="cyber-btn icon" onClick={resetTimer}>
                <RotateCcw size={18} />
              </button>
              <button className="cyber-btn primary large" onClick={toggleTimer}>
                {isActive && !isPaused ? <Pause size={24} /> : <Play size={24} />}
              </button>
              {sessionType === 'focus' ? (
                <button className="cyber-btn icon" onClick={manualSave} disabled={elapsedTime === 0}>
                  <Save size={18} />
                </button>
              ) : (
                <button className="cyber-btn icon" onClick={skipBreak}>
                  <SkipForward size={18} />
                </button>
              )}
            </div>
          </>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className="cyber-history">
            <header className="cyber-tab-header">
              <span className="cyber-glitch" data-text="DATA_LOG">DATA_LOG</span>
              {Object.keys(groupedSessions).length > 0 && (
                <button className="cyber-btn small" onClick={clearAllSessions}>PURGE</button>
              )}
            </header>
            <div className="cyber-history-list">
              {Object.keys(groupedSessions).length === 0 ? (
                <div className="cyber-empty">
                  <div className="cyber-empty-icon">∅</div>
                  <p>NO_DATA_FOUND</p>
                </div>
              ) : (
                Object.entries(groupedSessions).map(([date, items]) => (
                  <div key={date} className="cyber-date-group">
                    <div className="cyber-date-header">{formatDate(date)}</div>
                    {items.map(session => (
                      <div key={session.id} className="cyber-history-item">
                        <div className="cyber-item-bar"></div>
                        <div className="cyber-item-info">
                          <span className="item-name">{session.name}</span>
                          <span className="item-duration">{session.duration} CYCLES</span>
                        </div>
                        <button className="cyber-delete" onClick={() => deleteSession(session.id)}>
                          <Trash2 size={14} />
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
          <div className="cyber-settings">
            <header className="cyber-tab-header">
              <span className="cyber-glitch" data-text="CONFIG">CONFIG</span>
            </header>
            <div className="cyber-settings-list">
              <div className="cyber-setting-item">
                <span>FOCUS_DURATION</span>
                <div className="cyber-setting-control">
                  <button onClick={() => setTempFocus(tempFocus <= 5 ? 1 : tempFocus - 5)}>−</button>
                  <span>{tempFocus}m</span>
                  <button onClick={() => setTempFocus(tempFocus === 1 ? 5 : Math.min(60, tempFocus + 5))}>+</button>
                </div>
              </div>
              <div className="cyber-setting-item">
                <span>BREAK_DURATION</span>
                <div className="cyber-setting-control">
                  <button onClick={() => setTempBreak(Math.max(1, tempBreak - 1))}>−</button>
                  <span>{tempBreak}m</span>
                  <button onClick={() => setTempBreak(Math.min(30, tempBreak + 1))}>+</button>
                </div>
              </div>
              <button className="cyber-btn primary full" onClick={handleSaveSettings}>
                APPLY_CHANGES
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="cyber-nav">
        <button className={`cyber-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <Home size={16} />
          <span>HOME</span>
        </button>
        <button className={`cyber-nav-item ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
          <Clock size={16} />
          <span>LOG</span>
        </button>
        <button className={`cyber-nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          <Settings size={16} />
          <span>CFG</span>
        </button>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Share+Tech+Mono&display=swap');
        
        .frame5-cyber {
          background: #0a0a0f;
          font-family: 'Share Tech Mono', monospace;
          color: #00fff9;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .cyber-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(rgba(0, 255, 249, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 249, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .cyber-scanline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(
            transparent 50%,
            rgba(0, 0, 0, 0.1) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
        }

        .cyber-content {
          position: relative;
          z-index: 1;
          flex: 1;
          padding: 1rem;
          overflow-y: hidden;
          padding-bottom: 60px;
          display: flex;
          flex-direction: column;
        }

        .cyber-header, .cyber-tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .cyber-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .cyber-glitch {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          position: relative;
        }

        .cyber-status {
          background: rgba(0, 255, 249, 0.1);
          border: 1px solid #00fff9;
          padding: 0.2rem 0.6rem;
          font-size: 0.65rem;
          text-transform: uppercase;
        }

        .cyber-status.break {
          border-color: #ff00ff;
          color: #ff00ff;
          background: rgba(255, 0, 255, 0.1);
        }

        /* Toast */
        .cyber-toast {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          background: linear-gradient(90deg, rgba(0, 255, 249, 0.2), rgba(255, 0, 255, 0.2));
          border: 1px solid #00fff9;
          color: #00fff9;
          padding: 0.6rem;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 100;
        }

        /* Modal */
        .cyber-modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 15, 0.95);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .cyber-modal {
          width: 100%;
          background: linear-gradient(135deg, rgba(0, 255, 249, 0.05), rgba(255, 0, 255, 0.05));
          border: 1px solid #00fff9;
          padding: 1.5rem;
        }

        .cyber-modal-header {
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .cyber-modal-sub {
          text-align: center;
          font-size: 0.7rem;
          color: #ff00ff;
          margin: 0 0 1rem;
        }

        .cyber-input {
          width: 100%;
          padding: 0.75rem;
          background: rgba(0, 255, 249, 0.05);
          border: 1px solid #00fff9;
          color: #00fff9;
          font-family: inherit;
          font-size: 0.8rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }

        .cyber-input::placeholder {
          color: rgba(0, 255, 249, 0.4);
        }

        .cyber-modal-btns {
          display: flex;
          gap: 0.75rem;
        }

        .cyber-modal-btns .cyber-btn {
          flex: 1;
        }

        /* Timer */
        /* TV Display */
        .cyber-tv-display {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .cyber-tv-frame {
          background: linear-gradient(145deg, #1a1a2e, #0a0a15);
          border: 3px solid #333;
          border-radius: 12px;
          padding: 12px;
          box-shadow: 
            inset 0 0 20px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(0, 255, 249, 0.1);
          position: relative;
          width: 100%;
        }

        .cyber-tv-screen {
          background: #0a0a0f;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          padding: 1rem;
        }

        .cyber-tv-scanlines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.3) 2px,
            rgba(0, 0, 0, 0.3) 4px
          );
          pointer-events: none;
          z-index: 5;
        }

        .cyber-tv-content {
          position: relative;
          z-index: 1;
        }

        .cyber-tv-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0, 255, 249, 0.2);
        }

        .cyber-tv-date {
          color: #ff00ff;
        }

        .cyber-tv-clock {
          color: #00fff9;
          font-family: 'Orbitron', sans-serif;
        }

        .cyber-tv-timer {
          text-align: center;
          padding: 1rem 0;
        }

        .cyber-time {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          display: block;
          text-shadow: 0 0 20px rgba(0, 255, 249, 0.5);
        }

        .cyber-tv-status {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          margin-bottom: 0.75rem;
        }

        .cyber-tv-mode {
          color: #00fff9;
        }

        .cyber-tv-mode.break {
          color: #ff00ff;
        }

        .cyber-tv-state {
          color: #666;
        }

        .cyber-tv-progress {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cyber-tv-progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(0, 255, 249, 0.1);
          border: 1px solid rgba(0, 255, 249, 0.3);
          overflow: hidden;
        }

        .cyber-tv-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00fff9, #ff00ff);
          transition: width 1s linear;
        }

        .cyber-tv-progress-text {
          font-size: 0.6rem;
          color: #00fff9;
          min-width: 35px;
          text-align: right;
        }

        .cyber-tv-indicator {
          width: 8px;
          height: 8px;
          background: #333;
          border-radius: 50%;
          position: absolute;
          bottom: 6px;
          right: 12px;
        }

        /* Focus mode animation */
        .cyber-tv-display.focus-active .cyber-tv-frame {
          animation: focus-glow 2s ease-in-out infinite;
        }

        .cyber-tv-display.focus-active .cyber-tv-indicator {
          background: #00fff9;
          animation: indicator-pulse 1s ease-in-out infinite;
        }

        @keyframes focus-glow {
          0%, 100% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 15px rgba(0, 255, 249, 0.2),
              0 0 30px rgba(0, 255, 249, 0.1);
          }
          50% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 25px rgba(0, 255, 249, 0.4),
              0 0 50px rgba(0, 255, 249, 0.2);
          }
        }

        /* Break mode animation */
        .cyber-tv-display.break-active .cyber-tv-frame {
          animation: break-glow 2s ease-in-out infinite;
        }

        .cyber-tv-display.break-active .cyber-tv-indicator {
          background: #ff00ff;
          animation: indicator-pulse 1s ease-in-out infinite;
        }

        @keyframes break-glow {
          0%, 100% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 15px rgba(255, 0, 255, 0.2),
              0 0 30px rgba(255, 0, 255, 0.1);
          }
          50% {
            box-shadow: 
              inset 0 0 20px rgba(0, 0, 0, 0.5),
              0 0 25px rgba(255, 0, 255, 0.4),
              0 0 50px rgba(255, 0, 255, 0.2);
          }
        }

        @keyframes indicator-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Controls */
        .cyber-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: auto;
          padding-bottom: 1rem;
        }

        .cyber-btn {
          background: transparent;
          border: 1px solid #00fff9;
          color: #00fff9;
          padding: 0.5rem 1rem;
          font-family: inherit;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .cyber-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 249, 0.2), transparent);
          transition: left 0.3s;
        }

        .cyber-btn:hover::before {
          left: 100%;
        }

        .cyber-btn:hover {
          background: rgba(0, 255, 249, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 249, 0.3);
        }

        .cyber-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .cyber-btn.primary {
          background: linear-gradient(90deg, rgba(0, 255, 249, 0.2), rgba(255, 0, 255, 0.2));
          border-color: #ff00ff;
          color: #ff00ff;
        }

        .cyber-btn.primary:hover {
          box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
        }

        .cyber-btn.secondary {
          border-color: #666;
          color: #666;
        }

        .cyber-btn.icon {
          width: 55px;
          height: 55px;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cyber-btn.large {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          border-width: 2px;
        }

        .cyber-btn.small {
          padding: 0.3rem 0.6rem;
          font-size: 0.6rem;
        }

        .cyber-btn.full {
          width: 100%;
          margin-top: 0.5rem;
        }

        /* History */
        .cyber-history, .cyber-settings {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .cyber-history-list {
          flex: 1;
          overflow-y: auto;
        }

        .cyber-empty {
          text-align: center;
          padding: 2rem;
          color: #666;
        }

        .cyber-empty-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .cyber-date-group {
          margin-bottom: 1rem;
        }

        .cyber-date-header {
          font-size: 0.65rem;
          color: #ff00ff;
          margin-bottom: 0.5rem;
        }

        .cyber-history-item {
          display: flex;
          align-items: center;
          background: rgba(0, 255, 249, 0.05);
          border-left: 3px solid #00fff9;
          padding: 0.5rem;
          margin-bottom: 0.25rem;
        }

        .cyber-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cyber-item-info .item-name {
          font-size: 0.75rem;
        }

        .cyber-item-info .item-duration {
          font-size: 0.6rem;
          color: #ff00ff;
        }

        .cyber-delete {
          background: transparent;
          border: 1px solid #ff0055;
          color: #ff0055;
          padding: 6px;
          cursor: pointer;
        }

        /* Settings */
        .cyber-settings-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cyber-setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 255, 249, 0.05);
          border: 1px solid rgba(0, 255, 249, 0.2);
          padding: 0.75rem;
          font-size: 0.7rem;
        }

        .cyber-setting-control {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cyber-setting-control button {
          width: 28px;
          height: 28px;
          background: transparent;
          border: 1px solid #00fff9;
          color: #00fff9;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cyber-setting-control span {
          min-width: 40px;
          text-align: center;
          color: #ff00ff;
        }

        /* Bottom Nav */
        .cyber-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55px;
          background: rgba(10, 10, 15, 0.95);
          border-top: 1px solid rgba(0, 255, 249, 0.3);
          display: flex;
          z-index: 10;
        }

        .cyber-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: transparent;
          border: none;
          color: #666;
          font-family: inherit;
          font-size: 0.55rem;
          cursor: pointer;
        }

        .cyber-nav-item.active {
          color: #00fff9;
          background: rgba(0, 255, 249, 0.1);
        }
      `}</style>
      
      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="cyber-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00fff9" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Frame5_Cyberpunk;
