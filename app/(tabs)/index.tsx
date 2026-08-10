import { View, Text, Image, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>
          TARJETA DE ESTUDIANTE
        </Text>
        <View style={styles.content}>
          <View style={styles.info}>

            <Text style={styles.label}>
              Nombre:
            </Text>

            <Text style={styles.text}>
              Eleazar Natanael Flores Ramos
            </Text>

            <Text style={styles.label}>
              Carné:
            </Text>

            <Text style={styles.text}>
              0907-25-19873
            </Text>

            <Text style={styles.label}>
              Carrera:
            </Text>

            <Text style={styles.text}>
              Ingeniería en Sistemas
            </Text>

            <Text style={styles.label}>
              Semestre:
            </Text>

            <Text style={styles.text}>
              4to. Semestre
            </Text>

          </View>
          <Image
            source={require('../../assets/images/feo.jpg')}
            style={styles.photo}
          />

        </View>
        <Text style={styles.footer}>
          Universidad Mariano Gálvez
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    padding: 30,
    borderRadius: 10,
    backgroundColor: '#93efff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    flex: 1,
    marginRight: 30,
  },

  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  text: {
    marginTop: 5,
  },

  photo: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },

  footer: {
    textAlign: 'center',
    marginTop: 35,
  },

})