import { View, Text, StyleSheet } from 'react-native';

const styles =StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '90%',
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  info: {
    flexDirection: 'column',
    marginBottom: 20,
  },

  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  text: {
    marginTop: 3,
  },

  footer: {
    textAlign: 'center',
    marginTop: 10,
  },
});