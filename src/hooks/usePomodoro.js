
import { useState, useEffect, useRef, useCallback } from 'react';

// Audio files are in public/sounds/ to avoid build path issues
// import sessionCompleteSound from '../assets/session-complete.mp3';
// import breakCompleteSound from '../assets/break-time-complete.mp3';

export const usePomodoro = (defaultFocusTime = 25, defaultBreakTime = 5) => {
  const [focusDuration, setFocusDuration] = useState(defaultFocusTime);
  const [breakDuration, setBreakDuration] = useState(defaultBreakTime);
  const [timeLeft, setTimeLeft] = useState(defaultFocusTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sessionType, setSessionType] = useState('focus'); // 'focus' or 'break'
  const [sessions, setSessions] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  // Audio refs
  // Audio refs - using direct paths from public folder with base URL
  const sessionAudioRef = useRef(new Audio(`${import.meta.env.BASE_URL}sounds/session-complete.mp3`));
  const breakAudioRef = useRef(new Audio(`${import.meta.env.BASE_URL}sounds/break-time-complete.mp3`));

  // Play notification sound
  const playSound = useCallback((type) => {
    const audio = type === 'focus' ? sessionAudioRef.current : breakAudioRef.current;
    audio.currentTime = 0;
    audio.play().catch(err => console.log('Audio playback failed:', err));
  }, []);

  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      clearInterval(timerRef.current);
      setIsActive(false);
      setIsPaused(false);
      
      if (sessionType === 'focus') {
        // Focus completed - play sound and show save modal
        playSound('focus');
        setShowSaveModal(true);
      } else {
        // Break completed - play sound and start new focus
        playSound('break');
        startFocusSession();
      }
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, isPaused, timeLeft, sessionType, playSound]);

  const startFocusSession = useCallback(() => {
    setSessionType('focus');
    setTimeLeft(focusDuration * 60);
    setElapsedTime(0);
    setIsActive(false);
    setIsPaused(false);
  }, [focusDuration]);

  const startBreakSession = useCallback(() => {
    setSessionType('break');
    setTimeLeft(breakDuration * 60);
    setElapsedTime(0);
    setIsActive(true);
    setIsPaused(false);
  }, [breakDuration]);

  const toggleTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPaused(false);
      startTimeRef.current = Date.now();
    } else if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(focusDuration * 60);
    setElapsedTime(0);
    setSessionType('focus');
  };

  const saveSession = (name) => {
    const minutes = Math.ceil(elapsedTime / 60);
    const newSession = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: name || 'Unnamed Session',
      duration: minutes,
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date().toISOString()
    };
    setSessions(prev => [newSession, ...prev]);
    setShowSaveModal(false);
    showToastMessage(`"${name}" was successfully saved!`);
    
    // Start break time
    setTimeout(() => {
      startBreakSession();
    }, 1500);
  };

  const cancelSave = () => {
    setShowSaveModal(false);
    // Start break time immediately
    startBreakSession();
  };

  const skipBreak = () => {
    startFocusSession();
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deleteSession = (id) => {
    setSessions(prev => prev.filter(s => s.id !== id));
  };

  const clearAllSessions = () => {
    setSessions([]);
  };

  // Manual save during focus (partial save)
  const manualSave = () => {
    if (sessionType === 'focus' && elapsedTime > 0) {
      setIsActive(false);
      setIsPaused(false);
      setShowSaveModal(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const updateSettings = (newFocusDuration, newBreakDuration) => {
    setFocusDuration(newFocusDuration);
    setBreakDuration(newBreakDuration);
    if (!isActive) {
      setTimeLeft(newFocusDuration * 60);
    }
  };

  // Group sessions by date for history
  const groupedSessions = sessions.reduce((groups, session) => {
    const date = session.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(session);
    return groups;
  }, {});

  return {
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
    sessions,
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
    formatTime,
    startFocusSession
  };
};
