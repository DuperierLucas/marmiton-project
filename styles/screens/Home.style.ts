import { StyleSheet } from 'react-native';
import { colors } from './../shared/Color';
import chroma from 'chroma-js';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'relative',
    },
    carouselContainer: {
        paddingBottom: 10,
    },
    innerContainer: {
        alignItems: 'center',

        paddingBottom: 175,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

    background: {},

    contanerPokemon: {
        position: 'relative',
    },

    pokemonFront: {
        width: 100,
        height: 130,

        position: 'absolute',
        right: 40,
        bottom: 300,
    },

    pokemonBack: {
        position: 'absolute',
        left: -150,
        bottom: 50,
    },

    innerButton: {
        alignItems: 'flex-end',

        marginBottom: 75,
        marginRight: 25,
    },

    battleButton: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        shadowColor: colors.main.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        borderWidth: 1,
        backgroundColor: chroma(colors.main.white).alpha(0.3).css(),
    },

    battleButtonText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.main.white,
        textTransform: 'uppercase',
        textShadowRadius: 5,
        textShadowColor: colors.main.white,
    },
});
