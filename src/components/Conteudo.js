import React, { useState, useEffect } from "react";
import { View, Pressable, Image, Text } from "react-native";

import { Video, ResizeMode } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

import Estilo from "../styles/Estilo.js";
import SalvarVideoCurtido from "../functions/SalvarVideoCurtido.js";
import ObterVideoCurtido from "../functions/ObterVideoCurtido.js";
import LimparVideoCurtido from "../functions/LimparVideoCurtido.js";

export default function Conteudo(props) {
    const [ estado, definirEstado ] = useState(true)
    const [ curtido, definirCurtido ] = useState(false)

    return <View>
        <LinearGradient style={ Estilo.conteudoBarra } colors={["#000", "transparent"]}>
            <View style={ Estilo.conteudoBarraDentro }>
                <Text style={ Estilo.conteudoTitulo }>
                    Titulo
                </Text>

                <Text style={ Estilo.conteudoDescricao }>
                    Descrição
                </Text>

                <Text style={ Estilo.conteudoEtiqueta }>
                    Etiqueta
                </Text>
            </View>

            <View>
                <Pressable>
                    <Video 
                        source={ props.fonte }
                        style={ Estilo.video}
                        resizeMode={ ResizeMode.COVER }
                        useNativeControls={ false }
                        shouldPlay={ estado }
                        isLooping
                        isMuted/>
                </Pressable>
            </View>
        </LinearGradient>
    </View>
}