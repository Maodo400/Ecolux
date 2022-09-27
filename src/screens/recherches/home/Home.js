import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
} from "react-native";
import { API_SERVER } from "../../../../assets/constants";
import CustomInput from "../../../components/customInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/customButton/CustomButton";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const marginLeft = 20;
const paddingItem = 10;

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { control, handleSubmit} = useForm();

  const onSearch = (data) => {
    fetch(API_SERVER + "/livres?search=" + data.Rechercher)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      })
      .catch(console.error)
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const data = { Rechercher: "" };
    setIsloading(true);
    onSearch(data);
    return () => {};
  }, []);

  const getAll = () => {
    fetch(API_SERVER + "/livres/")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
      })
      .catch(console.error)
      .finally(() => setIsloading(false));
  };
  const onNext = () => {
      fetch(page.next)
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          setPage(resJson);
          setData(resJson.results);
        })
        .catch(console.error)
        .finally(() => setIsloading(false));
  };
  const onPrevious = () => {
      fetch(page.previous)
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          setPage(resJson);
          setData(resJson.results);
        })
        .catch(console.error)
        .finally(() => setIsloading(false));
  };

  const renderUser = ({ item }) => {
    return (
      <View style={styles.item}>
        {item.couverture == null ? (
          <Image
            style={styles.image}
            source={require("../../../../assets/favicon.png")}
            resizeMode="cover"
          />
        ) : (
          <Image
            style={styles.image}
            source={{ uri: item.couverture }}
            resizeMode="cover"
          />
        )}
        <View style={styles.wrapText}>
          <Text
            numberOfLines={1}
            style={styles.fontSize1}
          >{`${item.nom}`}</Text>
          <Text
            numberOfLines={3}
            style={styles.fontSize}
          >{`${item.aliases}`}</Text>
          <Text
            numberOfLines={3}
            style={styles.fontSize}
          >{`${item.description}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LISTE DES LIVRES</Text>
      <View style={styles.search}>
        <CustomInput
          name="Rechercher"
          placeholder="Rechercher"
          control={control}
          onChangeText={(value) => onChangeTitle(value)}
          rules={{}}
          style={styles.searchInput}
        />
        <CustomButton
          text="Rechercher"
          onPress={handleSubmit(onSearch)}
          type="PRIMARY"
          style={styles.searchButton}
        />
      </View>
      <View style={styles.subsearch}>
        <CustomButton
          text="Lycée"
          onPress={handleSubmit(getAll)}
          type="TERTIARY"
          style={styles.searchButton}
        />
        <Text> {"  "} </Text>
        <CustomButton
          text="College"
          onPress={handleSubmit(getAll)}
          type="TERTIARY"
          style={styles.searchButton}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator style={{ justifyContent: "center" }} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => `key-${item.id}`}
          renderItem={renderUser}
        />
      )}
      <View style={styles.fixToText}>
        <Button title="Left button" disabled={page.previous==null} onPress={onPrevious} />
        <Button title="Right button" disabled={page.next==null} onPress={onNext} />
      </View>
      <View style={styles.footer}>
        <Entypo name="open-book" size={30} color="#3B71F3" />
        <Text>{"   "}</Text>
        <Feather name="settings" size={30} color="#3B71F3" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subsearch: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 19,
    padding: 20,
  },
  footer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  fontSize: {
    fontSize: 18,
  },
  fontSize1: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
  },
  wrapText: {
    flex: 1,
    paddingLeft: 10,
  },
  item: {
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: paddingItem,
    marginLeft: marginLeft,
    marginRight: 20,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  container: {
    flex: 1,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: marginLeft,
    marginRight: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 5,
    borderRadius: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  searchInput: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    alignSelf: "center",
  },
  searchButton: {
    width: 150,
  },
});

export default Home;
