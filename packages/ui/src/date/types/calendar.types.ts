export type CalendarMode =
  | 'single'
  | 'range'
  | 'multiple'
  | 'multiple-ranges'
  | 'month'
  | 'year'
  | 'quarter'
  | 'week'
  | 'datetime';

export type SelectionType = Date | Date[] | DateRange | DateRange[] | null;

export interface DateRange {
  start: Date;
  end: Date;
}

export interface CalendarDay {
  date: Date;
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isHovered: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}

export interface CalendarMonth {
  month: number;
  year: number;
  name: string;
  shortName: string;
  isSelected: boolean;
  isDisabled: boolean;
  isCurrent: boolean;
}

export interface CalendarYear {
  year: number;
  isSelected: boolean;
  isDisabled: boolean;
  isCurrent: boolean;
}

export interface CalendarQuarter {
  quarter: 1 | 2 | 3 | 4;
  year: number;
  name: string;
  startMonth: number;
  endMonth: number;
  isSelected: boolean;
  isDisabled: boolean;
  isCurrent: boolean;
}

export interface CalendarWeek {
  weekNumber: number;
  year: number;
  startDate: Date;
  endDate: Date;
  isSelected: boolean;
  isDisabled: boolean;
  isCurrent: boolean;
}

export interface CalendarConfig {
  mode: CalendarMode;
  locale?: string;
  startOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // Sunday = 0, Monday = 1, etc.
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  disabledDaysOfWeek?: number[];
  showWeekNumbers?: boolean;
  showOtherMonths?: boolean;
  allowClear?: boolean;
  closeOnSelect?: boolean;
}
