import type { CalendarConfig, DateRange } from '../types';
import { isDateDisabled } from './calculations';

/**
 * Date validation utilities
 */

export function isValidDate(date: unknown): date is Date {
  return date instanceof Date && !isNaN(date.getTime());
}

export function isValidDateRange(range: unknown): range is DateRange {
  if (!range || typeof range !== 'object') return false;
  const r = range as any;
  return isValidDate(r.start) && isValidDate(r.end) && r.start <= r.end;
}

export function isValidDateArray(dates: unknown): dates is Date[] {
  return Array.isArray(dates) && dates.every(isValidDate);
}

export function isValidDateRangeArray(ranges: unknown): ranges is DateRange[] {
  return Array.isArray(ranges) && ranges.every(isValidDateRange);
}

export function validateDateSelection(
  date: Date,
  config: CalendarConfig
): { valid: boolean; error?: string } {
  if (!isValidDate(date)) {
    return { valid: false, error: 'Invalid date' };
  }

  if (
    isDateDisabled(
      date,
      config.minDate,
      config.maxDate,
      config.disabledDates,
      config.disabledDaysOfWeek
    )
  ) {
    return { valid: false, error: 'Date is disabled' };
  }

  return { valid: true };
}

export function validateDateRangeSelection(
  range: DateRange,
  config: CalendarConfig
): { valid: boolean; error?: string } {
  if (!isValidDateRange(range)) {
    return { valid: false, error: 'Invalid date range' };
  }

  const startValidation = validateDateSelection(range.start, config);
  if (!startValidation.valid) {
    return { valid: false, error: `Start date: ${startValidation.error}` };
  }

  const endValidation = validateDateSelection(range.end, config);
  if (!endValidation.valid) {
    return { valid: false, error: `End date: ${endValidation.error}` };
  }

  return { valid: true };
}

export function validateMultipleDateSelection(
  dates: Date[],
  config: CalendarConfig,
  maxDates?: number
): { valid: boolean; error?: string } {
  if (!isValidDateArray(dates)) {
    return { valid: false, error: 'Invalid date array' };
  }

  if (maxDates && dates.length > maxDates) {
    return { valid: false, error: `Cannot select more than ${maxDates} dates` };
  }

  for (const date of dates) {
    const validation = validateDateSelection(date, config);
    if (!validation.valid) {
      return validation;
    }
  }

  return { valid: true };
}
