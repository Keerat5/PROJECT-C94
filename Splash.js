import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default class Splash extends Component {

    async componentDidMount() {

        const data = await this.navigateToHome();

        if (data !== null) {
            this.props.navigation.navigate('Login');
        }
    }

    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(2000).then(() => this.props.navigation.navigate('Login'))
    };

    render() {
        return (
            <SafeAreaProvider>
                <View style={styles.container}>
                    <ImageBackground
                        style={styles.backgroundImage}
                        resizeMode='cover'
                        source={require('../assets/splash.png')}>
                        <Text style={styles.text}>Splash Screen</Text>
                    </ImageBackground>
                </View>
            </SafeAreaProvider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});
