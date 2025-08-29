import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { style } from "../style/style.js";
import { useState } from "react";

export default function AddText({onAdd}){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleAdd = () => {
        if (name.trim() && age.trim() && imageUrl.trim()) {
            onAdd(name, age, imageUrl);
            setName("");
            setAge("");
            setImageUrl("");
        }
    };
    return(
        <View style={style.box_container}>
            <View style={style.box_col_divider}>
            <TextInput value={name} onChangeText={setName} style={style.textbox} placeholder="Name"/>
            <TextInput value={age} onChangeText={setAge} style={style.textbox} placeholder="Short Description"/>
            <TextInput value={imageUrl} onChangeText={setImageUrl} style={style.textbox} placeholder="Image URL"/>
            </View>
            <TouchableOpacity onPress={handleAdd}>
                <Text style={style.addbtn}>Add item</Text>
            </TouchableOpacity>
        </View>
    )
}