import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { colors } from '../shared/Color';
import { viewportHeight, viewportWidth } from '../metrics.style';

export const THUMBNAIL_SIZE = viewportHeight * 0.15;

export const styles = StyleSheet.create({
    container: {
        width: viewportWidth / 2 - 20,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'blue',
    },
    containerInner: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: THUMBNAIL_SIZE + 40,
        height: THUMBNAIL_SIZE + 40,
        borderWidth: 1,
        borderColor: chroma(colors.main.orange).alpha(0.5).css(),
    },
    thumbnail: {
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: colors.main.orange,
    },
});