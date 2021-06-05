import React from "react";
import { SectionList, Text, TouchableOpacity, View } from "react-native";

import style from "./style";

const dataSettings = [
  {
    topic: {
      name: "Privacy",
      icon: "running",
    },
    data: [
      {
        option: "Option01",
      },
      {
        option: "Option02",
      },
    ],
  },
  {
    topic: {
      name: "Application",
      icon: "running",
    },
    data: [
      {
        option: "Option01",
      },
      {
        option: "Option02",
      },
    ],
  },
];

class Settings extends React.Component {
  render() {
    return (
      <View style={style.Container}>
        <SectionList
          sections={dataSettings.map((item) => {
            return item;
          })}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={style.ItemContainer}>{item.option}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={style.SectionHeader}>{section.topic.name}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default Settings;
