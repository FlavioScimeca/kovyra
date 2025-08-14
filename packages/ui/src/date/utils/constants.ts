export const WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const WEEKDAYS_LONG = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const QUARTERS = [
  { quarter: 1 as const, name: 'Q1', months: [0, 1, 2] },
  { quarter: 2 as const, name: 'Q2', months: [3, 4, 5] },
  { quarter: 3 as const, name: 'Q3', months: [6, 7, 8] },
  { quarter: 4 as const, name: 'Q4', months: [9, 10, 11] },
];

export const DEFAULT_CALENDAR_CONFIG = {
  startOfWeek: 1, // Monday
  showWeekNumbers: false,
  showOtherMonths: true,
  allowClear: true,
  closeOnSelect: true,
} as const;
