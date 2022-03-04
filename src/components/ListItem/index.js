import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextBold from '../TextBold';
import {useNavigation} from '@react-navigation/native';
import vh from '../../utils/units/vh';

const ListItem = ({item, index}) => {
  console.log('item: ', item);
  console.log('index: ', index);
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      // horizontal
    >
      <View style={styles.row}>
        <View style={styles.columnA}>
          {index == 0 && <TextBold style={styles.textBold}> S.No </TextBold>}
          <Text style={[styles.text, {marginTop: 4*vh}]}> {index + 1} </Text>
        </View>
        <View style={styles.columnB}>
          {index == 0 &&<TextBold style={styles.textBold}> Patient Name </TextBold>}
          {index == 0 &&<TextBold style={styles.textBold}> Test Name </TextBold>}
          <Text style={styles.text}> {item.patient_name} </Text>
          <Text style={styles.text}> {item.test_name} </Text>
        </View>
        {/* <View style={styles.columnC}>
          {index == 0 &&<TextBold style={styles.textBold}> Test Name </TextBold>}
          <Text style={styles.text}> {item.test_name} </Text>
        </View> */}
        <View style={styles.columnD}>
          {index == 0 &&<TextBold style={styles.textBold}> Sample Type </TextBold>}
          {index == 0 &&<TextBold style={styles.textBold}> Sample Date </TextBold>}
          <Text style={styles.text}> {item.type_name} </Text>
        <Text style={styles.text}> {item.sample_datetime} </Text>
        </View>
        {/* <View style={styles.columnE}>
          {index == 0 &&<TextBold style={styles.textBold}> Sample Date </TextBold>}
          <Text style={styles.text}> {item.sample_datetime} </Text>
        </View> */}
        <View style={styles.column2}>
          {index == 0 &&<TextBold style={[styles.textBold]}> Actions </TextBold>}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResultDetails', {item: item});
            }}
            style={[styles.reportButton, {marginTop: 4*vh}]}
            // lab_master_id()
          >
            <Text style={styles.whiteText}> See Report </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListItem;