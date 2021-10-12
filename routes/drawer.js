import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from '../views/Home';
import DrinksStack from '../views/drinks';

const RootDraverNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Drinks: {
    screen: DrinksStack,
  },
});

export default createAppContainer(RootDraverNavigator);
