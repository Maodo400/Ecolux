import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";

const Item = ({ item }) => (
  <View style={styles.item}>
    {item.couverture == null ? (
      <Image
        style={styles.image}
        source={require("../../../assets/favicon.png")}
        resizeMode="cover"
      />
    ) : (
      <Image
        style={styles.image}
        source={{ uri: item.couverture }}
        resizeMode="cover"
      />
    )}
    <View style={styles.content}>
      <Text numberOfLines={1} style={styles.itemTitle}>{`${item.nom}`}</Text>
      <Text
        numberOfLines={3}
        style={styles.normalText}
      >{`${item.aliases}`}</Text>
      <Text
        numberOfLines={3}
        style={styles.normalText}
      >{`${item.description}`}</Text>
    </View>
  </View>
);

// the filter
const List = ({searchPhrase, data}) => {
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return <Item item={item} />;
    }
    if (
      item.nom
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item item={item} />;
    }
    else return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 19,
    padding: 20,
  },
  normalText: {
    fontSize: 18,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
  },
  item: {
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});

export default List;
