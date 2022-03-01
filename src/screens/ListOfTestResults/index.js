import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import images from '../../assets/images';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import TextBold from '../../components/TextBold';
import { actions } from '../../redux/actions';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import styles from './styles';

const Func = props => {
  const [results, setResults] = useState([])
  const dispatch = useDispatch()
  const logout = async () => {
    await dispatch(actions.logout())
  }
  const apiCall = async () => {
    const data = {
      token: 'aY9d3eR',
      patient_id: 70
    }
    try{
      const response = await dispatch(actions.TestResults(data))
      console.log('response in TestResults: ', response);
      setResults(response?.patients_lab_info)
    }
    catch(e){
      console.log('error in TestResults: ', e);
    }
  }
  useEffect( () => {
    apiCall()
    // return null
  }, [])

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
          <TextBold style={styles.headingText}>IHITC</TextBold>
        </View> */}
      <View style={styles.header}>
        <View style={styles.headingRow}>
          <TouchableOpacity 
          // onPress={() => props.navigation.pop()}
          >
            {/* <Image
              source={images.icons?.backArrow}
              style={styles.backArrow}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
          <TextBold style={styles.headingText}>List Of Test Results</TextBold>
        </View>
      </View>
      <View style={styles.listingContainer}>
        <TextBold style={styles.text}>List Of Test Results</TextBold>
        <ScrollView style={styles.listContainer} horizontal>
          <FlatList
            data={results}
            renderItem={({item, index}) => <ListItem item={item} index={index} />}
            ListFooterComponent={() => <Button
              style={{width: 50*vw, marginTop: 2*vh}}
              title={'Logout'}
              onPress={() => logout()}
              />}
          />
        </ScrollView>
      </View>
      
    </View>
  );
};

export default Func;
