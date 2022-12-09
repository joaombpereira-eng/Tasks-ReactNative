import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import TaskList from './screens/TaskList';
import Auth from './screens/Auth';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Menu from './screens/Menu';
import commonStyles from './commonStyles';

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Menu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: commonStyles.fontFamily,
          fontWeigth: 'normal',
          fontSize: 20,
        },
        drawerActiveTintColor: '#080',
      }}>
      <Drawer.Screen name="Today" options={{title: 'Hoje'}}>
        {props => <TaskList title={'Hoje'} daysAhead={0} {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Tomorrow" options={{title: 'Amanhã'}}>
        {props => <TaskList title={'Amanhã'} daysAhead={1} {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Week" options={{title: 'Semana'}}>
        {props => <TaskList title={'Semana'} daysAhead={7} {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Month" options={{title: 'Mês'}}>
        {props => <TaskList title={'Mês'} daysAhead={30} {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Auth">
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
