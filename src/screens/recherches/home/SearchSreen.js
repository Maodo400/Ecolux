import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { API_SERVER } from "../../../../assets/constants";
import Search from "../../../components/search/Search";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import List from "../../../components/list/List";
import CustomButton from "../../../components/customButton/CustomButton";
import classes from "../../../components/subSearch/classes";

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [lycee, setLycee] = useState(true);
  const [college, setCollege] = useState(true);
  const [classe, setClasse] = useState("");
  const RenderMessage = () => {
    if (lycee && college)
      return (
        <View style={styles.subsearch}>
          <CustomButton
            text="Lycée"
            onPress={getLycee}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="College"
            onPress={getCollege}
            type="TERTIARY"
            style={styles.searchButton}
          />
        </View>
      );
    else if (!lycee && college)
      return (
        <View style={styles.subsearch}>
          <CustomButton
            text="Retour"
            onPress={retour}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="Seconde"
            onPress={getSeconde}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="Premiere"
            onPress={getPremiere}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="Terminale"
            onPress={getTerminal}
            type="TERTIARY"
            style={styles.searchButton}
          />
        </View>
      );
    else if (lycee && !college)
      return (
        <View style={styles.subsearch}>
          <CustomButton
            text="Retour"
            onPress={retour}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="6eme"
            onPress={get6eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="5eme"
            onPress={get5eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="4eme"
            onPress={get4eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
          <CustomButton
            text="3eme"
            onPress={get3eme}
            type="TERTIARY"
            style={styles.searchButton}
          />
        </View>
      );
  };
  const onSearch = () => {
    console.log(search);
    fetch(API_SERVER + "/livres?search=" + search)
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
    setIsloading(true);
    onSearch();
    return () => {};
  }, []);

  const getSubSearch = () => {
    console.log("sub" + classe);
    fetch(API_SERVER + "/livres/?search=" + classe)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
      })
      .catch(console.error)
      .finally(() => setLycee(false))
      .finally(() => setCollege(true));
  };

  const getSeconde = () => {
    fetch(API_SERVER + "/livres/?search=seconde")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      });
  };
  const getLycee = () => {
    setLycee(false);
    setCollege(true);
  };
  const getCollege = () => {
    setLycee(true);
    setCollege(false);
  };
  const retour = () => {
    setLycee(true);
    setCollege(true);
  };
  const getPremiere = () => {
    fetch(API_SERVER + "/livres/?search=premiere")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      });
  };
  const getTerminal = () => {
    fetch(API_SERVER + "/livres/?search=terminal")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      });
  };
  const get6eme = () => {
    fetch(API_SERVER + "/livres/?search=6")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      });
  };
  const get5eme = () => {
    fetch(API_SERVER + "/livres/?search=5")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      });
  };

  const get4eme = () => {
    fetch(API_SERVER + "/livres/?search=4")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      });
  };
  const get3eme = () => {
    fetch(API_SERVER + "/livres/?search=3")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setData(resJson.results);
        setPage(resJson);
      });
  };

  // const getSubSearch = () => {
  //   fetch(API_SERVER + "/livres/?search="+search)
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       console.log(resJson);
  //       setData(resJson.results);
  //     })
  //     .catch(console.error)
  //     .finally(() => setIsloading(false));
  // };
  const onNext = () => {
    if (page.next == null) {
    } else {
      fetch(page.next)
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          setPage(resJson);
          setData(resJson.results);
        })
        .catch(console.error)
        .finally(() => setIsloading(false));
    }
  };
  const onPrevious = () => {
    if (page.previous == null) {
    } else {
      fetch(page.previous)
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson);
          setPage(resJson);
          setData(resJson.results);
        })
        .catch(console.error)
        .finally(() => setIsloading(false));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="LISTE DES LIVRES" />
      <Search onSearch={onSearch} search={search} setSearch={setSearch} />
      <RenderMessage />
      {/* <SubSearch
        lycee={lycee}
        college={college}
        setClasse={setClasse}
        classe={classe}
        getSubSearch={getSubSearch}
      /> */}
      {isLoading ? (
        <ActivityIndicator style={{ justifyContent: "center" }} />
      ) : (
        <List data={data} searchPhrase={search} />
      )}
      <Footer onPrevious={onPrevious} onNext={onNext} page={page} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subsearch: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  searchButton: {
    width: 100,
  },
});

export default SearchScreen;
