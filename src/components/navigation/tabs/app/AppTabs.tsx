import React, { FC } from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainPage, Categories } from '../../../../views';
import { SummerSales } from '../../../../views/appViews/SummerSales';
import { WomensTops } from '../../../../views/appViews/WomensTops';
import { Profile } from '../../../../views/appViews/Profile';
import { RouteProp } from '@react-navigation/native';
import HomeIcon from '../../../../svg/HomeIcon';
import HomeIconActive from '../../../../svg/HomeIconActive';
import BasketIcon from '../../../../svg/BasketIcon';
import BasketIconActive from '../../../../svg/BasketIconActive';
import ProfileIcon from '../../../../svg/ProfileIcon';
import ProfileIconActive from '../../../../svg/ProfileIconActive';
import AddToFavoritesIcon from '../../../../svg/AddToFavoritesIcon';
import AddToFavoritesActive from '../../../../svg/AddToFavoritesActive';
import BagIcon from '../../../../svg/BagIcon';
import BagIconActive from '../../../../svg/BagIconActive';
import SearchIcon from '../../../../svg/SearchIcon';
import { createStackNavigator } from '@react-navigation/stack';
import { Favorites } from '../../../../views/appViews/Favorites';
import { MyBag } from '../../../../views/appViews/MyBag';

export type AppTabsNavigation = {
    Home: undefined;
    Shop: undefined;
    Profile: undefined;
    Favorites: undefined;
    Bag: undefined;
};

export type AppTabRoutes = keyof AppTabsNavigation;

export type AppNavigationProps<T extends keyof AppTabsNavigation> = {
    navigation: BottomTabNavigationProp<AppTabsNavigation, T>;
    route: RouteProp<AppTabsNavigation, T>;
};

const Tab = createBottomTabNavigator<AppTabsNavigation>();
const Stack = createStackNavigator();

function NestedShop() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#F7F7F7',
                headerStyle: {
                    backgroundColor: '#1E1F28',
                    borderBottomColor: 'red',
                    borderBottomWidth: 0,
                    shadowOpacity: 0,
                },
                headerTitleStyle: {
                    fontSize: 18,
                },
                headerBackTitleVisible: false,
                headerRight: () => <SearchIcon />,
                headerRightContainerStyle: { margin: 15 },
                headerLeftContainerStyle: { margin: 10 },
            }}
        >
            <Stack.Screen name="Sales" component={SummerSales} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Women's Tops" component={WomensTops} />
        </Stack.Navigator>
    );
}

function NestedFavorites() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#F7F7F7',
                headerStyle: {
                    backgroundColor: '#1E1F28',
                    borderBottomColor: 'red',
                    borderBottomWidth: 0,
                    shadowOpacity: 0,
                },
                headerTitleStyle: {
                    fontSize: 18,
                },
                headerBackTitleVisible: false,
                headerRight: () => <SearchIcon />,
                headerRightContainerStyle: { margin: 15 },
                headerLeftContainerStyle: { margin: 10 },
            }}
        >
            <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
    );
}

const AppTabs: FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        return <>{focused ? <HomeIconActive /> : <HomeIcon />}</>;
                    } else if (route.name === 'Shop') {
                        return <>{focused ? <BasketIconActive /> : <BasketIcon />}</>;
                    } else if (route.name === 'Profile') {
                        return <>{focused ? <ProfileIconActive /> : <ProfileIcon />}</>;
                    } else if (route.name === 'Favorites') {
                        return <>{focused ? <AddToFavoritesActive /> : <AddToFavoritesIcon />}</>;
                    }
                    else if (route.name === 'Bag') {
                        return <>{focused ? <BagIconActive /> : <BagIcon />}</>;
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#EF3651',
                inactiveTintColor: '#ABB4BD',
                style: { backgroundColor: '#1E1F28', borderTopColor: 'transparent' },
            }}
        >
            <Tab.Screen name="Home" component={MainPage} />
            <Tab.Screen name="Shop" component={NestedShop} />
            <Tab.Screen name="Bag" component={MyBag} />
            <Tab.Screen name="Favorites" component={NestedFavorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default AppTabs;
