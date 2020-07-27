import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    title: string;
    onPress: () => void;
    outlined?: boolean;
    size?: 'sm' | 'medium'
}

export const Button: React.FC<Props> = ({ title, onPress, outlined = false, size = 'md' }) => {

    const wrapLinearGradient = (node: ReactNode): ReactNode => {
        if (outlined) {
            return node;
        }
        return (
            <LinearGradient
            colors={['#FF416C', '#FF4E50']}
            locations={[0, 0.9]}
            start={{ x: 0.2, y: 1 }} 
            end={{ x: 1, y: 0 }}
            style={[style.container, outlined ? style.outlined : style.filled]}  
            >
            {node}
        </LinearGradient >
        );
    }

    return (

        <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
            {/* <LinearGradient
                colors={['#FF416C', '#FF4E50']}
                locations={[0, 0.9]}
                start={{ x: 0.2, y: 1 }} end={{ x: 1, y: 0 }}
                style={[style.container, outlined ? style.outlined : style.filled]}  >
                <Text style={[style.text, size === 'sm' ? style.textSmall : style.textMedium]}>{title}</Text>
            </LinearGradient > */}
            {wrapLinearGradient(<Text style={[style.container, style.text, size === 'sm' ? style.textSmall : style.textMedium, outlined ? style.outlined : style.filled]}>{title}</Text>)}
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        borderRadius: 25,
        alignItems: 'center'
    },
    text: {
        color: '#F5F5F5',
        textAlign: "center",
        fontSize: 14,
        lineHeight: 20,
    },
    filled: {
        // backgroundColor: '#EF3651',
    },
    outlined: {
        borderColor: '#ABB4BD',
        borderWidth: 1.5,
        // borderRadius: 25,
    },
    textSmall: {
        paddingVertical: 8
        //imzeru nokonfiguresim, liekot view tagos vai citos, piemeram
    },
    textMedium: {
        paddingVertical: 14,
        textTransform: 'uppercase',
    }
});
// export default Button;