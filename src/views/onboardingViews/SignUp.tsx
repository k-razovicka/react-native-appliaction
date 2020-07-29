import React from 'react';
import { View, StyleSheet, StatusBar, Text, Image, } from 'react-native';
import { Input, Button, Footer, Header, SecureInput } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RegistrationNavProps } from '../../components/navigation/stack/onboarding/OnboardingStack';

export const SignUp: React.FC<RegistrationNavProps<'SignUp'>> = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                <View style={{ flex: 1 }}>
                    <Header title="Sign Up" />
                </View>
                <View style={style.inputContainer}>
                    <Input label="Name" />
                    <Input label="Email" />
                    <SecureInput label="Password" />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LogIn')}
                    >
                        <Text style={style.text}>
                            Already have an account?{' '}
                            <Image
                                source={require('../../../assets/Vector.png')}
                            />
                        </Text>
                    </TouchableOpacity>
                    <Button
                        title="Sign Up"
                        onPress={() => { navigation.navigate('LogIn') }}
                    />
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <Footer title="Or sign up with social account" />
                </View>
            </View>
        </>
    );
};

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