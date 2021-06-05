import React, { useEffect } from "react";
import { Alert, TextInput, Text, View, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import Icon from "react-native-vector-icons/Feather";

import { useForm } from "react-hook-form";

import * as yup from "yup";

import style from "./style";

const fieldValidationSchema = yup.object().shape({
  topic: yup.string().required("Pick a topic."),
  title: yup
    .string()
    .required("Give a title.")
    .min(4, "This is a title? I doubt."),
  content: yup.string().required("Speak out!"),
});

const NewWeet = () => {
  const { register, setValue, handleSubmit, errors } = useForm({
    validationSchema: fieldValidationSchema,
  });
  const onSubmit = (data) => Alert.alert("Thanks for sharing your thoughts!");

  useEffect(() => {
    register("topic");
    register("title");
    register("content");
  }, [register]);

  return (
    <View style={style.Container}>
      <View style={style.FormContainer}>
        <DropDownPicker
          items={[
            {
              label: "USA",
              value: "usa",
              icon: () => <Icon name="flag" size={18} color="#900" />,
              hidden: true,
            },
            {
              label: "UK",
              value: "uk",
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
            {
              label: "France",
              value: "france",
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
          ]}
          containerStyle={{ height: 50, width: 300, margin: 10 }}
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderBottomColor: "grey"
          }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          placeholderStyle={{
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
          }}
          arrowStyle={{color: "rgba(255,255,255,0.1)"}}
          onChangeItem={(item) => {}}
        />
        <TextField
          label={"Topic"}
          error={errors?.topic}
          placeholder="Title"
          placeholderTextColor="rgba(255,255,255,0.5)"
          onChangeText={(text) => setValue("topic")}
        ></TextField>
        <TextField
          label={"Topic"}
          error={errors?.topic}
          placeholder="My thought"
          placeholderTextColor="rgba(255,255,255,0.5)"
          onChangeText={(text) => setValue("topic")}
        ></TextField>
        <TouchableOpacity style={style.ButtonForm}>
            <Text style={style.ButtonFormText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TextField = ({ error, label, ...inputProps }) => {
  return (
    <View style={style.TextFieldContainer}>
      <TextInput
        style={[style.TextFieldInput, !!error && style.BorderError]}
        {...inputProps}
      />
      {!!error && <Text style={style.ErrorMessage}>{error.message}</Text>}
    </View>
  );
};

export default NewWeet;
