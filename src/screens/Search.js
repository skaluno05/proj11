import React from "react";
import { ScrollView, StatusBar, View, TextInput, Pressable, Image } from "react-native";

export default function Home({ navigation }) {
    return <View>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#000" />
        
        <ScrollView>
            <View>
                <Text> Pesquisar </Text>
            </View>
        </ScrollView>
    </View>
}