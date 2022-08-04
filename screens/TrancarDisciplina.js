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

export default function TrancarDisciplina({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    };

    const B = (props) => <Text style={{ fontWeight: 'bold', color: 'red' }}>{props.children}</Text>

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

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal de notas aberto.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Trancar a disciplina: <B>Interacao Humano-Computador</B></Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalVisible(!modalVisible); handleClick();}}
                        >
                            <Text style={styles.textStyle}>Confirmar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.areaMenu}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={() => voltar(navigation)}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.areaTitle}>TRANCAR DISCIPLINA</Text>
            </View>
            <ScrollView>

                <View style={styles.box}>
                    <Pressable style={{
                        width: '100%',
                        height: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: isActive ? 'red' : '#a8bbe2'
                        }} onPress={() => setModalVisible(true)}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Interacao Humano-Computador</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={{
                        width: '100%',
                        height: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#a8bbe2'
                        }}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Calculo 3</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={{
                        width: '100%',
                        height: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#a8bbe2'
                        }}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Pesquisa Operacional</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={{
                        width: '100%',
                        height: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#a8bbe2'
                        }}>
                        <View style={styles.boxIntern}>
                            <View style={styles.gapBoxs}>
                                <Text style={styles.textNotas}>Teoria dos Grafos</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity style={{
                        width: '100%',
                        height: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#a8bbe2'
                        }}>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 7,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#4165AD",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "left",
        fontSize: 18,
    },
    rodape: {
        marginBottom: 80
    }
});