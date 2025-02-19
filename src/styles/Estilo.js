import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    tela: {
        backgroundColor: "#000",
        flex: 1,
    },

    video: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
    },

    conteudoBarra: {
        gap: 32,
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 64,
        position: "absolute",
        width: "100%",
        zIndex: 9,
    },

    conteudoBarraDentro: {
        flex: 1
    },

    conteudoTitulo: {
        color: "#fff",
        fontSize: 22,
        marginVertical: 4,
    },

    conteudoDescricao: {
        color: "#fff",
        fontSize: 16,
        marginVertical: 4,
        opacity: 0.6,
    },

    conteudoEtiqueta: {
        color: "#fff",
        fontSize: 12,
        opacity: 0.6,
    },

    navegador: {
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 64,
        position: "absolute",
        width: "100%",
        zIndex: 999,
    },

    navegadorIcone: {
        height: 32,
        width: 32,
    },

    telaMensagem: {
        alignItems: "center",
        height: Dimensions.get("screen").height,
        justifyContent: "center",
        width: "auto",
    },

    telaMensagemTexto: {
        color: "#fff",
        fontSize: 32,
    },

    botao: {
        backgroundColor: "#222",
        marginHorizontal: 16,
        padding: 8,
    }
})