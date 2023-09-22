import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Button } from '@rneui/themed';
import { Avatar } from '@rneui/themed';

export default function Home({ navigation }) {
    const [number, setNumber] = useState(1);

    const check = () => {

        console.log("clicked");
        if (number == 1) {
            console.log("ONE");
        } else if (number == 2) {
            console.log("TWO");
        } else if (number == 3) {
            navigation.push('About');
        }
        setNumber(number + 1);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => check()}
                style={number === 1 ? styles.btnBlue :
                    number === 2 ? styles.btnRed : styles.btnGreen}>
                <Text>Click me</Text>
            </TouchableOpacity>
            <Button title="Outline" type="outline" />
            <Avatar
                size={32}
                rounded
                title="EQ"
                containerStyle={{ backgroundColor: "black" }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidtH: 1,
        padding: 10
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#800000',
        borderColor: '#800000',
        borderRadius: 10,
        borderWidtH: 1,
        padding: 10
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#00563B',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidtH: 1,
        padding: 10
    }
});
