import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

function MyHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      color={Platform.OS === 'android' ? 'white' : props.color || Colors.primary}
      IconComponent={Ionicons}
      iconSize={23}
    />
  );
}

export default MyHeaderButton;
