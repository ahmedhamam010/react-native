import React from 'react';
import { View, Text } from 'react-native';

const Tab = (props: any) => {
  return (
    <View style={{ display: props.active ? 'flex' : 'none' }}>{props.children}</View>
  );
};

export default Tab;