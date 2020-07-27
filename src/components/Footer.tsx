import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Linking } from 'react-native';
import GoogleIcon from '../svg/GoogleIcon';
import FacebookIcon from '../svg/FacebookIcon';

interface FooterProps {
    title: string;
}

export const Footer: React.FC<FooterProps> = ({title}) => {
    return (
        <View style={footerStyle.container}>
            <Text style={footerStyle.text}>{title}</Text>
            <View style={footerStyle.imageWrapper}>
                <TouchableOpacity onPress={() => Linking.openURL('http://google.com')} style={footerStyle.imageContainer}>
                   <GoogleIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com')} style={footerStyle.imageContainer}>
                    <FacebookIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const footerStyle = StyleSheet.create({
    text: {
        color: '#F7F7F7',
        paddingBottom: 10
    },
    container: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    imageContainer: {
        backgroundColor: '#ffffff',
        width: 85,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 7

    },
    imageWrapper: {
        flexDirection: 'row',
    }
});