import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "./UserContext";
import { BackHandler, Alert } from "react-native";

const HomeScreen = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const navigation = useNavigation();
  const user = useUser().userEmail;

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const email = await AsyncStorage.getItem("user_email");
        if (email) {
          setUserEmail(email);
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    };

    fetchUserEmail();
  }, []);

  const handleToggleExpand = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  const handleNavigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const handleLogout = () => {
    Alert.alert(
      "Encerrar sessão",
      "Tem certeza que deseja encerrar a sessão?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("user_email");
              // Adicione mais ações de logout aqui, se necessário
            } catch (error) {
              console.error("Error clearing user data:", error);
            }

            if (Platform.OS === 'android') {
              BackHandler.exitApp(); // Fecha completamente o aplicativo no Android
            } else {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }], // Navega para a tela de login no iOS
              });
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Text style={styles.welcomeText}>Olá, {user}</Text>

      <CardContainer
        title="Medicamentos"
        iconName="medkit"
        expanded={expandedItem === "Medicamentos"}
        onPress={() => handleToggleExpand("Medicamentos")}
        onNavigate={() => handleNavigateTo("Medicamento")}
      >
        {expandedItem === "Medicamentos" && (
          <Text style={[styles.details, styles.textJustify]}>
            Cadastre seus medicamentos de forma rápida e fácil, incluindo nome,
            quantidade, horário correto para tomar e duração do tratamento.
            Controle suas doses e horários, recebendo lembretes precisos para
            cada dose, garantindo que você siga seu tratamento conforme
            prescrito. Mantenha-se informado sobre a quantidade e estoque de
            medicamentos disponíveis, evitando ficar sem seus remédios
            essenciais.
          </Text>
        )}
      </CardContainer>
      <CardContainer
        title="Consultas"
        iconName="stethoscope"
        expanded={expandedItem === "Consultas"}
        onPress={() => handleToggleExpand("Consultas")}
        onNavigate={() => handleNavigateTo("Consulta")}
      >
        {expandedItem === "Consultas" && (
          <Text style={[styles.details, styles.textJustify]}>
            Agende e gerencie suas consultas médicas com facilidade, recebendo
            lembretes automáticos para suas próximas consultas. Acompanhe seu
            histórico de consultas, mantendo todas as informações importantes
            organizadas e acessíveis quando necessário.
          </Text>
        )}
      </CardContainer>
      <CardContainer
        title="Exames"
        iconName="file"
        expanded={expandedItem === "Exames"}
        onPress={() => handleToggleExpand("Exames")}
        onNavigate={() => handleNavigateTo("Exame")}
      >
        {expandedItem === "Exames" && (
          <Text style={[styles.details, styles.textJustify]}>
            Registre seus exames médicos, incluindo data, tipo de exame e
            resultados, permitindo um acompanhamento eficiente de sua saúde ao
            longo do tempo. Receba notificações para agendar exames de
            acompanhamento, garantindo que você esteja sempre em dia com sua
            saúde.
          </Text>
        )}
      </CardContainer>
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => handleNavigateTo("AccountDetails")}>
          <View style={styles.cardContent}>
            <Icon name="user" size={30} color="#FFFFFF" />
            <Text style={styles.cardText}>Minhas Informações</Text>
          </View>
        </TouchableOpacity>
      </Card>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon
          name="sign-out"
          size={20}
          color="#FFFFFF"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Encerrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const CardContainer = ({
  title,
  iconName,
  expanded,
  onPress,
  onNavigate,
  children,
}) => {
  return (
    <Card style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardContent}>
          <Icon name={iconName} size={30} color="#FFFFFF" />
          <Text style={styles.cardText}>{title}</Text>
        </View>
      </TouchableOpacity>
      {expanded && children}
      {expanded && (
        <Button mode="contained" onPress={onNavigate} style={styles.button}>
          {`Ver ${title}`}
        </Button>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#5BCEB9",
    marginVertical: 10,
    borderRadius: 10,
    elevation: 4,
  },
  cardContent: {
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  details: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#FFFFFF",
    fontSize: 16,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: "#FF6347",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    height: 75,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  textJustify: {
    textAlign: "justify",
  },
});

export default HomeScreen;
