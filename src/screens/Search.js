import React, { useState } from "react";
import { ScrollView, StatusBar, View, TextInput, Pressable, Image } from "react-native";

import Estilo from "../styles/Estilo.js";
import Navegador from "../components/Navegador.js";
import Dados from "../databases/Dados.js";
import Conteudo from "../components/Conteudo.js";

export default function Search({ navigation }) {
    const [ pesquisa, definirPesquisa ] = useState("")
    const [ resultado, definirResultado ] = useState([])
    
    function TrazerResultados() {
        const lista = [];
        Dados.forEach(function(video) {
            if(video.etiqueta.includes(pesquisa.toLowerCase())) {
                lista.push(video)
            }
        })

        if (lista.length === 0) {
            alert("Nenhum vídeo encontrado!")
        }

        definirResultado(lista)
    }

    return <View style={ Estilo.tela }>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#000" />
        
        <Navegador navigation={ navigation }/>
        
        <ScrollView pagingEnabled>
            { resultado.length === 0 ?

                <View style={{ ...Estilo.telaMensagem, flexDirection: "row"}}>
                    <TextInput 
                        style={{ backgroundColor: "#000", fontSize: 32, color: "#aaa"}}
                        onChangeText={ definirPesquisa }
                        value={ pesquisa }
                        placeholder="pesquisar por"
                        placeholderTextColor="#aaa"
                        keyboardType="default"/>
                    
                    <Pressable onPress={ TrazerResultados }>
                        <View style={ Estilo.botao }>
                            <Image 
                                source={ require("../../assets/magnifying-glass.png")}
                                style={ Estilo.navegadorIcone }/>
                        </View>
                    </Pressable>
                </View>

            :

                resultado.map(function(video) {
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