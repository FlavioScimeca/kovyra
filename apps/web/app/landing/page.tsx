'use client';

import { SingleDatePicker, UiBaseDatePicker, UiStack } from '@kovyra/ui';
import { useState } from 'react';

export default function LandingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <UiStack padding="$4" gap="$4">
      <h2>Legacy DatePicker:</h2>
      <UiBaseDatePicker />

      <h2>New SingleDatePicker:</h2>
      <SingleDatePicker value={selectedDate} onChange={setSelectedDate} placeholder="Pick a date" />

      {selectedDate && <text>Selected: {selectedDate.toDateString()}</text>}
    </UiStack>
  );
}
