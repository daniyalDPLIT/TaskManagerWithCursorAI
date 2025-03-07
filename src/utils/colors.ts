const colors = {
    primary: '#007aff',
    background: '#ffffff',
    surface: '#f2f2f7',
    text: '#000000',
    textSecondary: '#6c6c6c',
    border: '#e5e5ea',
    error: '#ff3b30',
    success: '#34c759',
    info: '#5856d6',
    white: '#ffffff',
    black: '#000000',
    gray: '#8e8e93',
};

export default colors;

export const lightColors = {
    primary: '#007AFF',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#6C6C6C',
    border: '#E5E5EA',
    error: '#FF3B30',
    success: '#34C759',
    info: '#5856D6',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#8E8E93',
};

export const darkColors = {
    primary: '#0A84FF',
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#EBEBF5',
    border: '#38383A',
    error: '#FF453A',
    success: '#32D74B',
    info: '#5E5CE6',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#8E8E93',
};

export const getColors = (isDarkMode: boolean) =>
    isDarkMode ? darkColors : lightColors;

export type Colors = typeof lightColors; 