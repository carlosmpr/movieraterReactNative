import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView , StyleSheet} from 'react-native';
import List from './components/List';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
    <List />
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50
  },
});