import {createStackNavigator} from 'react-navigation-stack';
import Drink from './Drink';

const screens = {
  Drink: {
    screen: Drink,
    navigationOptions: {
      title: 'Drinks',
    },
  },
};

const DrinksStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default DrinksStack;
