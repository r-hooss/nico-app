import React from "react";
import Loading from "./loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class App extends React.Component {
  getLocation = async () => {
    state = {
      isLoading: true,
    };
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return this.state.isLoading ? <Loading /> : null;
  }
}
