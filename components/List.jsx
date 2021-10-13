import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function List() {
  const [movies, setMovies] = useState([{ title: "Rambo" }]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <View style={styles.container}>
        <View style>

        </View>
      <FlatList
        data={movies}
        renderItem={({ item }) => 
        <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
        </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  item:{
      flex:1,
      padding:10,
      height:50,
      backgroundColor:'#282C35'

  },
  itemText:{
      color:'white',
      fontSize:24,
      flex:1
  }
});
