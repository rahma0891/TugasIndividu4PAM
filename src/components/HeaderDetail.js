import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from "react-redux";
import { fetchIP } from "./layouts/redux/Actions";

const HeaderDetail = ({ navigation, data }) => {
  const ip = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIP());
  }, [dispatch]);

  return (
    <View style={headerDetailPageStyle.headerContainer}>
      <View style={headerDetailPageStyle.rowContainer}>
        <TouchableOpacity title="Go back" onPress={() => navigation.goBack()}>
          <MaterialIcons
            style={headerDetailPageStyle.backIcon}
            name="arrow-back"
            color="#fff"
          />
        </TouchableOpacity>
        <Text style={headerDetailPageStyle.headerTitle}>Hiling.id</Text>
        <Text style={headerDetailPageStyle.headerIp}>{ip?.query}</Text>
        <FontAwesome
          style={headerDetailPageStyle.userIcon}
          name="user"
          color="white"
        />
      </View>
      <View style={headerDetailPageStyle.columnContainer}>
        <Text style={headerDetailPageStyle.bodyText}>
          Hasil Pencarian Penerbangan
        </Text>
        <Text style={headerDetailPageStyle.bodyText}>{data.tanggal}</Text>
      </View>
    </View>
  );
};

const headerDetailPageStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    backgroundColor: "limegreen",
    height: 150,
    marginLeft: -10,
    marginRight: -10,
    zIndex: 1,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  backIcon: {
    fontSize: 40,
  },
  userIcon: {
    fontSize: 40,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    alignItems: "center",
  },
  headerIp: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "300",
    color: "white",
    right: 90,
    top: 30,
    zIndex: 1,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
});

export default HeaderDetail;
