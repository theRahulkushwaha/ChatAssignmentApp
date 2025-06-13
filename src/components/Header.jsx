import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default function Header({ from, to, name }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../assets/icons/back.png')} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.trip}>{name}</Text>
        <View style={styles.locationContainer}>
         
          <Image source={require('../assets/icons/group-users.png')} style={styles.locationIcon} />
          <Text style={styles.label}>From <Text style={styles.bold}>{from}</Text></Text>
        </View>
        <Text style={styles.label}>To <Text style={styles.bold}>{to}</Text></Text>
      </View>

      <Menu>
        <MenuTrigger>
          <Image source={require('../assets/icons/more.png')} style={styles.icon} />
        </MenuTrigger>
        <MenuOptions customStyles={{ optionsContainer: styles.menuOptions }}>
          <MenuOption onSelect={() => alert('Members')} style={styles.menuOption}>
            <Text style={styles.menuText}>👥 Members</Text>
            <View style={styles.underline} />
          </MenuOption>
          <MenuOption onSelect={() => alert('Share Number')} style={styles.menuOption}>
            <Text style={styles.menuText}>📞 Share Number</Text>
            <View style={styles.underline} />
          </MenuOption>
          <MenuOption onSelect={() => alert('Report')} style={styles.menuOption}>
            <Text style={styles.menuText}>🚫 Report</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    width: 24,
    height: 24,
  },
  info: {
    flex: 1,
    marginLeft: 10
  },
  trip: {
    fontWeight: 'bold',
    fontSize: 25, 
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  label: {
    color: '#333',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold'
  },
  menuOptions: {
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
  menuOption: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  menuText: {
    fontSize: 14,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 10,
    marginBottom: 5,
  }
});