import React from "react";
import {
<<<<<<< HEAD
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
} from "react-native";
import { Button } from 'react-native-elements';

export default class SignUp extends React.Component {
    state = {
        name: "",
        password: "",
        email: "",
        phone_number: "",
        confirmpassword: "",
        address: "",
        gender: "",
        profilepic: ""
    };
    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };
    //   signUp = async () => {
    //     const { username, password, email, phone_number } = this.state;
    //     try {
    //       // here place your signup logic
    //       console.log("user successfully signed up!: ", success);
    //     } catch (err) {
    //       console.log("error signing up: ", err);
    //     }
    //   };



    static navigationOptions = {
        title: 'SignUp',
        headerStyle: {
            display: 'none',
        },
    };


    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("name", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Gender"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("gender", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("email", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("password", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("confirmpassword", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("phone_number", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("address", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Profile Picture"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("profilepic", val)}
                    />


                    <Button title="Signup" buttonStyle={styles.button}></Button>
                    <Text style={styles.goToLogin} onPress={() => navigate({ routeName: "Login" })}>Already have an Account? Login</Text>


                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        marginVertical: 50,
    },
    input: {
        width: 300,
        borderRadius: 25,
        alignSelf: "center",
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 16,
        backgroundColor: 'grey',
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    goToLogin: {
        fontWeight: '500',
        alignSelf: "center",
    },


=======
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
  Image
} from "react-native";
import { Button } from "react-native-elements";

import ImagePicker from "react-native-image-picker";

export default class SignUp extends React.Component {
  state = {
    name: "",
    password: "",
    email: "",
    phone_number: "",
    confirmpassword: "",
    ImageSource: null,
    address: "",
    gender: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  //   signUp = async () => {
  //     const { username, password, email, phone_number } = this.state;
  //     try {
  //       // here place your signup logic
  //       console.log("user successfully signed up!: ", success);
  //     } catch (err) {
  //       console.log("error signing up: ", err);
  //     }
  //   };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          ImageSource: source
        });
      }
    });
  }

  static navigationOptions = {
    title: "SignUp",
    headerStyle: {
      display: "none"
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("name", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Gender"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("gender", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("email", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("password", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("confirmpassword", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("phone_number", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("address", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Profile Picture"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={val => this.onChangeText("profilepic", val)}
          />
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={styles.ImageContainer}>
              {this.state.ImageSource === null ? (
                <Text style={styles.selectphoto}>Select a Photo</Text>
              ) : (
                <Image
                  style={styles.ImageContainer}
                  source={this.state.ImageSource}
                />
              )}
            </View>
          </TouchableOpacity>

          <Button title="Signup" buttonStyle={styles.button} />
          <Text
            style={styles.goToLogin}
            onPress={() => navigate({ routeName: "Login" })}
          >
            Already have an Account? Login
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginVertical: 50
  },
  input: {
    width: 300,
    borderRadius: 25,
    alignSelf: "center",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "black",
    marginVertical: 16,
    backgroundColor: "grey"
  },
  button: {
    width: "50%",
    alignSelf: "center",
    margin: 10,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  goToLogin: {
    fontWeight: "500",
    alignSelf: "center"
  },
  ImageContainer: {
    borderRadius: 10,
    width: 300,
    borderRadius: 25,
    height: 50,
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  selectphoto: {
    color: "#ffffff"
  }
>>>>>>> 200149908c1271ce99b5a10cef041cd68ef4ee91
});
