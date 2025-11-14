import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type ChatChipVariant = 'primary' | 'secondary';

export interface ChatChipProps {
  variant?: ChatChipVariant;
  text: string;
  onClick: () => void;
}

export function ChatChip({ variant = 'primary', text, onClick }: ChatChipProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.base,
        isPrimary ? styles.primary : styles.secondary
      ]}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.text,
        isPrimary ? styles.primaryText : styles.secondaryText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  primary: {
    backgroundColor: '#0d4143',
    borderWidth: 2,
    borderColor: '#629292',
    paddingVertical:12,
    paddingHorizontal:16
  },
  secondary: {
    backgroundColor: '#e8f0f0',
    borderWidth: 0,
    paddingVertical:6,
    paddingHorizontal:8,
    borderColor: '#F6F6F6',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize:16,
    lineHeight:22
    
  },
  secondaryText: {
    color: '#000000',
    fontSize:12,
    lineHeight:22
  },
});