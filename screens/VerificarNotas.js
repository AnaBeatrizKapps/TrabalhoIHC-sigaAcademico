import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
    Pressable,
    Alert,
    ProgressBar
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function VerificarNotas({ navigation }) {
    const voltar = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" }]
        })
    }

    const verificarNotaIHC = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "NotaIHC" }]
        })
    }

    return (
        <View>
            <View style={styles.areaMenu}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={() => voltar(navigation)}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.areaTitle}>VERIFICAR NOTAS</Text>
            </View>
            <ScrollView>

                <View style={styles.box}>
                    <TouchableOpacity style={styles.boxButtons} onPress={() => verificarNotaIHC(navigation)}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Interacao Humano-Computador</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={styles.boxButtons}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Calculo 3</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={styles.boxButtons}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Pesquisa Operacional</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={styles.boxButtons}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Teoria dos Grafos</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={styles.boxButtons}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Estrutura de dados 2</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.rodape}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    areaMenu: {
        backgroundColor: "#4165AD",
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "left"
    },
    buttonVoltar: {
        textAlign: "left",
        paddingLeft: 10
    },
    areaTitle: {
        width: "90%",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFF",
        textAlign: "center"
    },
    boxButtons: {
        backgroundColor: '#a8bbe2',
        width: '100%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxIntern: {
        flexDirection: 'row',
    },
    gapBoxs: {
        width: '90%',
        alignItems: 'center',
    },
    box: {
        marginTop: 25,
        alignItems: 'center'
    },
    textNotas: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: "bold",
    },
    rodape: {
        marginBottom: 80
    }
});