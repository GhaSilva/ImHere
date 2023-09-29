import { TouchableOpacity, Text, TextInput, View, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react';
import Participant from '../../components/Participant';

export default function Home() {

    const [participants, setParticipants] = React.useState<string[]>([]);
    const [participantName, setParticipantName] = useState("");


    function handleParticipantAdd() {
        if(participants.some(participant => participant === participantName)){
            return Alert.alert('Erro', 'Participante já adicionado!');
        }    
        setParticipants([...participants, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover participante', 'Deseja remover o participante ' + name + '?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            }
        ]);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro</Text>
        <View style={styles.form}>
        <TextInput 
        style={styles.input} 
        placeholder='Nome do Participante'
        placeholderTextColor={'#555'}
        keyboardType='default'
        onChangeText={setParticipantName}
        value={participantName}
        />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>Confirmar Presença</Text>
            </TouchableOpacity>
        </View>
        
        <FlatList data={participants} keyExtractor={item => item} renderItem={({item}) => (
            <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.noParticipants}>Nenhum participante ainda...</Text>
        )}
        />
  
    </View>
  );
}