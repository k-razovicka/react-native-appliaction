import React from 'react';
import { View, StyleSheet, Text, Alert, StatusBar } from 'react-native';
import { Input, Button, Header } from '../../components';
import { RegistrationNavProps } from '../../components/navigation/stack/onboarding/OnboardingStack';

export const ForgotPassword: React.FC<RegistrationNavProps<'ForgotPassword'>> = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                <View>
                    <Header title="Forgot Password" />
                </View>
                <View style={{ justifyContent: 'space-evenly' }}>
                    <Text style={style.text}>
                        Please, enter your email address. You will receive a
                        link to create a new password via email.
                    </Text>
                    <Input label="Email" />
                    <View style={style.margin}></View>
                    <Button
                        title="send"
                        onPress={() => Alert.alert('Password sent')}
                    />
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
        color: '#F7F7F7',
        marginTop: 100,
        marginBottom: 30,
    },
    margin: {
        marginBottom: 30,
    },
});