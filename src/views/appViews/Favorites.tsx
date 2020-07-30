import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, Image } from 'react-native';
import Filters from '../../svg/Filters';
import LowToHigh from '../../svg/LowToHigh';
import MenuList from '../../svg/MenuList';
import Delete from '../../svg/Delete';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FilterProps {
    title: string;
}

const Filter: React.FC<FilterProps> = ({ title }) => {
    return (
        <View style={style.filterTextContainer}>
            <Text style={style.filterText}>{title}</Text>
        </View>
    );
};

interface ClothesProps {
    typeTitle: string;
    brandTitle: string;
    cost: number;
    status?: 'sold';
    imageName: string;
}

const categoryImage = {
    menShirt: require('../../../assets/favorites/MenShirt.png'),
    longsleeve: require('../../../assets/favorites/Longsleeve.png'),
    tShirt: require('../../../assets/womensTops/TShirt.png'),
    womenShirt: require('../../../assets/favorites/WomenShirt.png'),
};

const Clothes: React.FC<ClothesProps> = ({ typeTitle, brandTitle, cost, status, imageName }) => {
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
                        <Text style={style.brandText}>{brandTitle}</Text>
                        <Text style={style.costText}>${cost}</Text>
                    </View>
                </View>
            </View>
        );
    }
    return <></>;
};

export const Favorites: React.FC = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                <View style={style.filterContainer}>
                    <ScrollView horizontal={true}>
                        <Filter title="Summer" />
                        <Filter title="T-shirts" />
                        <Filter title="Shirts" />
                        <Filter title="Blouses" />
                        <Filter title="Long sleeves" />
                    </ScrollView>
                </View>

                <View style={style.filterTitleContainer}>
                    <View style={style.filterTitleTextContainer}>
                        <Filters />
                        <Text style={style.filterTitle}>Filters</Text>
                    </View>

                    <View style={style.filterTitleTextContainer}>
                        <LowToHigh />
                        <Text style={style.filterTitle}>Price: lowest to high</Text>
                    </View>

                    <View style={style.filterTitleTextContainer}>
                        <MenuList />
                    </View>
                </View>

                <ScrollView>
                    <Clothes typeTitle="Shirt" brandTitle="Lime" cost={32} imageName="menShirt" />
                    <Clothes typeTitle="Longsleeve Violeta" brandTitle="Mango" cost={46} imageName="longsleeve" />
                    <Clothes typeTitle="Shirt" brandTitle="Olivier" cost={12} status="sold" imageName="tShirt" />
                    <Clothes typeTitle="T-Shirt" brandTitle="Berries" cost={51} imageName="womenShirt" />
                    <Clothes typeTitle="Shirt" brandTitle="Lime" cost={32} imageName="menShirt" />
                    <Clothes typeTitle="Longsleeve Violeta" brandTitle="Mango" cost={46} imageName="longsleeve" />
                </ScrollView>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 20,
    },
    contentContainer: { 
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    filterText: { 
        color: '#2A2C36',
    },
    filterTextContainer: {
        backgroundColor: '#F7F7F7',
        height: 30,
        width: 100,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 129,
    },
    filterContainer: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    filterTitle: {
        color: '#F7F7F7',
        fontSize: 11,
    },
    filterTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    typeText: { 
        color: '#F7F7F7',
        fontSize: 16,
        fontWeight: '600',
    },
    brandText: { 
        color: '#ABB4BD',
        fontSize: 11,
        marginBottom: 10,
        marginTop: 10,
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
    filterTitleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    soldOut: {
        opacity: 0.5,
    },
    soldOutText: {
        color: '#ABB4BD',
        fontSize: 11,
        marginLeft: 20,
    },
    deleteButton: {
        left: 235,
    },
});

// if (status === 'sold') {
//     return (
//         <View style={style.soldOut}>
//             <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
//             <View>
//                 <Image style={style.itemImage} source={categoryImage[imageName]} />
//             </View>

//             <View style={style.itemTextContainer}>
//                 <TouchableOpacity onPress={remove} style={{ left: 235 }}>
//                     <Delete />
//                 </TouchableOpacity>
//                 <Text style={style.typeText}>{typeTitle}</Text>

//                 <Text style={{ color: '#F7F7F7' }}>{brandTitle}</Text>
//                 <Text style={{ color: '#F7F7F7' }}>${cost}</Text>
//             </View>
//         </View>
//             <Text style={style.soldOutText}>Sorry, this item is currently sold out</Text>
//         </View>
//     );
// } return <></>;
