import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HeaderDetail from "../HeaderDetail";
import Search from "../Search";

const SearchPage = ({ route, navigation }) => {
  const { data } = route.params;

  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <View style={SearchPageStyle.mainContainer}>
        <HeaderDetail navigation={navigation} data={data} />
        <Search dataMaster={data} />
      </View>
    </SafeAreaView>
  );
};

const SearchPageStyle = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: "ghostwhite",
  },
  appsContent: {
    flex: 1,
    flexDirection: "column",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
    alignSelf: "center",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default SearchPage;
