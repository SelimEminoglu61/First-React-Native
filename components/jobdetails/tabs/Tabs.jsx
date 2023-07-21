import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activaTab, onHandleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(name, activaTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activaTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activaTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activaTab={activaTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
