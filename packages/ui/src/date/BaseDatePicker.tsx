import {
  type DPDay,
  type DatePickerProviderProps,
  useDatePickerContext,
} from '@rehookify/datepicker';

import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, Button, H3, View, isClient } from 'tamagui';

import {
  CalendarHeader,
  DatePicker,
  DatePickerInput,
  type HeaderType,
  HeaderTypeProvider,
  MonthPicker,
  WeekView,
  YearPicker,
  YearRangeSlider,
  swapOnClick,
  useHeaderType,
} from './dateParts';
import { useDateAnimation } from './useDateAnimation';

function DateHeader() {
  const {
    data: { calendars },
    propGetters: { subtractOffset },
  } = useDatePickerContext();
  const { type: header, setHeader } = useHeaderType();

  // Add null check for calendars
  if (!calendars || !calendars[0]) {
    return null;
  }

  const { year, month } = calendars[0];

  if (header === 'year') {
    return <YearRangeSlider />;
  }

  if (header === 'month') {
    return (
      <H3 size="$7" alignSelf="center">
        Select a month
      </H3>
    );
  }
  return (
    <View flexDirection="row" w="100%" alignItems="center" justifyContent="space-between">
      <Button circular size="$4" {...swapOnClick(subtractOffset({ months: 1 }))}>
        <Button.Icon scaleIcon={1.5}>
          <ChevronLeft />
        </Button.Icon>
      </Button>

      <CalendarHeader year={year} month={month} setHeader={setHeader} />

      <Button circular size="$4" {...swapOnClick(subtractOffset({ months: -1 }))}>
        <Button.Icon scaleIcon={1.5}>
          <ChevronRight />
        </Button.Icon>
      </Button>
    </View>
  );
}

function DayPicker() {
  const {
    data: { calendars, weekDays },
    propGetters: { dayButton },
  } = useDatePickerContext();

  const { prevNextAnimation, prevNextAnimationKey } = useDateAnimation({
    listenTo: 'month',
  });

  const days = calendars?.[0]?.days;

  // divide days array into sub arrays that each has 7 days, for better stylings
  const subDays = useMemo(
    () =>
      days?.reduce((acc, day, i) => {
        if (i % 7 === 0) {
          acc.push([]);
        }
        acc[acc.length - 1].push(day);
        return acc;
      }, [] as DPDay[][]) || [],
    [days]
  );

  // Add null checks for calendars and days
  if (!calendars || !calendars[0] || !calendars[0].days) {
    return null;
  }

  return (
    <AnimatePresence key={prevNextAnimationKey}>
      <View w="100%" gap="$4" animation="medium" {...prevNextAnimation()}>
        <WeekView weekDays={weekDays} />

        <View flexDirection="column" gap="$2" ai="center" jc="center" w="100%">
          {subDays.map(days => {
            return (
              <View
                jc="space-between"
                ai="center"
                flexDirection="row"
                key={days[0].$date.toString()}
                gap="$1"
                flex={1}
                w="100%"
              >
                {days.map(d => (
                  <Button
                    key={d.$date.toString()}
                    chromeless
                    circular
                    padding={0}
                    {...swapOnClick(dayButton(d))}
                    backgroundColor={d.selected ? '$background' : 'transparent'}
                    themeInverse={d.selected}
                    disabled={!d.inCurrentMonth}
                  >
                    <Button.Text
                      fontWeight="500"
                      fontSize="$4"
                      color={d.selected ? '$gray12' : d.inCurrentMonth ? '$gray11' : '$gray6'}
                    >
                      {d.day}
                    </Button.Text>
                  </Button>
                ))}
              </View>
            );
          })}
        </View>
      </View>
    </AnimatePresence>
  );
}

function DatePickerBody({ config }: { config: DatePickerProviderProps['config'] }) {
  const [header, setHeader] = useState<HeaderType>('day');

  return (
    <HeaderTypeProvider config={config} type={header} setHeader={setHeader}>
      <View flexDirection="column" alignItems="center" gap="$4" w="100%" p="$4" $gtMd={{ p: '$2' }}>
        <DateHeader />
        {header === 'month' && <MonthPicker onChange={() => setHeader('day')} />}
        {header === 'year' && <YearPicker onChange={() => setHeader('day')} />}
        {header === 'day' && <DayPicker />}
      </View>
    </HeaderTypeProvider>
  );
}

/** ------ EXAMPLE ------ */
export function UiBaseDatePicker() {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (selectedDates.length > 0) {
      setOpen(false);
    }
  }, [selectedDates]);

  const config: DatePickerProviderProps['config'] = {
    selectedDates,
    onDatesChange,
    calendar: {
      startDay: 1,
    },
  };

  // Prevent SSR hydration mismatch by only rendering on client
  if (!isMounted || !isClient) {
    return (
      <View borderWidth={1} borderColor="$borderColor" borderRadius="$4" padding="$3">
        <View opacity={0.5}>
          <DatePickerInput
            placeholder="Select Date"
            value=""
            onReset={() => {}}
            onButtonPress={() => {}}
          />
        </View>
      </View>
    );
  }

  return (
    <DatePicker keepChildrenMounted open={open} onOpenChange={setOpen} config={config}>
      <DatePicker.Trigger asChild>
        <DatePickerInput
          placeholder="Select Date"
          value={selectedDates[0]?.toDateString() || ''}
          onReset={() => onDatesChange([])}
          onButtonPress={() => setOpen(true)}
        />
      </DatePicker.Trigger>

      <DatePicker.Content>
        <DatePicker.Content.Arrow />
        <DatePickerBody config={config} />
      </DatePicker.Content>
    </DatePicker>
  );
}
