import { View, Text } from "react-native";
import { style } from "./style/style.js";
import Box from "./components/box.js";
import AddText from "./components/AddText.js";
import { useState } from "react";
import { FlashList } from "@shopify/flash-list";

export default function App() {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Lowd_Suffering",
      age: "Typical Uranium Enjoyer",
      image_url:
        "https://yt3.googleusercontent.com/8aqaGTRs0iaXkvQpuJKm5XAlL2U-8Y6F4P419viCYpZCMewgxuzxg_rKGg4tXANnDdKeN3F0I1Q=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      id: "2",
      name: "Tiger E",
      age: "World war II Heavy Tank",
      image_url:
        "https://media.discordapp.net/attachments/1271430274932150303/1408445830498615559/Tiger_E.png",
    },
    {
      id: "3",
      name: "Omaneko",
      age: "JASDF Standee",
      image_url:
        "https://i.gzn.jp/img/2024/07/28/omaneko-wf2024s/00.jpg",
    },
    {
      id: "4",
      name: "Springfield",
      age: "GFL2 M1903 Springfield",
      image_url:
        "https://iopwiki.com/images/thumb/e/e4/Springfield_%28GFL2%29_S.png/250px-Springfield_%28GFL2%29_S.png",
    },
    {
      id: "5",
      name: "New Jersey",
      age: "Iowa class Battleship",
      image_url:
        "https://media1.tenor.com/m/D83KBbnGipIAAAAd/azur-lane-new-jersey.gif",
    },
  ]);

  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };
  const addItem = (name, age, image_url) => {
    const newItem = {
      id: Date.now().toString(), // unique ID
      name,
      age,
      image_url,
    };
    setData((prevData) => [...prevData, newItem]);
  };
  return (
    <View style={style.container}>
      <FlashList
        data={data}
        keyExtractor={(item) => item.id}
        estimatedItemSize={600}
        style={{width:400}}
        renderItem={({ item }) => (
          <Box
            name={item.name}
            age={item.age}
            image_url={item.image_url}
            id={item.id}
            onDelete={deleteItem}
          />
        )}
        ListHeaderComponent={<Text style={style.header}>/r Random</Text>}
        ListEmptyComponent={<View style={style.box_container}><Text style={{textAlign:"center",margin:10}}>🏝️☕ Maybe those data are taking a break... You know?</Text></View>}
        ListFooterComponent={<AddText onAdd={addItem}/>}
      />
    </View>
  );
}
