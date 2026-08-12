// Importa as bibliotecas necessárias
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import * as Contacts from 'expo-contacts';

// Define o componente funcional
const ContactsComponent = () => {
  // Estado para armazenar os contatos
  const [contacts, setContacts] = useState([]);

  // Função para solicitar permissão e carregar contatos
  const loadContacts = async () => {
    // Solicita permissão para acessar contatos
    const { status } =
      await Contacts.requestPermissionsAsync();

    // Verifica se a permissão foi concedida
    if (status !== 'granted') {
      Alert.alert(
        'Permissão Negada',
        'Permissão para acessar contatos foi negada.'
      );
      return;
    }

    try {
      // Obtém os contatos do dispositivo
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Emails,
          Contacts.Fields.PhoneNumbers,
        ],
      });

      // Verifica se há contatos
      if (data.length > 0) {
        setContacts(data);
      } else {
        Alert.alert(
          'Sem Contatos',
          'Nenhum contato encontrado.'
        );
      }
    } catch (error) {
      // Trata possíveis erros na obtenção dos contatos
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao carregar os contatos.'
      );

      console.error(error);
    }
  };

  // Executa a função de carregar contatos quando o componente é montado
  useEffect(() => {
    loadContacts();
  }, []);

  // Função para renderizar cada item da lista de contatos
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>

      {/* Nome completo do contato */}
      <Text style={styles.contactName}>
        {item.firstName} {item.lastName}
      </Text>

      {/* Lista de números de telefone do contato */}
      {item.phoneNumbers &&
        item.phoneNumbers.map((phone, index) => (
          <Text
            key={index}
            style={styles.contactDetail}
          >
            📞 {phone.number}
          </Text>
        ))}

      {/* Lista de emails do contato */}
      {item.emails &&
        item.emails.map((email, index) => (
          <Text
            key={index}
            style={styles.contactDetail}
          >
            ✉️ {email.email}
          </Text>
        ))}

    </View>
  );

  return (
    <View style={styles.container}>

      {/* Botão para recarregar os contatos manualmente */}
      <Button
        title="Recarregar Contatos"
        onPress={loadContacts}
      />

      {/* Lista otimizada de contatos */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

    </View>
  );
};

// Define os estilos utilizados no componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  list: {
    marginTop: 20,
  },

  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  contactDetail: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

// Exporta o componente para uso externo
export default ContactsComponent;