import { Calendar, X } from '@tamagui/lucide-icons';
import { Button, Input, View } from 'tamagui';
import type { DateInputProps } from '../../types';

export function DateInput({
  value = '',
  placeholder = 'Select date',
  error = false,
  size = '$3',
  onClear,
  onButtonPress,
  showClearButton = true,
  icon = 'calendar',
  ...props
}: DateInputProps) {
  const IconComponent = icon === 'calendar' ? Calendar : Calendar; // Add more icons as needed

  return (
    <View flexDirection="row" position="relative">
      <Input
        flex={1}
        value={value}
        placeholder={placeholder}
        editable={false}
        size={size}
        borderColor={error ? '$red9' : '$borderColor'}
        cursor="pointer"
        onPress={onButtonPress}
        paddingRight="$8"
        {...props}
      />

      <View
        position="absolute"
        right="$2"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        flexDirection="row"
        alignItems="center"
        gap="$1"
      >
        {value && showClearButton && onClear && (
          <Button
            size="$2"
            circular
            chromeless
            onPress={e => {
              e.stopPropagation();
              onClear();
            }}
          >
            <X size={16} />
          </Button>
        )}

        <Button size="$2" circular chromeless onPress={onButtonPress}>
          <IconComponent size={16} />
        </Button>
      </View>
    </View>
  );
}
