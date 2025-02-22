import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// The ResultsScreen component displays the user's quiz results.
// It receives the score, totalQuestions, and correctAnswers as props from the QuizScreen component.

const ResultsScreen = ({ route, navigation }) => { 
    const { score, totalQuestions, correctAnswers} = route.params; 

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Quiz Results</Text>
            <Text style={styles.subtitle}>
               You scored {score} out of {totalQuestions * 10} points.
            </Text>
            <Text style={styles.subtitle}>
                You selected {correctAnswers} correct answers out of {totalQuestions}.
            </Text>
            <Button 
                title="Restart"
                onPress={() => navigation.navigate("Home")}
            />
        </View> // Return a View component with a title, subtitle, and a Button component that navigates to the HomeScreen when pressed.
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ResultsScreen;