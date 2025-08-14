import type { UseMonthProps } from '@datepicker-react/hooks';
import { useMonth } from '@datepicker-react/hooks';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from '@tamagui/lucide-icons';
import { Button, H5, H6, SizableText, Stack, XStack } from 'tamagui';
import { useDatepickerContext } from '../providers/DatepickerProvider';
import { UiDay } from './Day';

export type UiMonthProps = UseMonthProps & {
  onPrevious?: () => void;
  onNext?: () => void;
  monthsCount: number;
  isFirst: boolean;
  isLast: boolean;
};

export function UiMonth({
  onPrevious,
  onNext,
  monthsCount,
  isFirst,
  isLast,
  ...props
}: UiMonthProps) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    ...props,
    monthLabelFormat(date: Date) {
      return new Intl.DateTimeFormat(undefined, { month: 'long' }).format(date);
    },
  });
  const {
    goToPreviousYear,
    goToPreviousMonths,
    goToPreviousMonthsByOneMonth,
    goToNextMonthsByOneMonth,
    goToNextMonths,
    goToNextYear,
  } = useDatepickerContext();

  const { year } = props;

  return (
    <Stack width={250}>
      <XStack space={'$2'} justifyContent={'center'} alignItems={'center'}>
        <Button
          size={'$2'}
          chromeless
          focusable={false}
          circular
          onPress={() => goToPreviousYear(10)}
          icon={<ChevronsLeft />}
        />
        <Button
          size={'$2'}
          chromeless
          circular
          focusable={false}
          onPress={() => goToPreviousYear(1)}
          icon={<ChevronsLeft />}
        />
        <H6>{year}</H6>
        <Button
          size={'$2'}
          chromeless
          focusable={false}
          onPress={() => goToNextYear(1)}
          icon={<ChevronsRight />}
          circular
        />
        <Button
          size={'$2'}
          chromeless
          circular
          focusable={false}
          onPress={() => goToNextYear(10)}
          icon={<ChevronsRight />}
        />
      </XStack>

      <XStack justifyContent={'space-between'} alignItems={'center'} height={40}>
        <Button
          focusable={false}
          opacity={isFirst ? undefined : 0}
          disabled={!isFirst}
          onPress={monthsCount > 1 ? goToPreviousMonths : goToPreviousMonthsByOneMonth}
          icon={<ChevronLeft />}
          circular
          chromeless
        />

        <H5>{monthLabel}</H5>

        <Button
          focusable={false}
          opacity={isLast ? undefined : 0}
          disabled={!isLast}
          onPress={monthsCount > 1 ? goToNextMonths : goToNextMonthsByOneMonth}
          icon={<ChevronRight />}
          circular
          chromeless
        />
      </XStack>
      <XStack flex={7} width={250}>
        {weekdayLabels.map(dayLabel => (
          <SizableText
            width={`${100 / 7}%`}
            key={dayLabel}
            textAlign={'center'}
            paddingVertical={'$2'}
          >
            {dayLabel}
          </SizableText>
        ))}
      </XStack>
      <XStack display={'flex'} flexWrap={'wrap'} width={250}>
        {days.map((day, index) => {
          if (typeof day === 'object') {
            return <UiDay dayLabel={day.dayLabel} date={day.date} key={day.date.toString()} />;
          }
          return <Stack key={index} width={`${100 / 7}%`} />;
        })}
      </XStack>
      <XStack display={'flex'} />
    </Stack>
  );
}
