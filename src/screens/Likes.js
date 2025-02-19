import React, { useState, useEffect } from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";

import Estilo from "../styles/Estilo.js";
import Navegador from "../components/Navegador.js";
import ObterVideoCurtido from "../functions/ObterVideoCurtido.js";
import Dados from "../databases/Dados.js";
import Conteudo from "../components/Conteudo.js";

export default function Likes({ navigation }) {
    const [ curtidas, definirCurtidas ] = useState([])

    useEffect(function() {
        async function obterCurtidas() {
            const lista = await ObterVideoCurtido()

            definirCurtidas(lista)
        }

        obterCurtidas()
    }, [])

    return <View style={ Estilo.tela }>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#000" />
        
        <Navegador navigation={ navigation }/>
        
        <ScrollView pagingEnabled>
            { curtidas.length > 0 ?
                Dados.map(function(video) {
                    if (curtidas.includes(video.codigo)) {
                        return <Conteudo 
                            key={ video.codigo }
                            codigo={ video.codigo }
                            fonte={ video.fonte }
                            nome={ video.nome }
                            descricao={ video.descricao }
                            etiqueta={ video.etiqueta }/>
                    }
                })
            :
                <View style={ Estilo.telaMensagem }>
                    <Text style={ Estilo.telaMensagemTexto }>
                         Nenhum vídeo curtido! 
                    </Text>
                </View>
            }

        </ScrollView>
    </View>
}