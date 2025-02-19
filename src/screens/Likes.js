import React from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";

export default function Likes({ navigation }) {
    return <View>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#000" />
        
        <ScrollView>
            <View>
                <Text> Nenhum vídeo curtido! </Text>
            </View>
        </ScrollView>
    </View>
}