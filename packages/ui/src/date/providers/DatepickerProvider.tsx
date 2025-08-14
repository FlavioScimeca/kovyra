import { type PropsWithChildren, type ReactNode, createContext, useContext } from 'react';

interface UiDatepickerContext {
  rtl?: boolean;
  focusedDate: Date | null;
  goToPreviousMonths: () => void;
  goToPreviousMonthsByOneMonth: () => void;
  goToNextMonths: () => void;
  goToNextMonthsByOneMonth: () => void;
  goToPreviousYear: (numYears?: number) => void;
  goToNextYear: (numYears?: number) => void;

  onDateFocus(date: Date): void;

  onDateSelect(date: Date): void;

  onDateHover(date: Date): void;

  isDateFocused(date: Date): boolean;

  isDateSelected(date: Date): boolean;

  isDateHovered(date: Date): boolean;

  isDateBlocked(date: Date): boolean;

  isFirstOrLastSelectedDate(date: Date): boolean;

  onDayRender?(date: Date): ReactNode;
}

export const datepickerContextDefaultValue = {
  rtl: false,
  focusedDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => {},
  onDateHover: () => {},
  onDateSelect: () => {},
  onDayRender: undefined,
  goToPreviousMonthsByOneMonth: () => {},
  goToPreviousMonths: () => {},
  goToNextMonthsByOneMonth: () => {},
  goToNextMonths: () => {},
  goToPreviousYear: () => {},
  goToNextYear: () => {},
};

const UiDatepickerContext = createContext<UiDatepickerContext>(datepickerContextDefaultValue);

export type UiDatepickerProviderProps = PropsWithChildren<UiDatepickerContext>;

export const UiDatepickerProvider = ({ children, ...value }: UiDatepickerProviderProps) => {
  return <UiDatepickerContext.Provider value={value}>{children}</UiDatepickerContext.Provider>;
};

export const useDatepickerContext = () => useContext(UiDatepickerContext);
