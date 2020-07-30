import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import Plus from '../../svg/Plus';
import Minus from '../../svg/Minus';
import Delete from '../../svg/Delete';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Button } from '../../components';

interface ClothesProps {
    typeTitle: string;
    color: string;
    size: string;
    cost: number;
    amount?: number;
    imageName: string;
}

const categoryImage = {
    menShirt: require('../../../assets/favorites/MenShirt.png'),
    longsleeve: require('../../../assets/favorites/Longsleeve.png'),
    tShirt: require('../../../assets/womensTops/TShirt.png'),
    womenShirt: require('../../../assets/favorites/WomenShirt.png'),
};

const Clothes: React.FC<ClothesProps> = ({ typeTitle, color, size, cost, amount = 1, imageName }) => {
    const [currentAmount, setAmount] = useState<number>(amount);
    const [deleteItem, setDeleteItem] = useState<boolean>(false);
    const remove = () => setDeleteItem(true);

    if (!deleteItem) {
        return (
            <View>
                <View style={style.contentContainer}>
                    <View>
                        <Image style={style.itemImage} source={categoryImage[imageName]} />
                    </View>

                    <View style={style.itemTextContainer}>
                        <TouchableOpacity onPress={remove} style={style.deleteButton}>
                            <Delete />
                        </TouchableOpacity>
                        <Text style={style.typeText}>{typeTitle}</Text>
                        <View style={style.selectedContainer}>
                            <Text style={style.colorText}>
                                Color: <Text style={style.whiteColor}>{color}</Text>
                            </Text>
                            <Text style={style.sizeText}>
                                Size: <Text style={style.whiteColor}>{size}</Text>
                            </Text>
                        </View>
                        <View style={style.amountContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => setAmount(currentAmount - 1)}>
                                    <View style={style.minusButton}>
                                        <Minus />
                                    </View>
                                </TouchableOpacity>
                                <Text style={style.currentAmount}>{currentAmount}</Text>
                                <TouchableOpacity onPress={() => setAmount(currentAmount + 1)}>
                                    <View style={style.plusButton}>
                                        <Plus />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={style.costText}>{cost * currentAmount}$</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    return <></>;
};

export const MyBag: React.FC = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />

            <View style={style.container}>
                <ScrollView>
                    <Text style={style.bagCategoryTitle}>My Bag</Text>

                    <ScrollView>
                        <Clothes typeTitle="Shirt" color="Red" size="L" cost={32} imageName="menShirt" />
                        <Clothes
                            typeTitle="Longsleeve Violeta"
                            color="Orange"
                            size="L"
                            cost={46}
                            imageName="longsleeve"
                        />
                        <Clothes typeTitle="Shirt" color="Gray" size="M" cost={12} imageName="tShirt" />
                        <Clothes typeTitle="T-Shirt" color="Black" size="S" cost={51} imageName="womenShirt" />
                        <Clothes typeTitle="Shirt" color="Red" size="L" cost={32} imageName="menShirt" />
                        <Clothes
                            typeTitle="Longsleeve Violeta"
                            color="Orange"
                            size="L"
                            cost={46}
                            imageName="longsleeve"
                        />
                        <Clothes typeTitle="Shirt" color="Red" size="L" cost={32} imageName="menShirt" />
                        <Clothes
                            typeTitle="Longsleeve Violeta"
                            color="Orange"
                            size="L"
                            cost={46}
                            imageName="longsleeve"
                        />
                    </ScrollView>
                    <View style={style.promoCodeContainer}>
                        <Input label="Enter your promo code" />
                    </View>

                    <View style={style.checkoutButton}>
                        <Button title="checkout" onPress={() => Alert.alert('checkout')} />
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 80,
    },
    contentContainer: { 
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    typeText: { 
        color: '#F7F7F7',
        fontSize: 16,
        fontWeight: '600',
    },
    colorText: { 
        color: '#ABB4BD',
        fontSize: 11,
        marginBottom: 10,
    },
    sizeText: { 
        color: '#ABB4BD',
        fontSize: 11,
        marginBottom: 10,
        marginLeft: 10,
    },
    costText: { 
        color: '#F7F7F7',
        fontSize: 14,
        fontWeight: '700',
    },
    itemImage: { 
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    itemTextContainer: { 
        backgroundColor: '#2A2C36', 
        width: '73%',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    bagCategoryTitle: { 
        color: '#F7F7F7',
        fontSize: 34,
        fontWeight: '800',
        paddingLeft: 20,
        paddingBottom: 24,
    },
    minusButton: { 
        backgroundColor: 'rgba(18, 18, 18, 0.39)',
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 17,
        paddingLeft: 10,
        paddingRight: 10,
    },
    currentAmount: {
        marginLeft: 10,
        marginRight: 10,
        color: '#F7F7F7',
        fontSize: 14,
        paddingTop: 10,
    },
    plusButton: { 
        backgroundColor: 'rgba(18, 18, 18, 0.39)',
        borderRadius: 20,
        padding: 10,
    },
    deleteButton: { 
        left: 235,
    },
    selectedContainer: { 
        flexDirection: 'row',
        paddingTop: 5,
    },
    whiteColor: { 
        color: '#F7F7F7',
    },
    amountContainer: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
    },
    promoCodeContainer: { 
        margin: 10,
    },
    checkoutButton: { 
        margin: 20,
    },
});
