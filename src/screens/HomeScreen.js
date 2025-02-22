import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// The HomeScreen component is the first screen that the user sees when they open the app.
// It allows the user to select a language and a category before starting the quiz.

const HomeScreen = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Create a state variable to store the selected category.
    const [selectedLanguage, setSelectedLanguage] = useState(null); // Create a state variable to store the selected language.

    const startQuiz = () => { // Create a function to start the quiz.
        if (!selectedLanguage) { // Check if a language has been selected.
            alert("Please select a language to start the quiz!");   // Display an alert if a language has not been selected.
            return; 
        }
        if (selectedCategory) {
            navigation.navigate("Quiz", { // Navigate to the QuizScreen with the selected category and language as route parameters.
                category: selectedCategory,
                language: selectedLanguage,
            });
        } else {
            alert("Please select a category to start the quiz!"); // Display an alert if a category has not been selected.
        }
    };

    return ( 
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to STEMWitz!</Text>
            <Text style={styles.title}>Test your STEM knowledge below!</Text>
            
            <Text style={styles.subtitle}>Please select a language:</Text>
            <View style={styles.radioContainer}>
                {/* English Language Selection */}
                <TouchableOpacity
                    style={[styles.roundButton, selectedLanguage === "English" && styles.selectedButton]}
                    onPress={() => setSelectedLanguage("English")}
                >
                    <Text style={styles.buttonText}>English</Text>
                </TouchableOpacity>

                {/* Khmer Language Selection */}
                <TouchableOpacity
                    style={[styles.roundButton, selectedLanguage === "Khmer" && styles.selectedButton]}
                    onPress={() => setSelectedLanguage("Khmer")}
                >
                    <Text style={styles.buttonText}>Khmer</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>Select a category:</Text>
            <View style={styles.buttonContainer}>
                {/* Computer Science Category */}
                <TouchableOpacity
                    style={[styles.roundButton, selectedCategory === "Computer Science" && styles.selectedButton]}
                    onPress={() => setSelectedCategory("Computer Science")}
                >
                    <Text style={styles.buttonText}>Computer Science</Text>
                </TouchableOpacity>

                {/* Space Category */}
                <TouchableOpacity
                    style={[styles.roundButton, selectedCategory === "Space" && styles.selectedButton]}
                    onPress={() => setSelectedCategory("Space")}
                >
                    <Text style={styles.buttonText}>Space</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.startQuiz} onPress={startQuiz}>
                <Text style={styles.startQuizText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 60,
        textAlign: "center",
        color: "black",
        backgroundColor: "lightblue",
        width: "100%",
        padding: 15,

    },
    title: {
        fontSize: 20,
        marginBottom: 60,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 25,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
  
    roundButton: {
        backgroundColor: "black",
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedButton: {
        backgroundColor: "lightblue",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    startQuiz: {
        marginTop: 70,
        backgroundColor: "lightblue",
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    startQuizText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default HomeScreen;
