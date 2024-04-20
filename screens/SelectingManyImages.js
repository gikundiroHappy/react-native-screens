import { View, Text } from 'react-native'
import React from 'react'

export default function SelectingManyImages() {

// context 

const pickImage = async (setIsLoading, setPicurl) => {
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {

    var b=[]
            for (let i=0;i<result.assets.length;i++){
                b.push(result.assets[i].uri)
                await HandlePickImage(result.assets[i].uri,setPicurl)
            }
            setPicurl(b)
    }
  
    setIsLoading(false);
  };
  
  const HandlePickImage = async (img, setPicurl) => {
    try {
      if (!img) {
        alert("Please select an image");
        return;
      }
  
      const timestamp = Date.now(); 
      const fileExtension = img.split('.').pop();
      const response = await fetch(img);
      const blob = await response.blob();
  
      const storagePath = `trial/${timestamp}.${fileExtension}`;
      const metadata = {
        contentType: "image/jpeg",
      };
      const imageRef = ref(FIREBASE_storage, storagePath);
  
      await uploadBytes(imageRef, blob, metadata);
      const url = await getDownloadURL(imageRef);
  
      setPicurl(prevPicurls => [...prevPicurls, url]);
    }
    catch (err) {
      console.log(err);
    }
  };

//   In page were we dislay the image we picked 

{picurl.length > 0 ? (
    <ScrollView horizontal>
      {picurl.map((item, index) => (
        <View key={index}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: item,
              }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  ) : (
    <>
      {isLoading ? (
        <>
          <ActivityIndicator />
        </>
      ) : (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => pickImage(setIsLoading, setPicurl)}>
            <Image
              style={styles.image}
              source={require('../../assets/upload.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  )}


  return (
    <View>
      <Text>SelectingManyImages</Text>
    </View>
  )
}