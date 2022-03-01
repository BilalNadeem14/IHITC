import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextBold from '../TextBold'


const BloodCount = ({item, index}) => {
  console.log('item: ', item);
  console.log('index: ', index);
  const bool = index == 0
  return (
    <ScrollView style={styles.container}
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
          {bool &&<TextBold style={[styles.textBold, {width: 55*vw}]}> 	Normal Range </TextBold>}
          <Text style={[styles.text, {width: 55*vw}]}> {item.type_name} </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BloodCount;
