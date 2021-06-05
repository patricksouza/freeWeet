import React from "react";
import { SectionList, Text, View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import style from "./style";

const dataFeed = [
  {
    topic: {
      name: "Politic",
      icon: "landmark",
    },
    data: [
      {
        title: " In hac habitasse platea dictumst?",
        content:
          "Sed fermentum dolor vel consequat pretium. Nulla luctus pharetra tellus varius bibendum. In ut mauris lacus. Duis eleifend aliquam risus, eu sagittis ligula porttitor.",
        datetime: "Minutes ago ",
        scoreUp: 123,
        scoreDown: 12,
      },
    ],
  },
  {
    topic: {
      name: "Sport",
      icon: "running",
    },
    data: [
      {
        title: " Praesent quis ornare arcu",
        content:
          "Curabitur sit amet lacus finibus, molestie lorem nec, malesuada mauris. Aenean ultricies a diam sit amet laoreet. ",
        datetime: "25/02/2021 at 21:57 ",
        scoreUp: 10,
        scoreDown: 4,
      },
    ],
  },
  {
    topic: {
      name: "Health",
      icon: "pills",
    },
    data: [
      {
        title: " Sagittis aliquam est",
        content:
          "Donec aliquet quam dolor, nec sollicitudin eros rhoncus id. Curabitur pharetra sodales eros in varius. ",
        datetime: "21/02/2021 at 21:57 ",
        scoreUp: 20,
        scoreDown: 14,
      },
      {
        title: " Sagittis aliquam est",
        content:
          "Donec aliquet quam dolor, nec sollicitudin eros rhoncus id. Curabitur pharetra sodales eros in varius. ",
        datetime: "25/01/2011 at 21:57 ",
        scoreUp: 10,
        scoreDown: 50,
      },
    ],
  },
  {
    topic: {
      name: "Sport",
      icon: "running",
    },
    data: [
      {
        title: " Praesent quis ornare arcu",
        content:
          "Curabitur sit amet lacus finibus, molestie lorem nec, malesuada mauris. Aenean ultricies a diam sit amet laoreet. ",
        datetime: "25/02/2021 at 21:57 ",
        scoreUp: 10,
        scoreDown: 4,
      },
    ],
  },
];

class FeedWeet extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <SectionList
          sections={dataFeed.map((item) => {
            return item;
          })}
          renderItem={({ item, section }) => (
            <View style={style.card}>
              <Text style={style.Title}>
                <Icon name={section.topic.icon} size={20} color="grey" />
                {item.title}
              </Text>
              <Text style={style.Datetime}>
                {item.datetime} <Icon name="clock" size={10} color="grey" />
              </Text>
              <Text style={style.Content}>{item.content}</Text>
              <View
                style={{
                  borderBottomColor: "rgba(255,255,255,0.2)",
                  borderBottomWidth: 0.5,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: 10,
                }}
              >
                <View style={{ marginRight: 10 }}>
                  <TouchableOpacity>
                    <Icon name="thumbs-up" size={22} color="grey" />
                  </TouchableOpacity>
                </View>
                <View style={{ marginRight: 10 }}>
                  <TouchableOpacity>
                    <Text style={{ color: "green", fontWeight: "bold" }}>
                      {item.scoreUp}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <TouchableOpacity>
                    <Icon name="thumbs-down" size={22} color="grey" />
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={{ color: "#c03112", fontWeight: "bold" }}>
                      {item.scoreDown}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20 }}>
                  <TouchableOpacity>
                    <Icon name="share-square" size={22} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default FeedWeet;
