import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import configs from '../utils/configs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import GetLocation from 'react-native-get-location';
import {Actions} from 'react-native-router-flux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      lat: '',
      long: '',
      fileUri: '',
    };
  }

  componentDidMount() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        console.log('location', location);
        this.setState({
          lat: location.latitude,
          long: location.longitude,
        });
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  launchCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        console.log(image);
        this.setState({
          fileUri: image.path,
        });
      })
      .catch((error) => {
        console.log('err', error);
      });
  };

  submit = () => {
    let {name, age} = this.state;
    Actions.FirstScreen({inputName: name, inputAge: age});
  };
  render() {
    let {name, age, lat, long, fileUri} = this.state;
    let url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          extraHeight={configs.height * 0.4}
          enableOnAndroid={true}
          style={{flex: 1, paddingHorizontal: 16}}>
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.avatarStyle}
              onPress={this.launchCamera}>
              <Image
                source={fileUri ? {uri: fileUri} : null}
                style={styles.avatar}
              />
              <FAIcon
                name="camera"
                size={14}
                color={configs.colors.grey}
                style={{position: 'absolute', bottom: 2, right: 2}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <View style={styles.inputItem}>
              <View style={{flex: 0.35, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: configs.fontSize.extraLarge,
                    color: configs.colors.label,
                  }}>
                  {' '}
                  Name :{' '}
                </Text>
              </View>
              <View style={{flex: 0.65}}>
                <TextInput
                  placeholder="Enter a name ..."
                  value={name}
                  onChangeText={(name) => this.setState({name})}
                  style={styles.inputStyle}></TextInput>
              </View>
            </View>
            <View style={styles.inputItem}>
              <View style={{flex: 0.35, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: configs.fontSize.extraLarge,
                    color: configs.colors.label,
                  }}>
                  {' '}
                  Age :{' '}
                </Text>
              </View>
              <View style={{flex: 0.65}}>
                <TextInput
                  placeholder="Enter age ..."
                  value={age}
                  onChangeText={(age) => this.setState({age})}
                  style={styles.inputStyle}></TextInput>
              </View>
            </View>
            <View style={styles.inputItem}>
              <View style={{flex: 0.35, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: configs.fontSize.extraLarge,
                    color: configs.colors.label,
                  }}>
                  {' '}
                  Location :{' '}
                </Text>
              </View>
              <View style={{flex: 0.65}}>
                <Text
                  onPress={() => {
                    Linking.openURL(url);
                  }}
                  style={
                    ([styles.inputStyle],
                    {
                      color: '#0041FF',
                      textDecorationLine: 'underline',
                    })
                  }>
                  {' '}
                  This is your location. ({lat},{long}){' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity onPress={this.launchCamera} style={styles.button}>
              <Text style={{color: configs.colors.white}}>TAKE PHOTO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.submit} style={styles.button}>
              <Text style={{color: configs.colors.white}}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  avatarStyle: {
    width: 100,
    height: 100,
    borderRadius: configs.globalStyle.borderRadius,
    borderColor: configs.colors.black,
    borderWidth: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: configs.globalStyle.borderRadius,
  },
  inputView: {
    flex: 0.5,
    justifyContent: 'center',
    paddingVertical: 30,
  },
  inputItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  btnView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  viewBox: {
    borderWidth: 1,
    borderColor: configs.colors.black,
    borderRadius: configs.globalStyle.borderRadius,
    height: 200,
    width: 300,
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  labelText: {
    color: configs.colors.label,
    fontSize: configs.fontSize.extraLarge,
  },
  inputStyle: {
    height: 42,
    width: '70%',
    borderRadius: configs.globalStyle.borderRadius,
    borderColor: configs.colors.black,
    borderWidth: 1,
    paddingLeft: 10,
    padding: 0,
  },
  button: {
    height: 45,
    width: 150,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: configs.globalStyle.borderRadius,
    backgroundColor: configs.colors.blue,
    margin: 10,
  },
});

export default SecondScreen;
