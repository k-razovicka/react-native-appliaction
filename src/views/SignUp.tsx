import React, { Fragment } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    StatusBar,
    Text,
    Image,
} from 'react-native';
import { Input, Button, Footer, Header } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RegistrationNavProps } from '../navigation/stack/onboarding/OnboardingStack';
import { useNavigation } from '@react-navigation/native';
import MainLayout from '../components/layouts/mainLayout';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    text: {
        color: '#ffffff',
        textAlign: 'right',
    },
    inputContainer: {
        flex: 3,
        justifyContent: 'space-evenly',
    },
});

export const SignUp: React.FC<RegistrationNavProps<'SignUp'>> = ({
    // eslint-disable-next-line react/prop-types
    navigation,
}) => {
    const globalNavigation = useNavigation();

    return (
        <MainLayout>
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header title="Sign Up" />
                </View>
                <View style={style.inputContainer}>
                    <Input label="Name" />
                    <Input label="Email" />
                    <Input label="Password" />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LogIn')}
                    >
                        <Text style={style.text}>
                            Already have an account?{' '}
                            <Image
                                source={require('../../assets/Vector.png')}
                            />
                        </Text>
                    </TouchableOpacity>
                    <Button
                        title="Sign Up"
                        onPress={() => globalNavigation.navigate('Categories')}
                    />
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <Footer title="Or sign up with social account" />
                </View>
            </ScrollView>
        </MainLayout>
    );
};
