import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
    Pressable,
    Alert
} from 'react-native';

import { DataTable, ProgressBar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function NotaIHC({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

    const voltar = (navigation) => {
        navigation.reset({
            index: 0,
            routes: [{ name: "VerificarNotas" }]
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
                        <Text style={styles.modalText}>Calculo da Nota:</Text>
                        <Text style={styles.calculoNota}>(P1 x 0,30) + (P2 x 0,30) + (T1 x 0,40)</Text>
                        <Text style={styles.modalText}>Criterios:</Text>
                        <Text style={styles.calculoNota}><B>1. </B>Nota {'>'}= 60</Text>
                        <Text style={styles.calculoNota}><B>2. </B>Freqeuncia {'>'}= 75%</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.areaMenu}>
                <TouchableOpacity style={styles.buttonVoltar} onPress={() => voltar(navigation)}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.areaTitle}>Interacao Humano-Computador</Text>
            </View>
            <ScrollView>

                <View style={styles.containerPrincipal}>
                    <Text style={styles.textoPrincipal}>Confira suas notas:</Text>
                    <View>
                        <DataTable style={styles.container}>
                            <DataTable.Header style={styles.tableHeader}>
                                <DataTable.Title>Avaliacao</DataTable.Title>
                                <DataTable.Title>Peso(%)</DataTable.Title>
                                <DataTable.Title>Valor</DataTable.Title>
                                <DataTable.Title>Nota</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell>P1</DataTable.Cell>
                                <DataTable.Cell>30%</DataTable.Cell>
                                <DataTable.Cell>30</DataTable.Cell>
                                <DataTable.Cell>25</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>T1</DataTable.Cell>
                                <DataTable.Cell>40%</DataTable.Cell>
                                <DataTable.Cell>40</DataTable.Cell>
                                <DataTable.Cell>32</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>P2</DataTable.Cell>
                                <DataTable.Cell>30%</DataTable.Cell>
                                <DataTable.Cell>30</DataTable.Cell>
                                <DataTable.Cell>-</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </View>

                    <View>
                        <Text style={styles.textoPrincipal}>Confira o progresso na disciplina:</Text>
                        <View style={styles.style_progressBar}>
                            <Text>54,44%</Text>
                            <ProgressBar
                                styleAttr="Horizontal"
                                indeterminate={false}
                                progress={0.54}
                                color={'#4165AD'}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.textoPrincipal}>Entenda os criterios para Aprovacao:</Text>
                        <Pressable style={styles.boxButtons} onPress={() => setModalVisible(true)}>
                            <View style={styles.boxIntern}>
                                <View style={styles.gapBoxs}>
                                    <Text style={styles.textNotas}>Visualizar</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>

                    <View style={styles.areaDocente}>
                        <Text><B>Docente:</B> Andre Luiz de Oliveira</Text>
                    </View>
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
        backgroundColor: '#4165AD',
        width: '100%',
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 10,
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
        fontSize: 15,
        color: '#FFF',
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
        fontWeight: "bold",
        color: 'red',
        fontSize: 20,
    },
    calculoNota: {
        fontSize: 15,
        marginBottom: 25
    },
    containerPrincipal: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    textoPrincipal: {
        fontSize: 20,
        fontWeight: "bold",
    },
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
    areaDocente: {
        marginTop: 20
    },
    style_progressBar: {
        marginVertical: 24,
    },
    rodape: {
        marginBottom: 80
    }
});