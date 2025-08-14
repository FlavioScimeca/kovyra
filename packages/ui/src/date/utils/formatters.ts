import type { DateRange } from '../types';
import { QUARTERS } from './constants';

/**
 * Date formatting utilities
 */

export function formatDate(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale);
}

export function formatDateShort(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateLong(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateTime(
  date: Date,
  locale = 'en-US',
  format: '12h' | '24h' = '12h'
): string {
  const dateStr = formatDate(date, locale);
  const timeStr = date.toLocaleTimeString(locale, {
    hour12: format === '12h',
    hour: 'numeric',
    minute: '2-digit',
  });
  return `${dateStr} ${timeStr}`;
}

export function formatDateRange(range: DateRange, locale = 'en-US'): string {
  const startStr = formatDateShort(range.start, locale);
  const endStr = formatDateShort(range.end, locale);
  return `${startStr} – ${endStr}`;
}

export function formatMultipleDates(dates: Date[], locale = 'en-US'): string {
  if (dates.length === 0) return '';
  if (dates.length === 1) return formatDate(dates[0], locale);

  const sortedDates = dates.sort((a, b) => a.getTime() - b.getTime());
  const formatted = sortedDates.map(date => formatDateShort(date, locale));

  if (formatted.length <= 3) {
    return formatted.join(', ');
  }

  return `${formatted[0]}, ${formatted[1]}, +${formatted.length - 2} more`;
}

export function formatMonth(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
  });
}

export function formatYear(date: Date): string {
  return date.getFullYear().toString();
}

export function formatQuarter(quarter: 1 | 2 | 3 | 4, year: number): string {
  const q = QUARTERS.find(q => q.quarter === quarter);
  return `${q?.name} ${year}`;
}

export function formatWeek(date: Date, format: 'ISO' | 'US' = 'ISO'): string {
  const year = date.getFullYear();

  if (format === 'ISO') {
    // ISO week starts on Monday
    const startOfYear = new Date(year, 0, 1);
    const dayOfYear =
      Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000)) + 1;
    const weekNumber = Math.ceil(dayOfYear / 7);
    return `Week ${weekNumber}, ${year}`;
  } else {
    // US week starts on Sunday
    const startOfYear = new Date(year, 0, 1);
    const dayOfYear =
      Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000)) + 1;
    const weekNumber = Math.ceil(dayOfYear / 7);
    return `Week ${weekNumber}, ${year}`;
  }
}

export function getPlaceholderText(mode: string): string {
  switch (mode) {
    case 'single':
      return 'Select date';
    case 'range':
      return 'Select date range';
    case 'multiple':
      return 'Select dates';
    case 'multiple-ranges':
      return 'Select date ranges';
    case 'datetime':
      return 'Select date and time';
    case 'month':
      return 'Select month';
    case 'year':
      return 'Select year';
    case 'quarter':
      return 'Select quarter';
    case 'week':
      return 'Select week';
    default:
      return 'Select date';
  }
}
