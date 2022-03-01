import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextBold from '../TextBold';
import {useNavigation} from '@react-navigation/native';

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
        <View style={styles.column}>
          <TextBold style={styles.textBold}> S.No </TextBold>
          <Text style={styles.text}> {index} </Text>
        </View>
        <View style={styles.column}>
          <TextBold style={styles.textBold}> Patient Name </TextBold>
          <Text style={styles.text}> {item.patient_name} </Text>
        </View>
        <View style={styles.column}>
          <TextBold style={styles.textBold}> Test Name </TextBold>
          <Text style={styles.text}> {item.test_name} </Text>
        </View>
        <View style={styles.column}>
          <TextBold style={styles.textBold}> Sample Type </TextBold>
          <Text style={styles.text}> {item.type_name} </Text>
        </View>
        <View style={styles.column}>
          <TextBold style={styles.textBold}> Sample Date </TextBold>
          <Text style={styles.text}> {item.sample_datetime} </Text>
        </View>
        <View style={styles.column2}>
          <TextBold style={[styles.textBold]}> Actions </TextBold>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResultDetails', {item: item});
            }}
            style={styles.reportButton}
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