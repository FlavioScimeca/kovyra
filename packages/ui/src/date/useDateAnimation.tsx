import { useDatePickerContext } from '@rehookify/datepicker';
import { useCallback, useEffect, useState } from 'react';

export function useDateAnimation({
  listenTo,
}: {
  listenTo: 'year' | 'month' | 'years';
}) {
  const {
    data: { years, calendars },
  } = useDatePickerContext();
  const [currentMonth, setCurrentMonth] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<string | null>(null);
  const [currentYearsSum, setCurrentYearsSum] = useState<number | null>(null);

  const sumYears = useCallback(() => {
    return years.reduce((acc, date) => acc + date.year, 0);
  }, [years]);
  useEffect(() => {
    if (listenTo === 'years') {
      const newSum = sumYears();
      if (currentYearsSum !== newSum) {
        setCurrentYearsSum(newSum);
      }
    }
  }, [listenTo, currentYearsSum, sumYears]);

  useEffect(() => {
    if (listenTo === 'month' && calendars?.[0]?.month) {
      if (currentMonth !== calendars[0].month) {
        setCurrentMonth(calendars[0].month);
      }
    }
  }, [listenTo, calendars, currentMonth]);

  useEffect(() => {
    if (listenTo === 'year' && calendars?.[0]?.year) {
      if (currentYear !== calendars[0].year) {
        setCurrentYear(calendars[0].year);
      }
    }
  }, [listenTo, calendars, currentYear]);

  const getYearsAnimation = () => {
    if (currentYearsSum === null) return { enterStyle: { opacity: 0 } };
    const direction = sumYears() < currentYearsSum ? -15 : 15;
    return {
      enterStyle: { opacity: 0, x: direction },
      exitStyle: { opacity: 0, x: direction },
    };
  };

  const getMonthAnimation = () => {
    if (currentMonth === null || !calendars?.[0]) return { enterStyle: { opacity: 0 } };

    const newDate = new Date(`${calendars[0][listenTo]} 1, ${calendars[0].year}`);
    const currentDate = new Date(`${currentMonth} 1, ${calendars[0].year}`);

    // Handle year transition edge cases
    if (currentMonth === 'December' && calendars[0].month === 'January') {
      return {
        enterStyle: { opacity: 0, x: 15 },
        exitStyle: { opacity: 0, x: 15 },
      };
    }
    if (currentMonth === 'January' && calendars[0].month === 'December') {
      return {
        enterStyle: { opacity: 0, x: -15 },
        exitStyle: { opacity: 0, x: -15 },
      };
    }

    const direction = newDate < currentDate ? -15 : 15;
    return {
      enterStyle: { opacity: 0, x: direction },
      exitStyle: { opacity: 0, x: direction },
    };
  };

  const getYearAnimation = () => {
    if (currentYear === null || !calendars?.[0]) return { enterStyle: { opacity: 0 } };

    const newDate = new Date(`${calendars[0].month} 1, ${calendars[0].year}`);
    const currentDate = new Date(`${calendars[0].month} 1, ${currentYear}`);
    const direction = newDate < currentDate ? -15 : 15;

    return {
      enterStyle: { opacity: 0, x: direction },
      exitStyle: { opacity: 0, x: direction },
    };
  };

  const prevNextAnimation = () => {
    if (listenTo === 'years') return getYearsAnimation();
    if (listenTo === 'month') return getMonthAnimation();
    if (listenTo === 'year') return getYearAnimation();
    return { enterStyle: { opacity: 0 } };
  };
  return {
    prevNextAnimation,
    prevNextAnimationKey:
      listenTo === 'years' ? sumYears() : calendars?.[0]?.[listenTo] || 'default',
  };
}
