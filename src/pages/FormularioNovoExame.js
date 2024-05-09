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
    let formattedDate = text.replace(/\D/g, ''); 
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setDataExame(formattedDate.slice(0, 10)); 
  };

  const handleLocalExameChange = (text) => {
    setLocalExame(text);
  };

  const handleInicioNotificacaoChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); 
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setInicioNotificacao(formattedDate.slice(0, 10)); 
  };

  const handleFimNotificacaoChange = (text) => {
    let formattedDate = text.replace(/\D/g, ''); 
    if (formattedDate.length > 2 && formattedDate.length <= 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})/, '$1/$2');
    } else if (formattedDate.length > 4) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    }
    setFimNotificacao(formattedDate.slice(0, 10)); 
  };

  const handleHoraNotificacaoChange = (text) => {
    let formattedTime = text.replace(/\D/g, ''); 
    if (formattedTime.length > 2) {
      formattedTime = formattedTime.replace(/(\d{2})(\d{0,2})/, '$1:$2');
    }
    setHoraNotificacao(formattedTime.slice(0, 5)); 
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
          <View style={[styles.notificationInput, { backgroundColor: 'white', borderRadius: 8, padding: 10}, styles.centeredInput]}>
            <Text>Início:</Text>
            <TextInput
              style={[styles.smallInput, styles.centeredInput]}
              placeholder="dd/mm/aaaa"
              value={inicioNotificacao}
              onChangeText={handleInicioNotificacaoChange}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.notificationInput, { marginLeft: 10, backgroundColor: 'white', borderRadius: 8, padding: 10}, styles.centeredInput]}>
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
        <Text>Hora de notificação:</Text>
        <TextInput
          style={[styles.input, styles.centeredInput]}
          placeholder="hh:mm"
          value={horaNotificacao}
          onChangeText={handleHoraNotificacaoChange}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#0A80D5' }]} onPress={handleAdicionarArquivo}>
        <Text style={styles.buttonText}>Adicionar Arquivo</Text>
      </TouchableOpacity>

      {arquivoSelecionado && (
        <View style={styles.imageContainer}>
          <Text style={styles.imageText}>{arquivoSelecionado.fileName}</Text>
        </View>
      )}

      <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#3EB59F',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
  },
  nameInput: {
    marginBottom: 10,
  },
  centeredInput: {
    textAlign: 'center',
    marginBottom: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
  },
  notificationInput: {
    flex: 1,
  },
  smallInput: {
    width: '80%',
  },
  button: {
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    backgroundColor: '#3EB59F',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  imageText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default FormularioNovoExame;
