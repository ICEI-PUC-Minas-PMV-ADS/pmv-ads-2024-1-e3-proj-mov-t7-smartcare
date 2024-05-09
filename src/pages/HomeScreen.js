import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const navigation = useNavigation();

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <CardContainer
        title="Medicamentos"
        iconName="medkit"
        expanded={expandedItem === "Medicamentos"}
        onPress={() => handleToggleExpand("Medicamentos")}
        onNavigate={() => handleNavigateTo("Medicamento")}
      >
        {expandedItem === "Medicamentos" && (
          <Text style={styles.details}>
            Cadastre seus medicamentos de forma rápida e fácil, incluindo nome, quantidade, horário correto para tomar e duração do tratamento.
            Controle suas doses e horários, recebendo lembretes precisos para cada dose, garantindo que você siga seu tratamento conforme prescrito.
            Mantenha-se informado sobre a quantidade e estoque de medicamentos disponíveis, evitando ficar sem seus remédios essenciais.
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
          <Text style={styles.details}>
            Agende e gerencie suas consultas médicas com facilidade, recebendo lembretes automáticos para suas próximas consultas.
            Acompanhe seu histórico de consultas, mantendo todas as informações importantes organizadas e acessíveis quando necessário.
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
          <Text style={styles.details}>
            Registre seus exames médicos, incluindo data, tipo de exame e resultados, permitindo um acompanhamento eficiente de sua saúde ao longo do tempo.
            Receba notificações para agendar exames de acompanhamento, garantindo que você esteja sempre em dia com sua saúde.
          </Text>
        )}
      </CardContainer>
      <CardContainer
        title="Minhas Informações"
        iconName="user"
        expanded={expandedItem === "Minhas Informações"}
        onPress={() => handleToggleExpand("Minhas Informações")}
        onNavigate={() => console.log("Botão clicado")}
      >
        {expandedItem === "Minhas Informações" && (
          <Text style={styles.details}>Detalhes das informações...</Text>
        )}
      </CardContainer>
    </View>
  );
};

const CardContainer = ({ title, iconName, expanded, onPress, onNavigate, children }) => {
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
});

export default HomeScreen;
