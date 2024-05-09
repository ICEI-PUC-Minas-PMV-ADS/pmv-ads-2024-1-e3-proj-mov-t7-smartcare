import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  Searchbar,
  Card,
  IconButton,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggleExpand = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Text style={styles.introText}>
        <Text style={styles.introBold}>Bem-vindo ao Smartcare</Text> - a sua
        solução completa para o gerenciamento eficiente e inteligente de
        medicamentos, consultas e exames!
      </Text>

      <CardContainer
        title="Medicamentos"
        iconName="medkit"
        expanded={expandedItem === "Medicamentos"}
        onPress={() => handleToggleExpand("Medicamentos")}
      >
        {expandedItem === "Medicamentos" && (
          <Text style={styles.details}>
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
      >
        {expandedItem === "Consultas" && (
          <Text style={styles.details}>
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
      >
        {expandedItem === "Exames" && (
          <Text style={styles.details}>
            Registre seus exames médicos, incluindo data, tipo de exame e
            resultados, permitindo um acompanhamento eficiente de sua saúde ao
            longo do tempo. Receba notificações para agendar exames de
            acompanhamento, garantindo que você esteja sempre em dia com sua
            saúde.
          </Text>
        )}
      </CardContainer>
      <CardContainer
        title="Minhas Informações"
        iconName="user"
        expanded={expandedItem === "Minhas Informações"}
        onPress={() => handleToggleExpand("Minhas Informações")}
      >
        {expandedItem === "Minhas Informações" && (
          <Text style={styles.details}>Detalhes das informações...</Text>
        )}
      </CardContainer>
    </View>
  );
};

const CardContainer = ({ title, iconName, expanded, onPress, children }) => {
  return (
    <Card style={styles.card}>
      <TouchableRipple onPress={onPress}>
        <View style={styles.cardContent}>
          <Icon name={iconName} size={30} color="#FFFFFF" />
          <Text style={styles.cardText}>{title}</Text>
        </View>
      </TouchableRipple>
      {expanded && children}
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
  introText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  introBold: {
    fontWeight: "bold",
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
});

export default HomeScreen;
