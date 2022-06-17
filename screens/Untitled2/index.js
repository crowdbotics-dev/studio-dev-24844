import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import { Switch } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Switch style={{
      left: 67,
      top: 94,
      position: "absolute",
      width: 50,
      height: 25
    }} value={true} enabled={true}></Switch><TextInput style={{
      left: 0,
      top: 153,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 197,
      height: 30
    }}></TextInput><CheckBox style={{
      left: 46,
      top: 12,
      position: "absolute"
    }} title="jhbjhbb"></CheckBox></View>;
};

export default Untitled2;