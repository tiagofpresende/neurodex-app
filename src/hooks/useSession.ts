import { useState, useEffect, useCallback } from 'react';
import { SessionData, Demographics } from '../engine/types';

const SESSION_KEY = 'neurodex_session';
const EXPIRY_HOURS = 72;

export function useSession() {
  const [session, setSessionState] = useState<SessionData | null>(null);
  const [hasSavedSession, setHasSavedSession] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as SessionData;
        const now = Date.now();
        const hoursSinceStart = (now - parsed.startedAt) / (1000 * 60 * 60);

        if (!parsed.completed && hoursSinceStart < EXPIRY_HOURS) {
          setHasSavedSession(true);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } catch (e) {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  const createSession = useCallback(() => {
    const newSession: SessionData = {
      startedAt: Date.now(),
      seed: Date.now(),
      demographics: null,
      answers: {},
      currentBlock: 0,
      currentItemInBlock: 0,
      completed: false
    };
    setSessionState(newSession);
    localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
    setHasSavedSession(false);
    return newSession;
  }, []);

  const restoreSession = useCallback(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as SessionData;
        setSessionState(parsed);
        setHasSavedSession(false);
      } catch(e) {}
    }
  }, []);

  const clearSession = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setSessionState(null);
    setHasSavedSession(false);
  }, []);

  const updateAnswers = useCallback((questionId: string, value: number) => {
    setSessionState(prev => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        answers: { ...prev.answers, [questionId]: value }
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateProgress = useCallback((block: number, item: number) => {
    setSessionState(prev => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        currentBlock: block,
        currentItemInBlock: item
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateDemographics = useCallback((demo: Demographics) => {
    setSessionState(prev => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        demographics: demo
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const markCompleted = useCallback(() => {
    setSessionState(prev => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        completed: true
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return {
    session,
    hasSavedSession,
    createSession,
    restoreSession,
    clearSession,
    updateAnswers,
    updateProgress,
    updateDemographics,
    markCompleted
  };
}
