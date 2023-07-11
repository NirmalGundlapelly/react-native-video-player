import React, {version} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeController from './HomeController';
import data from '../../services/data.json';
import STRINGS from '../config';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Matrics';

interface songItemType {
  title: string;
  thumbnailUrl: string;
  author:string
}

export default class Home extends HomeController {
  renderSongItem = (item: songItemType) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('VideoDetails', {item})} >
        <View style={styles.videoItemContainer}>
          <Image
            style={styles.thumbnailImage}
            source={{uri: item.thumbnailUrl}}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitleText}>{item.title}</Text>
            <Text style={styles.authorText}>{item.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.homeContainer}>
          <Text style={styles.vedioPlayerHeading}>{STRINGS.VEDIO_PLAYER}</Text>
          <Text style={styles.songsText}>{STRINGS.SONGS} </Text>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => this.renderSongItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: STRINGS.DARK_BLUE,
    height: verticalScale(789),
    padding: 10,
  },
  vedioPlayerHeading: {
    textAlign: 'center',
    paddingTop: moderateScale(20),
    fontSize: moderateScale(20),
    color: STRINGS.LIGHT_WHITE,
    fontWeight: '600',
  },
  songsText: {
    paddingTop: moderateScale(20),
    fontSize: moderateScale(20),
    color: STRINGS.LIGHT_WHITE,
    fontWeight: '600',
  },
  thumbnailImage: {
    height: verticalScale(100),
    width: horizontalScale(100),
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  videoItemContainer: {
    flexDirection: 'row',
    marginVertical:moderateScale(8),
    backgroundColor:'white',
    borderRadius:10
  },
  titleContainer:{
    padding:moderateScale(10)
  },
  itemTitleText:{
    width:horizontalScale(200),
    fontSize:moderateScale(16)
  },
  authorText:{
    color:STRINGS.LIGHT_BLACK
  }
});
