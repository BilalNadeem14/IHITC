import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextBold from '../TextBold'


const BloodCount = ({item, index}) => {
  // console.log('item: ', item);
  // console.log('index: ', index);
  const bool = index == 0
  return (
    <View style={styles.container}
      // horizontal
    >
      <View style={styles.row}>
        <View style={[styles.column, !bool && {borderTopWidth:0}]}>
          {bool && <TextBold style={[styles.textBold, {width: 20*vw}]}> S.No </TextBold>}
          <Text style={[styles.text, {width: 20*vw}]}> {index} </Text>
        </View>
        <View style={[styles.column, !bool && {borderTopWidth:0}]}>
          {bool &&<TextBold style={[styles.textBold, {width: 40*vw}]}> 	Investigation </TextBold>}
          <Text style={[styles.text, {width: 40*vw}]}> {item.test_name}</Text>
        </View>
        <View style={[styles.column, !bool && {borderTopWidth:0}]}>
          {bool &&<TextBold style={[styles.textBold, {width: 40*vw}]}> 	Patient Value </TextBold>}
          <Text style={[styles.text, {width: 40*vw}]}> {item.test_result} </Text>
        </View>
        <View style={[styles.column2, !bool && {borderTopWidth:0}]}>
          {bool &&<TextBold style={[styles.textBold, {width: 70*vw}]}> 	Normal Range </TextBold>}
        <View>
        <Text style={[styles.text, {width: 70*vw}]}> General: {item.ref_range_max_general} - {item.ref_range_min_general} 10^3/uL </Text>
        <Text style={[styles.text, {width: 70*vw}]}> Male: {item.ref_range_max_male} - {item.ref_range_min_male} 10^3/uL</Text>
        <Text style={[styles.text, {width: 70*vw}]}> Female: {item.ref_range_max_female} - {item.ref_range_min_female} 10^3/uL </Text>
        </View>
        </View>
      </View>
    </View>
  );
};

export default BloodCount;