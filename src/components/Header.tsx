import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <View>
            <Text style={headerStyle.text}>{title}</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold',
        // paddingTop: 40,
        marginTop: 100
    }
});
