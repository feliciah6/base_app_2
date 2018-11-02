import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#36485f",
      elevation: null,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTitleStyle: {
      textAlign:'left', 
      alignSelf:'center',
      flex:1
    },
    headerTintColor: '#fff',
  };

  async onRegisterPress() {
    const { email, password, username, phone, location, type } = this.state;
    console.log(email);
    console.log(phone);
    console.log(location);
    console.log(type);
    console.log(username);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("phone", phone);
    await AsyncStorage.setItem("location", location);
    await AsyncStorage.setItem("type", type);
    await AsyncStorage.setItem("name", username);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }

  render() {
    return (
      <View behavior="padding" style={styles.container}>
       
        <KeyboardAvoidingView>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />

          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.phoneCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />

          <TextInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.phoneInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="Text"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Phone"
          />
          <TextInput
            value={this.state.location}
            onChangeText={location => this.setState({ location })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.locationInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="Text"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Location"
          />      
          <TextInput
            value={this.state.type}
            onChangeText={type => this.setState({ type })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.typeInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="Text"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Type"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />

          <TextInput
            value={this.state.password}
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
        </KeyboardAvoidingView>

        <TouchableHighlight
          onPress={this.onRegisterPress.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36485f",
    padding: 20,
    paddingTop: 30
  },
  
  logo: {
    width: 200,
    height: 150
  },
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 60,
    backgroundColor: "#C7367E",
    borderRadius:50,
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width:'100%',
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    opacity: 0.8
  }
});

AppRegistry.registerComponent("Register", () => Register);
