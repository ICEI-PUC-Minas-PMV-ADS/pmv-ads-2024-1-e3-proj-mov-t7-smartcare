import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const FormularioNovoExame = () => {
  const [nomeExame, setNomeExame] = useState('');
  const [dataExame, setDataExame] = useState('');
  const [localExame, setLocalExame] = useState('');
  const [inicioNotificacao, setInicioNotificacao] = useState('');
  const [fimNotificacao, setFimNotificacao] = useState('');
  const [horaNotificacao, setHoraNotificacao] = useState('');
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);

  const handleNomeExameChange = (text) => {
    setNomeExame(text);
  };

  const handleDataExameChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setDataExame(formattedDate.slice(0, 10)); // Limita a 10 caracteres
  };

  const handleLocalExameChange = (text) => {
    setLocalExame(text);
  };

  const handleInicioNotificacaoChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setInicioNotificacao(formattedDate.slice(0, 10)); // Limita a 10 caracteres
  };

  const handleFimNotificacaoChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setFimNotificacao(formattedDate.slice(0, 10)); // Limita a 10 caracteres
  };

  const handleHoraNotificacaoChange = (text) => {
    let formattedTime = text.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (formattedTime.length > 2) {
      formattedTime = formattedTime.replace(/(\d{2})(\d{0,2})/, '$1:$2');
    }
    setHoraNotificacao(formattedTime.slice(0, 5)); // Limita a 5 caracteres
  };

  const handleAdicionarArquivo = () => {
    const options = {
      title: 'Selecione uma imagem',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Seleção de imagem cancelada');
      } else if (response.error) {
        console.log('Erro ao selecionar a imagem:', response.error);
      } else {
        console.log('Imagem selecionada:', response.uri);
        setArquivoSelecionado(response);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { marginTop: 30 }]}>Novo Exame</Text>

      <View style={styles.card}>
        <Text>Nome do exame:</Text>
        <TextInput
          style={[styles.input, styles.nameInput]}
          value={nomeExame}
          onChangeText={handleNomeExameChange}
        />
      </View>

      <View style={styles.card}>
        <Text>Data:</Text>
        <TextInput
          style={[styles.input, styles.centeredInput]}
          placeholder="dd/mm/aaaa"
          value={dataExame}
          onChangeText={handleDataExameChange}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.card}>
        <Text>Local do exame:</Text>
        <TextInput
          style={[styles.input, styles.nameInput]}
          value={localExame}
          onChangeText={handleLocalExameChange}
        />
      </View>

      <View style={styles.card}>
        <Text>Datas de notificação:</Text>
        <View style={styles.notificationContainer}>
          <View style={[styles.notificationInput, styles.centeredInput]}>
            <Text>Início:</Text>
            <TextInput
              style={[styles.smallInput, styles.centeredInput]}
              placeholder="dd/mm/aaaa"
              value={inicioNotificacao}
              onChangeText={handleInicioNotificacaoChange}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.notificationInput, { marginLeft: 10 }, styles.centeredInput]}>
            <Text>Fim:</Text>
            <TextInput
              style={[styles.smallInput, styles.centeredInput]}
              placeholder="dd/mm/aaaa"
              value={fimNotificacao}
              onChangeText={handleFimNotificacaoChange}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text>Notificações:</Text>
        <View style={[styles.notificationContainer, styles.centeredInput]}>
          <Text style={[styles.notificationText, { marginTop: 10 }]}>Hora da notificação:</Text>
          <TextInput
            style={[styles.smallInput, styles.notificationInput, styles.centeredInput]}
            value={horaNotificacao}
            onChangeText={handleHoraNotificacaoChange}
            placeholder="hh:mm"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text>Arquivos:</Text>
        <TouchableOpacity style={styles.adicionarButton} onPress={handleAdicionarArquivo}>
          <Text style={styles.adicionarText}>Adicionar</Text>
        </TouchableOpacity>
        {arquivoSelecionado && (
          <Text style={{ marginTop: 10 }}>Arquivo Selecionado: {arquivoSelecionado.uri}</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
          <Text style={{ color: 'white' }}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
          <Text style={{ color: 'white' }}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  card: {
    backgroundColor: '#b3ffb3',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 40,
    marginTop: 5,
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  notificationInput: {
    flex: 1,
  },
  smallInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 40,
  },
  notificationText: {
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  centeredInput: {
    textAlign: 'center',
    paddingLeft: 0,
  },
  nameInput: {
    paddingLeft: 10,
  },
  adicionarButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  adicionarText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default FormularioNovoExame;
