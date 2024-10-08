import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';


type MenuItem = {
  dishName: string;
  description: string;
  course: string;
  price: string;
  imageUrl: string;
};

const App: React.FC = () => {
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const courses: string[] = ['Starters', 'Main', 'Dessert'];

  const generateImage = async (dishName: string): Promise<string> => {
    // Placeholder image URL
    return `https://via.placeholder.com/150?text=${encodeURIComponent(dishName)}`;
  };

  const addMenuItem = async () => {
    if (dishName && description && course && price) {
      const imageUrl = await generateImage(dishName);
      const newItem: MenuItem = { dishName, description, course, price, imageUrl };
      setMenuItems([...menuItems, newItem]);

      // Clear the input fields
      setDishName('');
      setDescription('');
      setCourse('');
      setPrice('');
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Enter Dish Name</Text>
          <TextInput
            style={styles.input}
            value={dishName}
            onChangeText={setDishName}
            placeholder="Dish Name"
          />

          <Text style={styles.text}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
          />

          <Text style={styles.text}>Select The Course</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={course}
              onValueChange={(itemValue: string) => setCourse(itemValue)}
              style={styles.picker}
              prompt="Select a course" // Android-specific
              mode="dropdown" // Optional: specify the mode
            >
              <Picker.Item label="Select a course" value="" />
              {courses.map((courseOption) => (
                <Picker.Item key={courseOption} label={courseOption} value={courseOption} />
              ))}
            </Picker>
          </View>

          <Text style={styles.text}>Enter Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Price"
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={addMenuItem}>
            <Text style={styles.buttonText}>Add Menu Item</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Chef's Menu</Text>
          <FlatList
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.menuItem}>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuText}>{item.dishName}</Text>
                  <Text>{item.price}</Text>
                  <Text style={styles.menuDescription}>{item.description}</Text>
                  <Text>{item.course}</Text>
                </View>
                {item.imageUrl && <Image source={{ uri: item.imageUrl }} style={styles.image} />}
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalItems}>Total Items:</Text>
            <Text style={styles.totalItemsCount}>{menuItems.length}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundContainer: {
    backgroundColor: "lightpink",
    flex: 1,
    justifyContent: "flex-start", // Changed to flex-start to prevent centering which might hide Picker
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    backgroundColor: "lightgray",
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#FFC0CB',  // Pink color
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  menuContainer: {
    width: '90%',
    backgroundColor: "white",
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#FFE6EE",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuDescription: {
    fontStyle: 'italic',
    color: '#555',
  },
  totalContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFC0CB',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  totalItems: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalItemsCount: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  pickerContainer: {
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
});

