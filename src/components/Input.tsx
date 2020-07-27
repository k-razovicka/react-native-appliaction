import React, {useState} from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
// import { useState } from '@storybook/addons'; ??

interface Props {
    label: string;
    focused?: boolean;
}

export const Input: React.FC<Props> = ({ label, focused = false }) => {
    const [isFocused, setFocused] = useState<boolean>(focused);
    const [value, setValue] = useState<string>('');
    return (
        <View style={style.container}>
            {isFocused && <Text style={style.label}>{label}</Text>}
            <TextInput
                style={style.text}
                placeholderTextColor='#ABB4BD'
                value={value}
                placeholder={label}
                onChange={it => setValue(it.nativeEvent.text)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#2A2C36',
        borderRadius: 4,
        padding:15
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    },
    label: {
        paddingTop: 8,
        paddingLeft:10,
        color: '#ABB4BD'
    }
})