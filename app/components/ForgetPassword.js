import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      type:"",
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

  onForgetPress() {
        this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
         <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Type"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        
        <TouchableHighlight
          onPress={this.onForgetPress.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    backgroundColor: "#36485f",
    padding: 20,
    paddingTop: 100
  },
  input: {
    height: 40,
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
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
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
});
