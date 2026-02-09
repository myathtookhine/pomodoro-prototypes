
import React, { useState, useEffect } from 'react';
import { usePomodoro } from '../../hooks/usePomodoro';

const Frame6_Terminal = () => {
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
  const [terminalLines, setTerminalLines] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Add terminal output
  const addLine = (text, type = 'output') => {
    setTerminalLines(prev => [...prev.slice(-15), { text, type, id: Date.now() }]);
  };

  const handleSave = () => {
    if (sessionName.trim()) {
      addLine(`$ save-session --name="${sessionName.trim()}"`, 'command');
      addLine(`[OK] Session "${sessionName.trim()}" saved successfully.`, 'success');
      saveSession(sessionName.trim());
      setSessionName('');
    }
  };

  const handleCancel = () => {
    addLine('$ cancel-save', 'command');
    addLine('[INFO] Save cancelled. Starting break...', 'info');
    cancelSave();
  };

  const handleToggle = () => {
    if (!isActive) {
      addLine(`$ start-timer --type=${sessionType} --duration=${sessionType === 'focus' ? focusDuration : breakDuration}m`, 'command');
      addLine(`[OK] Timer started.`, 'success');
    } else if (isPaused) {
      addLine('$ resume-timer', 'command');
      addLine('[OK] Timer resumed.', 'success');
    } else {
      addLine('$ pause-timer', 'command');
      addLine('[INFO] Timer paused.', 'info');
    }
    toggleTimer();
  };

  const handleReset = () => {
    addLine('$ reset-timer', 'command');
    addLine('[OK] Timer reset to default.', 'success');
    resetTimer();
  };

  const handleManualSave = () => {
    addLine('$ trigger-save', 'command');
    manualSave();
  };

  const handleSkip = () => {
    addLine('$ skip-break', 'command');
    addLine('[OK] Break skipped. Ready for focus.', 'success');
    skipBreak();
  };

  const handleSaveSettings = () => {
    addLine(`$ config --focus=${tempFocus}m --break=${tempBreak}m`, 'command');
    addLine('[OK] Configuration updated.', 'success');
    updateSettings(tempFocus, tempBreak);
    setActiveTab('home');
  };

  const handleClear = () => {
    setTerminalLines([]);
  };

  const formatDate = (dateStr) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (dateStr === today) return 'today';
    if (dateStr === yesterday) return 'yesterday';
    return dateStr;
  };

  // Progress bar using ASCII
  const getProgressBar = () => {
    const total = sessionType === 'focus' ? focusDuration * 60 : breakDuration * 60;
    const progress = Math.round(((total - timeLeft) / total) * 20);
    return `[${'█'.repeat(progress)}${'░'.repeat(20 - progress)}] ${Math.round((total - timeLeft) / total * 100)}%`;
  };

  return (
    <div className="frame-container frame6-terminal">
      {/* Terminal Header */}
      <div className="term-header">
        <span className="term-title">pomodoro@focus:~</span>
        {/* <div className="term-controls">
          <span className="term-btn minimize">─</span>
          <span className="term-btn maximize">□</span>
          <span className="term-btn close">×</span>
        </div> */}
      </div>

      <div className="term-content">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <>
            <div className="term-output">
              <div className="term-line system">
                ╔══════════════════════════════════════╗
              </div>
              <div className="term-line system">
                ║  POMODORO TIMER v2.0.1               ║
              </div>
              <div className="term-line system">
                ║  Type 'help' for available commands  ║
              </div>
              <div className="term-line system">
                ╚══════════════════════════════════════╝
              </div>
              <div className="term-line"></div>
              <div className="term-line">
                <span className="term-label">STATUS:</span>
                <span className={`term-value ${sessionType}`}>
                  {sessionType.toUpperCase()} MODE
                </span>
              </div>
              <div className="term-line">
                <span className="term-label">STATE:</span>
                <span className="term-value">
                  {isActive ? (isPaused ? 'PAUSED' : 'RUNNING') : 'IDLE'}
                </span>
              </div>
              <div className="term-line"></div>
              <div className="term-line timer-display">
                <span className="term-time">{formatTime(timeLeft)}</span>
              </div>
              <div className="term-line progress">
                {getProgressBar()}
              </div>
              <div className="term-line"></div>
              
              {/* Terminal history */}
              {terminalLines.map(line => (
                <div key={line.id} className={`term-line ${line.type}`}>
                  {line.text}
                </div>
              ))}
            </div>

            {/* Save Modal as Terminal Dialog */}
            {showSaveModal && (
              <div className="term-dialog">
                <div className="term-line system">
                  ┌─ SAVE SESSION ─────────────────────┐
                </div>
                <div className="term-line">
                  │ Session completed: {Math.ceil(elapsedTime / 60)} minutes
                </div>
                <div className="term-line">
                  │ Enter session name:
                </div>
                <div className="term-line input-line">
                  │ {'>'} 
                  <input 
                    type="text"
                    name="sessionName"
                    id="sessionName-terminal"
                    className="term-input"
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                    placeholder="session_name"
                    autoFocus
                  />
                </div>
                <div className="term-line system">
                  └──────────────────────────────────────┘
                </div>
                <div className="term-actions">
                  <button className="term-btn-action" onClick={handleCancel}>[C]ancel</button>
                  <button className="term-btn-action primary" onClick={handleSave}>[S]ave</button>
                </div>
              </div>
            )}

            {/* Toast */}
            {showToast && (
              <div className="term-line success">
                [SUCCESS] {toastMessage}
              </div>
            )}
          </>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className="term-history">
            <div className="term-line command">$ ls -la ~/sessions/</div>
            <div className="term-line"></div>
            {Object.keys(groupedSessions).length === 0 ? (
              <>
                <div className="term-line info">[INFO] No sessions found.</div>
                <div className="term-line">total 0</div>
              </>
            ) : (
              <>
                <div className="term-line">total {Object.values(groupedSessions).flat().length}</div>
                {Object.entries(groupedSessions).map(([date, items]) => (
                  <div key={date} className="term-date-group">
                    <div className="term-line comment"># {formatDate(date)}</div>
                    {items.map(session => (
                      <div key={session.id} className="term-history-item">
                        <span className="perm">-rw-r--r--</span>
                        <span className="size">{session.duration}m</span>
                        <span className="name">{session.name}</span>
                        <button className="term-rm" onClick={() => deleteSession(session.id)}>rm</button>
                      </div>
                    ))}
                  </div>
                ))}
                {Object.keys(groupedSessions).length > 0 && (
                  <div className="term-line">
                    <button className="term-cmd danger" onClick={clearAllSessions}>rm -rf ~/sessions/*</button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="term-settings">
            <div className="term-line command">$ cat /etc/pomodoro.conf</div>
            <div className="term-line"></div>
            <div className="term-line comment"># Pomodoro Configuration File</div>
            <div className="term-line comment"># Edit values below</div>
            <div className="term-line"></div>
            <div className="term-config-item">
              <span className="config-key">FOCUS_DURATION=</span>
              <button onClick={() => setTempFocus(tempFocus <= 5 ? 1 : tempFocus - 5)}>[-]</button>
              <span className="config-value">{tempFocus}</span>
              <button onClick={() => setTempFocus(tempFocus === 1 ? 5 : Math.min(60, tempFocus + 5))}>[+]</button>
              <span className="config-comment"># minutes</span>
            </div>
            <div className="term-config-item">
              <span className="config-key">BREAK_DURATION=</span>
              <button onClick={() => setTempBreak(Math.max(1, tempBreak - 1))}>[-]</button>
              <span className="config-value">{tempBreak}</span>
              <button onClick={() => setTempBreak(Math.min(30, tempBreak + 1))}>[+]</button>
              <span className="config-comment"># minutes</span>
            </div>
            <div className="term-line"></div>
            <button className="term-cmd primary" onClick={handleSaveSettings}>
              :wq (save & quit)
            </button>
          </div>
        )}
      </div>

      {/* Command bar - positioned above nav */}
      {activeTab === 'home' && (
        <div className="term-command-bar">
          <button className="term-cmd" onClick={handleClear}>cls</button>
          <button className="term-cmd" onClick={handleReset}>reset</button>
          <button className="term-cmd primary" onClick={handleToggle}>
            {isActive && !isPaused ? 'pause' : 'start'}
          </button>
          {sessionType === 'focus' ? (
            <button className="term-cmd" onClick={handleManualSave} disabled={elapsedTime === 0}>save</button>
          ) : (
            <button className="term-cmd" onClick={handleSkip}>skip</button>
          )}
        </div>
      )}

      {/* Navigation as tabs */}
      <nav className="term-nav">
        <button 
          className={`term-tab ${activeTab === 'home' ? 'active' : ''}`} 
          onClick={() => setActiveTab('home')}
        >
          [1] timer
        </button>
        <button 
          className={`term-tab ${activeTab === 'history' ? 'active' : ''}`} 
          onClick={() => setActiveTab('history')}
        >
          [2] logs
        </button>
        <button 
          className={`term-tab ${activeTab === 'settings' ? 'active' : ''}`} 
          onClick={() => setActiveTab('settings')}
        >
          [3] config
        </button>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap');
        
        .frame6-terminal {
          background: #0c0c0c;
          font-family: 'IBM Plex Mono', 'Consolas', monospace;
          color: #00ff00;
          display: flex;
          flex-direction: column;
          font-size: 12px;
          line-height: 1.4;
        }

        .term-header {
          background: #1a1a1a;
          padding: 6px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #333;
        }

        .term-title {
          font-size: 11px;
          color: #888;
        }

        .term-controls {
          display: flex;
          gap: 8px;
        }

        .term-controls .term-btn {
          font-size: 12px;
          cursor: pointer;
        }

        .term-controls .minimize { color: #ffbd2e; }
        .term-controls .maximize { color: #28c840; }
        .term-controls .close { color: #ff5f56; }

        .term-content {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          padding-bottom: 80px;
        }

        .term-output {
          margin-bottom: 10px;
        }

        .term-line {
          white-space: pre;
          margin-bottom: 2px;
        }

        .term-line.system {
          color: #0087ff;
        }

        .term-line.command {
          color: #ffff00;
        }

        .term-line.comment {
          color: #666;
        }

        .term-line.success {
          color: #00ff00;
        }

        .term-line.info {
          color: #00bfff;
        }

        .term-line.error {
          color: #ff4444;
        }

        .term-line.timer-display {
          text-align: center;
          margin: 10px 0;
        }

        .term-time {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }

        .term-line.progress {
          text-align: center;
          color: #00bfff;
          font-size: 11px;
        }

        .term-label {
          color: #888;
          margin-right: 8px;
        }

        .term-value {
          color: #00ff00;
        }

        .term-value.focus {
          color: #ff6b6b;
        }

        .term-value.break {
          color: #4ecdc4;
        }

        /* Dialog */
        .term-dialog {
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 10px;
          margin: 10px 0;
        }

        .term-input {
          background: transparent;
          border: none;
          color: #00ff00;
          font-family: inherit;
          font-size: inherit;
          outline: none;
          width: calc(100% - 20px);
        }

        .term-input::placeholder {
          color: #444;
        }

        .term-actions {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .term-btn-action {
          background: transparent;
          border: 1px solid #00ff00;
          color: #00ff00;
          padding: 4px 12px;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
        }

        .term-btn-action.primary {
          background: #00ff00;
          color: #0c0c0c;
        }

        /* Command bar */
        .term-command-bar {
          position: absolute;
          bottom: 32px;
          left: 0;
          right: 0;
          display: flex;
          gap: 4px;
          padding: 6px 10px;
          background: #0c0c0c;
          border-top: 1px solid #333;
          z-index: 10;
        }

        .term-cmd {
          flex: 1;
          background: #1a1a1a;
          border: 1px solid #333;
          color: #00ff00;
          padding: 8px;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.1s;
        }

        .term-cmd:hover {
          background: #333;
        }

        .term-cmd:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .term-cmd.primary {
          border-color: #00ff00;
          background: rgba(0, 255, 0, 0.1);
        }

        .term-cmd.danger {
          border-color: #ff4444;
          color: #ff4444;
        }

        /* History */
        .term-history-item {
          display: flex;
          gap: 12px;
          font-size: 11px;
          padding: 2px 0;
        }

        .term-history-item .perm {
          color: #888;
        }

        .term-history-item .size {
          color: #00bfff;
          min-width: 30px;
        }

        .term-history-item .name {
          color: #00ff00;
          flex: 1;
        }

        .term-rm {
          background: transparent;
          border: none;
          color: #ff4444;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
          padding: 0 4px;
        }

        .term-rm:hover {
          background: #ff4444;
          color: #0c0c0c;
        }

        /* Settings */
        .term-config-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .config-key {
          color: #ffff00;
        }

        .config-value {
          color: #00ff00;
          min-width: 30px;
          text-align: center;
        }

        .config-comment {
          color: #666;
          margin-left: auto;
        }

        .term-config-item button {
          background: #1a1a1a;
          border: 1px solid #333;
          color: #00ff00;
          padding: 2px 6px;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        /* Navigation */
        .term-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 32px;
          background: #1a1a1a;
          border-top: 1px solid #333;
          display: flex;
          z-index: 10;
        }

        .term-tab {
          flex: 1;
          background: transparent;
          border: none;
          border-right: 1px solid #333;
          color: #666;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        .term-tab:last-child {
          border-right: none;
        }

        .term-tab.active {
          background: #0c0c0c;
          color: #00ff00;
        }

        .term-tab:hover {
          color: #00ff00;
        }
      `}</style>
    </div>
  );
};

export default Frame6_Terminal;
