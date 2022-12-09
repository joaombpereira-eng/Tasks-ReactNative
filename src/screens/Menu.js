import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default props => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
