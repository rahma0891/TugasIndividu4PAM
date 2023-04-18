import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { JADWAL, MASKAPAI, BANDARA } from "../database/Database";
import { useSelector, useDispatch } from "react-redux";
import { fetchIP } from "./layouts/redux/Actions";

const Search = ({ dataMaster }) => {
  const Data = useSelector((state) => state.data);
  const { asal, tujuan, tanggal } = dataMaster;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIP());
  }, [dispatch]);

  const DataNotFound = () => {
    return (
      <View style={searchResultStyle.itemContainer}>
        <Text style={searchResultStyle.textDanger}>
          Maaf data tidak ditemukan, silahkan cek kembali lokasi keberangkatan,
          dan tujuan anda!
        </Text>
      </View>
    );
  };

  const DataFound = (searchResult) => {
    return (
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <TouchableOpacity style={searchResultStyle.itemContainer}>
            <View style={searchResultStyle.itemContent}>
              <View style={searchResultStyle.columnContainer}>
                <View style={searchResultStyle.rowContainer}>
                  <Text style={searchResultStyle.bandara}>
                    {
                      BANDARA.find(
                        (subItem) =>
                          subItem.bandara_kode ===
                          item.bandara_kode_keberangkatan
                      ).bandara_nama
                    }
                  </Text>
                  <Text style={searchResultStyle.bandara}>-</Text>
                  <Text style={searchResultStyle.bandara}>
                    {
                      BANDARA.find(
                        (subItem) =>
                          subItem.bandara_kode === item.bandara_kode_tujuan
                      ).bandara_nama
                    }
                  </Text>
                </View>
                <View style={searchResultStyle.rowContainer}>
                  <View style={searchResultStyle.imageContainer}>
                    <Image
                      style={searchResultStyle.image}
                      source={
                        MASKAPAI.find(
                          (subItem) => subItem.maskapai_id === item.maskapai_id
                        ).maskapai_logo
                      }
                    />
                  </View>
                  <View style={searchResultStyle.rowContainer}>
                    <Text style={searchResultStyle.maskapai}>
                      {
                        MASKAPAI.find(
                          (subItem) => subItem.maskapai_id === item.maskapai_id
                        ).maskapai_nama
                      }
                    </Text>

                    <Text style={searchResultStyle.tanggal}>
                      {item.tanggal}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={searchResultStyle.itemContent}>
              <View style={searchResultStyle.columnContainer}>
                <View style={searchResultStyle.rowContainer}>
                  <Text style={searchResultStyle.tanggal}>
                    Lokasi Pemesanan Anda : {"\n"}
                    {Data.city} - {Data.country}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.jadwal_id}
      />
    );
  };

  function RenderData() {
    if (asal !== "" || tujuan !== "" || tanggal !== "") {
      const departureId = BANDARA.filter(
        (item) =>
          item.bandara_nama.toLowerCase().replace(/\s/g, "") ===
          asal.toLowerCase().replace(/\s/g, "")
      );
      const arrivalId = BANDARA.filter(
        (item) =>
          item.bandara_nama.toLowerCase().replace(/\s/g, "") ===
          tujuan.toLowerCase().replace(/\s/g, "")
      );

      if (departureId != "" && arrivalId != "") {
        const depId = departureId[0].bandara_kode;
        const arrId = arrivalId[0].bandara_kode;
        // console.log("masuk");
        const searchResult = JADWAL.filter(
          (item) =>
            item.bandara_kode_keberangkatan.toLowerCase().replace(/\s/g, "") ===
              depId.toLowerCase().replace(/\s/g, "") &&
            item.bandara_kode_tujuan.toLowerCase().replace(/\s/g, "") ===
              arrId.toLowerCase().replace(/\s/g, "") &&
            item.tanggal === tanggal
        );
        if (searchResult.length == "") {
          return (
            <View style={searchResultStyle.itemContainer}>
              <Text style={searchResultStyle.textDanger}>
                Maaf data tidak ditemukan, tidak ada penerbangan yang tersedia
                pada tanggal tersebut. Silahkan pilih tanggal keberangkatan
                lain...
              </Text>
            </View>
          );
        }
        return DataFound(searchResult);
      }
      return DataNotFound();
    }
    return DataNotFound();
  }

  return (
    <View style={searchResultStyle.resultContainer}>
      <RenderData />
      <Text style={searchResultStyle.copyRight}>
        Copyright RAHMA WATI-120140184
      </Text>
    </View>
  );
};

const searchResultStyle = StyleSheet.create({
  resultContainer: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
  },
  itemContainer: {
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 2,
  },
  itemContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },
  maskapai: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    maxWidth: "60%",
  },
  bandara: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    maxWidth: "45%",
    marginBottom: 10,
  },
  tanggal: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  textDanger: {
    fontSize: 15,
    fontWeight: "700",
    color: "red",
    textAlign: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    width: 45,
    height: 40,
    borderRadius: 10,
    marginRight: 20,
  },
  image: {
    flex: 1,
    width: "140%",
    resizeMode: "contain",
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  copyRight: {
    zIndex: 1,
    textAlign: "center",
    color: "#000",
    margin: 20,
  },
});

export default Search;
