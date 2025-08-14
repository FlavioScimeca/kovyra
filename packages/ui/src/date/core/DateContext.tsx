import { createContext, useContext } from 'react';
import type { CalendarConfig, CalendarMode, SelectionType } from '../types';

export interface DateContextValue {
  // Configuration
  config: CalendarConfig;
  mode: CalendarMode;

  // Current state
  currentMonth: Date;
  currentYear: number;

  // Selection state
  value: SelectionType;

  // Navigation
  goToNextMonth: () => void;
  goToPreviousMonth: () => void;
  goToNextYear: () => void;
  goToPreviousYear: () => void;
  goToMonth: (month: number, year: number) => void;
  goToYear: (year: number) => void;

  // Selection handlers
  selectDate: (date: Date) => void;
  selectRange: (start: Date, end?: Date) => void;
  clearSelection: () => void;

  // UI state
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  hoveredDate: Date | null;
  setHoveredDate: (date: Date | null) => void;
}

export const DateContext = createContext<DateContextValue | null>(null);

export function useDateContext(): DateContextValue {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDateContext must be used within a DateProvider');
  }
  return context;
}
