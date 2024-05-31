import { View, Text } from "react-native";
import React from "react";
import { useVideoPlayer, VideoView } from "expo-video";

const personalExperience = () => {
  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  return (
    <View>
      <VideoView player={player} allowsFullscreen allowsPictureInPicture />
    </View>
  );
};

export default personalExperience;
