import { useWindowDimensions } from 'react-native';
import { Orientation } from '../types/enums/Orientation.enum';

export const useOrientation = () => {
    const { width, height } = useWindowDimensions();
    return width > height ? Orientation.LANDSCAPE : Orientation.PORTRAIT;
}