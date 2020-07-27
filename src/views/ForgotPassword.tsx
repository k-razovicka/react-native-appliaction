import React from 'react';
import { View, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { Input, Button, Header } from '../components';
import MainLayout from '../components/layouts/mainLayout';
import { RegistrationNavProps } from '../navigation/stack/onboarding/OnboardingStack';

export const ForgotPassword: React.FC<RegistrationNavProps<
    'ForgotPassword'
>> = ({
    // eslint-disable-next-line react/prop-types
    navigation,
}) => {
    return (
        <MainLayout>
            <ScrollView contentContainerStyle={style.container}>
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
            </ScrollView>
        </MainLayout>
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
