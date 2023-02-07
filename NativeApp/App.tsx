import React from "react";
import { Button, View, Text, NativeModules } from "react-native";
import {MyImage} from "./ImageView";
import { MyText } from "./TextView";

const App = () => {

  const handlePress = () => {
    const {CalendarModule} = NativeModules;
    console.log(CalendarModule);
    CalendarModule.createCalendarEvent("Some Name", "Some Location");
  }

  return (
    <View>
      <Text>Hello World</Text>
      <Button title="Press HERE" onPress={handlePress} />
    
      <View style={{ height: 500, width: 500, backgroundColor:'blue' }}>
        {/* <MyImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dreact&psig=AOvVaw3Yq7esVhcyulf0lJ_8o6kV&ust=1675771639836000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJizuvztgP0CFQAAAAAdAAAAABAE" /> */}
        <MyText 
        style={{ 
          flex: 1,
          fontSize: 12}}
        color='#FFFFFF'
        text="Some Text" />
      </View>
      
    </View>
  )
}

export default App;