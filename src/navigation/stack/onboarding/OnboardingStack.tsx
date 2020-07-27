import React, { FC } from 'react';
import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack';
import { LogIn } from '../../../views/LogIn';
import { ForgotPassword } from '../../../views/ForgotPassword';
import { SignUp } from '../../../views';
import { RouteProp } from '@react-navigation/native';

export type RegistrationStack = {
    SignUp: undefined;
    LogIn: undefined;
    ForgotPassword: undefined;
};

export type RegistrationRoutes = keyof RegistrationStack;

export type RegistrationNavProps<T extends keyof RegistrationStack> = {
    navigation: StackNavigationProp<RegistrationStack, T>;
    route: RouteProp<RegistrationStack, T>;
};

const Stack = createStackNavigator<RegistrationStack>();

const OnboardingStack: FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    );
};

export default OnboardingStack;
