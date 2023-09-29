import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 18,
    },
    form: {
       width: '100%',
       flexDirection: 'row',
       marginTop: 36,
       marginBottom: 42,
        },
    input: {
        flex: 1,
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: 16,
        height: 56,
        marginTop: 24,
        borderRadius: 8,
        marginRight: 12,
        },
    button: {
        backgroundColor: '#31cf5c',
        padding: 16,
        height: 56,
        width: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    participantsList: {
        flex: 1,
        marginTop: 24,
    },
    noParticipants: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24,
        textAlign: 'center',
    },
  });
  