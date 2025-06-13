import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChatBubble = ({ message, sender, self }) => {
  return (
    <View style={[
      styles.row,
      self ? styles.rightAlign : styles.leftAlign
    ]}>
      {!self && <Image source={{ uri: sender.image }} style={styles.avatar} />}
      <View style={[
        styles.bubble,
        self ? styles.selfBubble : styles.otherBubble
      ]}>
        <Text style={{ color: self ? '#fff' : '#000' }}>{message}</Text>
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 4,
    marginHorizontal: 10,
    alignItems: 'flex-end'
  },
  leftAlign: {
    justifyContent: 'flex-start'
  },
  rightAlign: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5
  },
  bubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 12,
  },
  selfBubble: {
    backgroundColor: '#2A70F8',
    borderBottomRightRadius: 0
  },
  otherBubble: {
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 0
  }
});
