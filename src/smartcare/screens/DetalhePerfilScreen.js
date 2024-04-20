import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function DetalhePerfilScreen() {
    // Estados para armazenar os valores dos campos
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSave = () => {
        // Lógica para salvar as informações de perfil
        console.log('Nome:', name);
        console.log('Data de nascimento:', birthDate);
        console.log('Celular:', phoneNumber);
        console.log('E-mail:', email);
        // Adicione aqui a lógica para salvar as informações de perfil
    };

    const handleCancel = () => {
        // Lógica para cancelar a edição de informações
        console.log('Cancelar');
        // Adicione aqui a lógica para cancelar
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {/* Título H1 */}
            <Text style={styles.header}>Informações de Perfil</Text>

            {/* Campos de entrada */}
            <View style={styles.inputContainer}>
                {/* Nome */}
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="words"
                />

                {/* Data de nascimento */}
                <TextInput
                    style={styles.input}
                    placeholder="Data de nascimento (dd/mm/aaaa)"
                    value={birthDate}
                    onChangeText={text => setBirthDate(text.replace(/[^0-9]/g, '').substring(0, 10))}
                    keyboardType="numeric"
                    maxLength={10}
                />

                {/* Celular */}
                <TextInput
                    style={styles.input}
                    placeholder="Celular (xx) xxxx-xxxx"
                    value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text.replace(/[^\d]/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'))}
                    keyboardType="phone-pad"
                    maxLength={15}
                />

                {/* E-mail */}
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            {/* Botões de SALVAR e CANCELAR */}
            <View style={styles.buttonContainer}>
                {/* Botão de SALVAR */}
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.buttonText}>SALVAR</Text>
                </TouchableOpacity>

                {/* Botão de CANCELAR */}
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        textAlign: 'left',
    },
    buttonContainer: {
        width: '80%',
        marginTop: 20,
    },
    saveButton: {
        backgroundColor: '#5BCEB9', // Verde claro
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cancelButton: {
        backgroundColor: '#ff4040', // Vermelho claro
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
    },
});
