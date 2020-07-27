import React, { FC } from 'react';
import {
    createBottomTabNavigator,
    BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { MainPage, Categories } from '../../../views';
import { SummerSales } from '../../../views/SummerSales';
import { WomensTops } from '../../../views/WomensTops';
import { RouteProp } from '@react-navigation/native';

export type AppTabsNavigation = {
    Home: undefined;
    Sales: undefined;
    Categories: undefined;
    Women_Tops: undefined;
};

export type AppTabRoutes = keyof AppTabsNavigation;

export type AppNavigationProps<T extends keyof AppTabsNavigation> = {
    navigation: BottomTabNavigationProp<AppTabsNavigation, T>;
    route: RouteProp<AppTabsNavigation, T>;
};

const Tab = createBottomTabNavigator();

const AppTabs: FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainPage} />
            <Tab.Screen name="Sales" component={SummerSales} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Women_Tops" component={WomensTops} />
        </Tab.Navigator>
    );
};

export default AppTabs;
