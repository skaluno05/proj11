import React from "react";
import { ScrollView, StatusBar, View } from "react-native";

import Estilo from "../styles/Estilo.js";
import Dados from "../databases/Dados.js";
import Conteudo from "../components/Conteudo.js";

export default function Home({ navigation }) {
    const DadosAleatorio = Dados.sort(function() {
        return Math.random() - 0.5
    })

    return <View style={ Estilo.tela }>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#000" />
        
        <ScrollView>
            { DadosAleatorio.length > 0 &&
                DadosAleatorio.map(function(video) {
                    return <Conteudo
                        key={ video.codigo }
                        codigo={ video.codigo }
                        fonte={ video.fonte }
                        nome={ video.nome }
                        descricao={ video.descricao }
                        etiqueta={ video.etiqueta }/>
                })
            }
        </ScrollView>
    </View>
}