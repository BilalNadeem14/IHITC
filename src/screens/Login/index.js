import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../assets/images';
// import { connect } from 'react-redux';
import MainInput from '../../components/MainInput';
import Button from '../../components/Button';

import TextBold from '../../components/TextBold';
import { actions } from '../../redux/actions';
import { connect } from 'react-redux';
import { showToast } from '../../Api/helperFunctions';
// import { showToast } from '../../Api/helperFunctions';
// import { actions } from '../../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      email: '',
      password: '',
      deviceId: null,
    };
  }

  componentDidMount() {
    // if(Platform.OS == 'android')
    // DeviceInfo.getAndroidId().then((androidId) => {
    //     // androidId here
    //     console.log('android deviceId: ', androidId);
    //     this.setState({
    //       deviceId: androidId
    //     })
    //   });
  }

  onChangeText = (value, type) => {
    this.setState({...this.state, [type]: value});
  };

  login2 = async () => {
    console.log('toast');
    if (this.state.email == '') {
      showToast('Username is required');
      console.log('Username is required');
      return;
    } else if (this.state.password == '') {
      showToast('Password is required');
      console.log('Password is required');
      return;
    }

    const data = {
      token: 'aY9d3eR',
      mr_no: this.state.email,
      pass: this.state.password,
    };
    try {
      const response = await this.props.login(data);
      console.log('RRRRRRRRRRRR', response.msg);
      showToast(response.msg);
    } catch (e) {
      console.log('error in login screen: ', e);
      showToast(e);
    }
  };

  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TextBold style={styles.headingText}>IHITC</TextBold>
        </View>
        <View style={styles.imageContainer}>
          <Image source={images.logo} style={styles.logoImage} />
        </View>

        <View style={[styles.container, styles.scrollContent]}>
          <MainInput
            label="Mr Number"
            placeholder="Enter Mr Number"
            style={styles.input}
            fieldStyle={styles.inputFieldStyle}
            value={this.state.email}
            type="email"
            onChangeText={this.onChangeText}
            keyboardType="email-address"
          />

          <MainInput
            label="Password"
            placeholder="Enter Password"
            style={styles.input}
            fieldStyle={styles.inputFieldStyle}
            secureTextEntry
            value={this.state.password}
            type="password"
            onChangeText={this.onChangeText}
          />

          <View
            style={{
              alignItems: 'center',
            }}>
            <Button
              title="LOGIN"
              style={styles.btn}
              labelStyle={styles.btnLabel}
              onPress={() => {
                this.login2();
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStates = state => {
  // console.log('state login', state)
  return state;
};
const mapProps = dispatch => {
  return {
    login: data => dispatch(actions.login(data)),
  };
};

export default connect(mapStates, mapProps)(Login);
