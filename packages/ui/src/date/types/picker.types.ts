import type { ComponentProps } from 'react';
import type { PopoverProps } from 'tamagui';
import type { CalendarConfig, DateRange, SelectionType } from './calendar.types';

export interface BasePickerProps {
  value?: SelectionType;
  onChange?: (value: SelectionType) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  size?: '$1' | '$2' | '$3' | '$4' | '$5';
  config?: Partial<CalendarConfig>;
  popoverProps?: Partial<PopoverProps>;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface SingleDatePickerProps extends BasePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

export interface RangeDatePickerProps extends BasePickerProps {
  value?: DateRange | null;
  onChange?: (range: DateRange | null) => void;
  allowSingleDate?: boolean;
}

export interface MultipleDatePickerProps extends BasePickerProps {
  value?: Date[];
  onChange?: (dates: Date[]) => void;
  maxDates?: number;
}

export interface MultipleRangePickerProps extends BasePickerProps {
  value?: DateRange[];
  onChange?: (ranges: DateRange[]) => void;
  maxRanges?: number;
}

export interface DateTimePickerProps extends BasePickerProps {
  value?: Date | null;
  onChange?: (datetime: Date | null) => void;
  showTime?: boolean;
  timeFormat?: '12h' | '24h';
  minuteStep?: number;
  secondStep?: number;
}

export interface MonthPickerProps extends BasePickerProps {
  value?: Date | null;
  onChange?: (month: Date | null) => void;
  yearRange?: [number, number];
}

export interface YearPickerProps extends BasePickerProps {
  value?: Date | null;
  onChange?: (year: Date | null) => void;
  yearRange?: [number, number];
}

export interface QuarterPickerProps extends BasePickerProps {
  value?: { quarter: 1 | 2 | 3 | 4; year: number } | null;
  onChange?: (quarter: { quarter: 1 | 2 | 3 | 4; year: number } | null) => void;
  yearRange?: [number, number];
}

export interface WeekPickerProps extends BasePickerProps {
  value?: Date | null; // First day of the week
  onChange?: (week: Date | null) => void;
  weekFormat?: 'ISO' | 'US';
}

export interface DateInputProps extends ComponentProps<'input'> {
  value?: string;
  placeholder?: string;
  error?: boolean;
  size?: '$1' | '$2' | '$3' | '$4' | '$5';
  onClear?: () => void;
  onButtonPress?: () => void;
  showClearButton?: boolean;
  icon?: 'calendar' | 'clock' | 'date-range';
}
