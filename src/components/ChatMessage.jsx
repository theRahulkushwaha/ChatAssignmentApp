import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ChatMessage({ message }) {
  const isSelf = message.sender.self;
  return (
    <View style={[styles.container, isSelf ? styles.selfContainer : styles.otherContainer]}>
      {!isSelf && <Image source={{ uri: message.sender.image }} style={styles.avatar} />}
      <View style={[styles.bubble, isSelf ? styles.selfBubble : styles.otherBubble]}>
        <Text style={{ color: isSelf ? '#fff' : '#000' }}>{message.message.replace(/<br>/g, '\n')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    marginVertical: 5, 
    alignItems: 'flex-end' 
  },
  selfContainer: { 
    justifyContent: 'flex-end', 
    flexDirection: 'row' 
  },
  otherContainer: { 
    justifyContent: 'flex-start' 
  },
  avatar: { 
    width: 32, 
    height: 32, 
    borderRadius: 16, 
    marginRight: 5 
  },
  bubble: { 
    padding: 10, 
    borderRadius: 10, 
    maxWidth: '75%' 
  },
  selfBubble: { 
    backgroundColor: '#007bff' 
  },
  otherBubble: { 
    backgroundColor: '#f0f0f0' 
  },
});