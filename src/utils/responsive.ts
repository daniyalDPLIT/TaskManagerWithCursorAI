import { Dimensions, PixelRatio } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const widthRatio = SCREEN_WIDTH / guidelineBaseWidth;
const heightRatio = SCREEN_HEIGHT / guidelineBaseHeight;

export const normalize = (size: number, based: 'width' | 'height' = 'width') => {
    const newSize = based === 'height' ? size * heightRatio : size * widthRatio;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const wp = (percentage: number) => widthPercentageToDP(percentage);
export const hp = (percentage: number) => heightPercentageToDP(percentage);

export const isSmallDevice = SCREEN_WIDTH < 375;
export const isTablet = SCREEN_WIDTH >= 768; 