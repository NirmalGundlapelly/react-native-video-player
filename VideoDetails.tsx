import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import VedioDetailsController from './VideoDetailsController';
import Video from 'react-native-video';
import {horizontalScale, verticalScale} from '../../utils/Matrics';
import STRINGS from '../config';

export default class VideoDetails extends VedioDetailsController {
  render() {
    const videoDetails = this.props.route.params.item;
    return (
      <SafeAreaView>
        <View style={styles.videoContainer}>
          <Video
            resizeMode = ''
            source={{uri: videoDetails.videoUrl}}
            controls={true}
            backgroundColor={'black'}
            style={{width: this.state.orientation === 'portrait' ? '100%' : "100%", height: this.state.orientation === 'portrait' ? verticalScale(240) : verticalScale(360)}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{videoDetails.title}</Text>
            <Text style={styles.titleText}>{videoDetails.description}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    height: verticalScale(789),
    backgroundColor: STRINGS.DARK_BLUE,
  },
  titleText: {
    color: STRINGS.LIGHT_WHITE,
    marginBottom: 10,
  },
  textContainer: {
    padding: 10,
  },
  
});
