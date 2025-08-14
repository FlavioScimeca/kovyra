'use client';

import { UiText } from '@kovyra/ui/base';
import { UiButton } from '@kovyra/ui/forms';
import { useEffect, useState } from 'react';
import { View, isClient } from 'tamagui';
import type { SingleDatePickerProps } from '../types';
import { formatDate, getPlaceholderText } from '../utils';
import { DateInput } from './shared/DateInput';

/**
 * Single Date Picker Component
 * Allows selection of a single date
 */
export function SingleDatePicker({
  value = null,
  onChange,
  placeholder,
  disabled = false,
  readOnly = false,
  error = false,
  size = '$3',
  config = {},
  onOpen,
  onClose,
}: SingleDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle SSR hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-close logic
  useEffect(() => {
    if (value && config.closeOnSelect !== false) {
      setIsOpen(false);
    }
  }, [value, config.closeOnSelect]);

  const handleOpenChange = (open: boolean) => {
    if (disabled || readOnly) return;

    setIsOpen(open);
    if (open) {
      onOpen?.();
    } else {
      onClose?.();
    }
  };

  const handleDateSelect = (date: Date | null) => {
    onChange?.(date);
  };

  const handleClear = () => {
    handleDateSelect(null);
  };

  const displayValue = value ? formatDate(value) : '';
  const placeholderText = placeholder || getPlaceholderText('single');

  // Prevent SSR hydration mismatch
  if (!isMounted || !isClient) {
    return (
      <View opacity={0.5}>
        <DateInput
          value=""
          placeholder={placeholderText}
          error={error}
          size={size}
          onClear={() => {}}
          onButtonPress={() => {}}
          showClearButton={false}
        />
      </View>
    );
  }

  return (
    <View>
      <DateInput
        value={displayValue}
        placeholder={placeholderText}
        error={error}
        size={size}
        onClear={config.allowClear !== false ? handleClear : undefined}
        onButtonPress={() => handleOpenChange(!isOpen)}
        showClearButton={config.allowClear !== false && !!value}
      />

      {/* TODO: Add calendar popover here */}
      {isOpen && (
        <View
          position="absolute"
          top="100%"
          left={0}
          zIndex={1000}
          padding="$4"
          backgroundColor="$background"
          borderWidth={1}
          borderColor="$borderColor"
          borderRadius="$4"
          marginTop="$2"
          shadowColor="$shadowColor"
          shadowRadius={8}
          shadowOpacity={0.2}
        >
          <View>
            <UiText>Calendar goes here for {displayValue || 'no date'}</UiText>
            <View marginTop="$2">
              <UiButton onPress={() => handleDateSelect(new Date())}>Select Today</UiButton>
              <UiButton onPress={() => handleOpenChange(false)}>Close</UiButton>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
