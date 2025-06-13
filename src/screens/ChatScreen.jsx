import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Modal,
} from 'react-native';

import Header from '../components/Header';
import ChatBubble from '../components/ChatBubble';

export default function ChatScreen() {
  const [chats, setChats] = useState([]);
  const [page, setPage] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [inputText, setInputText] = useState('');

  const fetchChats = async (p = 0) => {
    const res = await fetch(`https://qa.corider.in/assignment/chat?page=${p}`);
    const json = await res.json();
    setChats(prev => [...json.chats.reverse(), ...prev]);
  };

  useEffect(() => {
    fetchChats(page);
  }, [page]);

  const handleSend = () => {
    if (inputText.trim()) {
      console.log("Sending:", inputText);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <Header name="Trip 1" from="IGI Airport, T3" to="Sector 28" />

      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatBubble
            message={item.message.replace(/<br>/g, '\n')}
            sender={item.sender}
            self={item.sender.self}
          />
        )}
        onEndReached={() => setPage(prev => prev + 1)}
        onEndReachedThreshold={0.2}
        inverted
      />

      {/* BOTTOM INPUT BAR */}
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Reply to @Rohit Yadav"
          value={inputText}
          onChangeText={setInputText}
        />
        {/* Menu Button */}
        <TouchableOpacity onPress={() => setShowOptions(true)}>
          <Image
            source={require('../assets/icons/paper-pin.png')}
            style={[styles.icon, { marginLeft: 10 }]}
          />
        </TouchableOpacity>

        {/* Send Button */}
        <TouchableOpacity onPress={handleSend}>
          <Image
            source={require('../assets/icons/send.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Popup Options */}
      <Modal visible={showOptions} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowOptions(false)}
        >
          <View style={styles.optionBox}>
            <TouchableOpacity style={styles.option}>
              <Image
                source={require('../assets/icons/pic.png')}
                style={styles.iconbottom}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Image
                source={require('../assets/icons/cam-recorder.png')}
                style={styles.iconbottom}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#faf9f5' },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  iconbottom: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    resizeMode: 'contain',
    marginLeft: 10,
    tintColor: 'white',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  optionBox: {
    backgroundColor: '#008000',
    borderRadius: 10,
    width: 120,
    flexDirection: 'row',
    bottom: 50,
    borderRadius: 50
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 4,
  },
});