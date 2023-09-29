import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f1e25',
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    name: {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },
    button: {
        backgroundColor: '#e23c44',
        padding: 16,
        height: 56,
        width: 56,          
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});