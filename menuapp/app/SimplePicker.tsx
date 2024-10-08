import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SimplePicker: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const courses: string[] = ['Starters', 'Main', 'Dessert'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select The Course</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCourse}
          onValueChange={(itemValue: string) => setSelectedCourse(itemValue)}
          style={styles.picker}
          prompt="Select a course" // Android-specific
          mode="dropdown" // You can also try "dialog" on Android
        >
          <Picker.Item label="Select a course" value="" />
          {courses.map((courseOption) => (
            <Picker.Item key={courseOption} label={courseOption} value={courseOption} />
          ))}
        </Picker>
      </View>
      <Text style={styles.selectionText}>Selected Course: {selectedCourse || 'None'}</Text>
    </View>
  );
};

export default SimplePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  selectionText: {
    fontSize: 16,
    color: '#333',
  },
});
