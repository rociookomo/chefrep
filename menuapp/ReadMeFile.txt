ChefMenuApp
ChefMenuApp is a React Native application designed for chefs to create and manage their personalized menus dynamically. The app allows chefs to add dishes with specific details like name, description, course type, and price, and it generates an image for each dish. The menu is displayed with a total count of items added.

Features
Add dishes with a name, description, course (Starters, Main, Dessert), and price.
Automatically generate an image URL based on the dish name.
Display a list of added menu items with images.
Show the total number of items in the menu.
Clean, user-friendly interface.
Prerequisites
To run the app, you need to have the following installed:

Node.js (v14 or higher)
React Native CLI or Expo
A package manager like npm or yarn
Android Studio for Android emulator or Xcode for iOS.

Installation

Clone the repository:git clone https://github.com/your-username/ChefMenuApp.git

1) Navigate into the project directory:cd ChefMenuApp

2) Install the dependencies:
npm install

Running the App
On Android or iOS Emulator
Start your Android or iOS emulator.

Run the app using the following command for Android:
npx react-native run-android

or for iOS:
npx react-native run-ios

On a Physical Device

1)Connect your Android or iOS device to your computer.

2)Enable USB Debugging on Android or set up your iOS device via Xcode.

3)Run the app using the command for Android:
npx react-native run-android

or for iOS:
npx react-native run-ios

Usage

1) Enter Dish Name: Input the name of the dish.
2) Description: Provide a brief description of the dish.
3) Select The Course: Choose a course type (Starters, Main, or Dessert).
4) Enter Price: Input the price of the dish.
5) Add Menu Item: Click the "Add Menu Item" button to save the dish.
6) View added dishes in a list with name, description, price, and course type.
7) The total number of menu items is displayed at the bottom.
Dependencies
- react-native: The framework used for building the app.
- @react-native-picker/picker: For course selection dropdown.
- react-navigation/native: Used for potential navigation features.


