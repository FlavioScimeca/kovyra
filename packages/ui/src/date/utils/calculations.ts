import type { DateRange } from '../types';

/**
 * Date calculation utilities
 */

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isSameMonth(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}

export function isSameYear(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear();
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export function startOfWeek(date: Date, startOfWeek = 1): Date {
  const result = new Date(date);
  const day = result.getDay();
  const diff = (day < startOfWeek ? 7 : 0) + day - startOfWeek;
  result.setDate(result.getDate() - diff);
  return result;
}

export function endOfWeek(date: Date, startOfWeek = 1): Date {
  const result = startOfWeek(date, startOfWeek);
  result.setDate(result.getDate() + 6);
  return result;
}

export function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

export function getDaysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
}

export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

export function isDateInRange(date: Date, range: DateRange): boolean {
  return date >= range.start && date <= range.end;
}

export function isDateDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[],
  disabledDaysOfWeek?: number[]
): boolean {
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  if (disabledDates?.some(d => isSameDay(date, d))) return true;
  if (disabledDaysOfWeek?.includes(date.getDay())) return true;
  return false;
}

export function getQuarter(date: Date): 1 | 2 | 3 | 4 {
  const month = date.getMonth();
  return Math.ceil((month + 1) / 3) as 1 | 2 | 3 | 4;
}

export function getQuarterStartDate(year: number, quarter: 1 | 2 | 3 | 4): Date {
  const month = (quarter - 1) * 3;
  return new Date(year, month, 1);
}

export function getQuarterEndDate(year: number, quarter: 1 | 2 | 3 | 4): Date {
  const month = quarter * 3 - 1;
  return endOfMonth(new Date(year, month, 1));
}
