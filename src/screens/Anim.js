import { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import Pdf from 'react-native-pdf';

const Anim = () => {
    const panelRef = useRef(null)
    const [state, setState] = useState(null)
    const [sty, setSty] = useState({ height: 300, width: '100%' })
    const [modalVisible, setModalVisible] = useState(false);
    const form = new FormData();
    const onPress = async () => {
        try {
            await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
                copyTo: 'documentDirectory',
            }).then((file) => {
                form.append({
                    uri: file[0].fileCopyUri,
                    type: file[0].type,
                    name: file[0].name,
                });
                setState((form._parts[0][0].uri).split("%20").join("\ "))
                // console.log(form._parts[0][0].name, "state ", form._parts[0][0].uri)
                // console.log(panelRef, "current")
            })

        } catch (error) {
            // if (DocumentPicker.isCancel(error)) {
            //     // The user canceled the document picker.
            // } else {
            //     throw error;
            // }
        }
    }
    const onPressApi = async () => {
        axios.post(`https://hindimesamjhe.in/rewrite/public/api/registration?name=surendra singh s&number=6375752015`)
            .then((res) => { console.log(res.data.status, 'response jjj', res.data.userId) })
            .catch((err) => { console.log(err, "error") })
    }

    console.log("---", `${state}`, modalVisible)
    return (
        <View style={{ paddingHorizontal: 10, flex: 1, }}>
            <View style={{ flex: 1, width: '100%', borderWidth: 0.5, borderColor: 'gray' }}>
                {state !== null ?
                    <Pdf
                        // ref={panelRef}
                        source={{ uri: state }}
                        style={[{ backgroundColor: 'white', marginBottom: 20, borderWidth: 0.5, borderColor: 'gray', height: 150, width: "100%" }]}
                        onError={(error) => {
                            console.log(error);
                        }}
                        // onPageSingleTap={() => { setModalVisible(true) }}
                        enablePaging={true}
                        onPageSingleTap={() => setModalVisible(true)}
                        scale={3}
                    />
                    :
                    <View style={[{ backgroundColor: 'white', marginBottom: 20, borderWidth: 0.5, borderColor: 'gray', height: 150, width: "100%" }]}
                    ></View>
                }

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                    <TouchableOpacity onPress={onPress} title="Open a PDF Document..." style={{
                        backgroundColor: 'rgb(230,230,230)',
                        height: 50, width: '40%', justifyContent: 'center', alignItems: 'center',

                    }}>
                        <Text>Upload image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} title="Open a PDF Document..." style={{
                        backgroundColor: 'rgb(230,230,230)',
                        height: 50, width: '40%', justifyContent: 'center', alignItems: 'center',

                    }}>
                        <Text>Download image</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={onPressApi} title="call api...">
                <Text>call api </Text>
            </TouchableOpacity> */}
            </View>
            <View style={{ flex: 1, width: '100%', borderWidth: 0.5, borderColor: 'gray' }}>
                {state !== null ?

                    <Pdf
                        // ref={panelRef}
                        source={{ uri: state }}
                        style={{ height: 150, width: '100%', backgroundColor: 'white', marginBottom: 20, borderWidth: 0.5, borderColor: 'gray' }}
                        onError={(error) => {
                            console.log(error);
                        }}
                        enablePaging={true}
                        onPageSingleTap={() => setModalVisible(true)}
                        scale={3}
                    />
                    :
                    <View style={[{ backgroundColor: 'white', marginBottom: 20, borderWidth: 0.5, borderColor: 'gray', height: 150, width: sty.width }]}
                    ></View>
                }

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                    <TouchableOpacity onPress={onPress} title="Open a PDF Document..." style={{
                        backgroundColor: 'rgb(230,230,230)',
                        height: 50, width: '40%', justifyContent: 'center', alignItems: 'center',

                    }}>
                        <Text>Upload image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} title="Open a PDF Document..." style={{
                        backgroundColor: 'rgb(230,230,230)',
                        height: 50, width: '40%', justifyContent: 'center', alignItems: 'center',

                    }}>
                        <Text>Download image</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, width: '100%', borderWidth: 0.5, borderColor: 'gray' }}>
                {state !== null ?

                    <Pdf
                        // ref={panelRef}
                        source={{ uri: state }}
                        style={{ height: 150, width: '100%', backgroundColor: 'white', marginBottom: 20, borderWidth: 0.5, borderColor: 'gray' }}
                        onError={(error) => {
                            console.log(error);
                        }}
                        enablePaging={true}
                        onPageSingleTap={() => setModalVisible(true)}
                        scale={3}
                    />
                    :
                    <View style={[{ backgroundColor: 'white', marginBottom: 20, borderWidth: 0.5, borderColor: 'gray', height: 150, width: sty.width }]}
                    ></View>
                }

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                    <TouchableOpacity onPress={onPress} title="Open a PDF Document..." style={{
                        backgroundColor: 'rgb(230,230,230)',
                        height: 50, width: '40%', justifyContent: 'center', alignItems: 'center',

                    }}>
                        <Text>Upload image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} title="Open a PDF Document..." style={{
                        backgroundColor: 'rgb(230,230,230)',
                        height: 50, width: '40%', justifyContent: 'center', alignItems: 'center',

                    }}>
                        <Text>Download image</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                enablePaging={true}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Pdf
                    source={{ uri: state }}
                    style={{ height: "100%", width: '100%', backgroundColor: 'white', marginBottom: 20, borderWidth: 0.5, borderColor: 'gray' }}
                    onError={(error) => {
                        console.log(error);
                    }}
                />
            </Modal>
        </View>
    )
}
export default Anim;


