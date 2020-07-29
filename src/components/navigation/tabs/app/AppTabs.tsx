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
import BagIcon from '../../../../svg/BagIcon';
import BagIconActive from '../../../../svg/BagIconActive';
import AddToFavoritesIcon from '../../../../svg/AddToFavoritesIcon';
import AddToFavoritesActive from '../../../../svg/AddToFavoritesActive';
import ProfileIcon from '../../../../svg/ProfileIcon';
import ProfileIconActive from '../../../../svg/ProfileIconActive';

export type AppTabsNavigation = {
    Home: undefined;
    Sales: undefined;
    Categories: undefined;
    Tops: undefined;
    Profile: undefined;
};

export type AppTabRoutes = keyof AppTabsNavigation;

export type AppNavigationProps<T extends keyof AppTabsNavigation> = {
    navigation: BottomTabNavigationProp<AppTabsNavigation, T>;
    route: RouteProp<AppTabsNavigation, T>;
};

const Tab = createBottomTabNavigator<AppTabsNavigation>();

const AppTabs: FC = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        return (
                            <>
                                {focused ? <HomeIconActive /> : <HomeIcon />}
                            </>
                        );
                    } else if (route.name === 'Categories') {
                        return (
                            <>
                                {focused ? <BasketIconActive /> : <BasketIcon />}
                            </>
                        );
                    } else if (route.name === 'Sales') {
                        return (
                            <>
                                {focused ? <AddToFavoritesActive /> : <AddToFavoritesIcon />}
                            </>
                        );
                    }
                    else if (route.name === 'Tops') {
                        return (
                            <>
                                {focused ? <BagIconActive /> : <BagIcon />}
                            </>
                        );
                    }
                    else if (route.name === 'Profile') {
                        return (
                            <>
                                {focused ? <ProfileIconActive /> : <ProfileIcon />}
                            </>
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#EF3651',
                inactiveTintColor: '#ABB4BD',
                style: { backgroundColor: '#1E1F28', borderTopColor: 'transparent' }
            }}>
            <Tab.Screen name="Home" component={MainPage} />
            <Tab.Screen name="Sales" component={SummerSales} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Tops" component={WomensTops} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default AppTabs;