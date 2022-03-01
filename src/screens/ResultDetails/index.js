import {FlatList, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import React, { useEffect, useState } from 'react';
import TextBold from '../../components/TextBold';
import images from '../../assets/images';
import TextRegular from '../../components/TextRegular';
import BloodCount from '../../components/BloodCount';
import { actions } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const ResultDetails = props => {
  const [state, setState] = useState({})
  const dispatch = useDispatch()
const apiCall = async () => {
    const data = {
      token: 'aY9d3eR',
      lab_master_id: 217,
      patient_id: 70
    }
    try{
      const response = await dispatch(actions.ResultDetails(data))
      console.log('response in ResultDetails: ', response);
      if(response.response_code == '1'){
        setState({
          results: response?.lab_details,
          patient_info: response?.patient_info,
  
        })
      }
      else{
        // show
      }
    }
    catch(e){
      console.log('error in ResultDetails: ', e);
    }
  }
  useEffect( () => {
    apiCall()
    // return null
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingRow}>
          <TouchableOpacity
          // onPress={() => props.navigation.pop()}
          >
            <Image
              source={images.icons?.backArrow}
              style={styles.backArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TextBold style={styles.headingText}>Result Details</TextBold>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <TextBold style={styles.headingText2}>Lab# 211220210000000001</TextBold>
        <View styles={styles.line} />
        <View style={styles.row}>
          <View //column1
            style={styles.column}>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>Patient Name:</TextBold>
              <TextRegular style={styles.textBold}> Ajmal Hussain</TextRegular>
            </View>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>Gender:</TextBold>
              <TextRegular style={styles.textBold}> Male</TextRegular>
            </View>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>Age:</TextBold>
              <TextRegular style={styles.textBold}> 36</TextRegular>
            </View>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>Mr # </TextBold>
              <TextRegular style={styles.textBold}> 21-05070</TextRegular>
            </View>
          </View>
          <View //column2
            style={styles.column2}>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>Address:</TextBold>
            </View>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>CNIC:</TextBold>
              <TextRegular style={styles.textBold}>
                {' '}
                14301-1251681-5
              </TextRegular>
            </View>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>Mobile:</TextBold>
              <TextRegular style={styles.textBold}>
                {' '}
                (0333) 965-2360
              </TextRegular>
            </View>
            <View style={styles.row}>
              <TextBold style={styles.textBold}>Sample date: </TextBold>
              <TextRegular style={styles.textBold}> 21-05070</TextRegular>
            </View>
          </View>
        </View>
        <TextBold style={styles.headingText3}>Complete Blood Count</TextBold>
        <ScrollView style={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        horizontal>
          <FlatList
            data={state?.results}
            renderItem={({item, index}) => (
              <BloodCount item={item} index={index} />
            )}
            keyExtractor={(item) => {
              console.log('keyExtractor', item);
              return item?.pk_id
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ResultDetails;
