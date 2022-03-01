import {StyleSheet} from 'react-native';
import theme from '../../utils/units/theme';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // marginVertical: 1 * vh,
  },
  row: {
    flexDirection: 'row',
  },
  textBold:{
    fontSize: 2*vh,
    marginBottom: 1*vh,
    borderBottomWidth: 1,
    // marginRight: 25*vh,
    // textAlign: 'center',
    // flex: 1,
    color: 'black'
  },
  column: {
      borderWidth: 1,
      borderRightWidth: 0
  },
  column2: {
      borderWidth: 1,
      // borderLeftWidth: 0
  },
  reportButton:{
    backgroundColor: theme.colors.blue,
    borderRadius: 0.2*vh,
    padding: 0.2*vh,
    margin: 0.5*vh,
    marginHorizontal: 1*vh
  },
  text:{
    backgroundColor: '#F0F4F7',
    textAlign: 'center',
    // marginTop: 1*vh
    paddingVertical: 0.8*vh,
    paddingHorizontal: 1.5*vh,
    paddingRight: 7*vw
  },
  whiteText: {
    color: 'white'
  }
});

export default styles;
