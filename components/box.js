import { Text, View, TouchableOpacity, Image   } from "react-native";
import { style } from "../style/style";
export default function Box(item) {
  return (
    <View style={style.box_container}>
      <View style={style.box_row_divider}>
        <Image src={item.image_url} style={style.image}></Image>
        <View style={style.box_col_divider}>
          <Text style={style.paragraphHeader}>{item.name}</Text>
          <Text style={style.paragraph}>{item.age}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=> item.onDelete(item.id)}>
        <Text style={style.delbtn}>Del</Text>
      </TouchableOpacity>
    </View>
  );
}
