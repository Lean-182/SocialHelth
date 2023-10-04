import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import RingProgress from "./RingProgress";
import HeartIcon from "./HeartIcon";
import HeartProgress from "./HeartIcon";
import StepProgressBar from "./BarCharge";

const Flexbox = () => {
  const [boxes, setBoxes] = useState([
    <View
      key="box1"
      style={{ flexDirection: "row", justifyContent: "space-between" }}
    >
      <View>
        <Text style={styles.Actividad}>Actividad diaria</Text>
        <View style={styles.iconContainer}>
          <View>
            <Text>91</Text>
            <MaterialCommunityIcons
              name="shoe-sneaker"
              style={styles.runIcon}
              size={30}
            />
          </View>
          <View>
            <Text>10</Text>
            <MaterialIcons
              name="access-time"
              style={styles.clockIcon}
              size={27}
            />
          </View>
          <View>
            <Text>352</Text>
            <FontAwesome5 name="fire" style={styles.fireIcon} size={24} />
          </View>
        </View>
      </View>
      <View style={styles.heart}>
        <HeartProgress />
      </View>
    </View>,
    <View
      key="box2"
      style={{
        flexDirection: "row",
        justifyContent: "center", // Centrar horizontalmente
        alignItems: "center", // Centrar verticalmente
        alignSelf: "center", // Alinear el contenedor en el centro de su padre
      }}
    >
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text>Pasos</Text>
        <Text>340/6,000</Text>
        <StepProgressBar progress={0.3} />
      </View>
    </View>,
    <View
      key="box3"
      style={{ flexDirection: "row", alignContent: "space-between" }}
    >
      <View>
        <Text>Ejercicios</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Acción al tocar el botón "Ejercicios"
            }}
          >
            <Text style={styles.buttonText}>Ejercicio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Acción al tocar el botón "Comida"
            }}
          >
            <Text style={styles.buttonText}>Comida</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Acción al tocar el botón "Ejercicios"
            }}
          >
            <Text style={styles.buttonText}>Correr</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Acción al tocar el botón "Bicicleta"
            }}
          >
            <Text style={styles.buttonText}>Bicicleta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>,
    <Text key="box4">Comida</Text>,
    <Text key="box5">¿Estabas durmiendo?</Text>,
  ]);

  return (
    <View style={styles.container}>
      {boxes.map((box, index) => (
        <TouchableOpacity
          key={index}
          style={styles.box}
          onPress={() => {
            // Acción al tocar la caja
          }}
        >
          {box}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f8f8f8",
  },
  box: {
    width: "98%",
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    overflow: "visible",
    marginLeft: 5,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  Actividad: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    marginLeft: 40,
    marginRight: 10,
    marginTop: 25,
    marginBottom: 10,
  },
  heart: {
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 10,
  },
  clockIcon: {
    width: 35,
    height: 35,
    color: "#6fb7fa",
  },
  runIcon: {
    width: 35,
    height: 35,
    color: "#15C96E",
  },
  fireIcon: {
    width: 50,
    height: 50,
    color: "#F23C9B",
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "green",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "green",
    textAlign: "center",
  },
});

export default Flexbox;
