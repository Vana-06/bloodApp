import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native"
import {FontAwesome5} from '@expo/vector-icons'

export default class Screen extends React.Component {
    render(){
        return(
            <View style ={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <Pressable style={{alignItems: "flex-end", margin: 16}} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="#161924" />

                    </Pressable>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.text}>{textShadowRadius.props.name}</Text>

                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    rext: {
        color: "#161924",
        fontSize:20,
        fontweight: "500"
    }
})