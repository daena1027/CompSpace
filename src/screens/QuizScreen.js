
import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import questions from "../components/QuizData"; // Import the questions data

// The QuizScreen component displays the quiz questions and answer options.
// It receives the category and language as route parameters from the HomeScreen component.

const QuizScreen = ({ route }) => { 
    const navigation = useNavigation(); // Use the useNavigation hook to access the navigation object.
    const { category, language } = route.params; // Get the category and language from the route parameters
    const [currentQuestionIndex, setCurrentQuestion] = useState(0);// Initialize the current question index to 0 
    const [score, setScore] = useState(0); // Initialize the score to 0
    const [correctAnswers, setCorrectAnswers] = useState(0)// Track correct answers
    const [answered, setAnswered] = useState(false); // Initialize the answered state to not answered
    const currentCategoryQuestions = questions[category]; // Get the questions for the selected category
    const totalQuestions = currentCategoryQuestions.length; // Get the total number of questions in the category

    const currentQuestion = currentCategoryQuestions[currentQuestionIndex]; // Get the current question object
    const currentQuestionText = currentQuestion.questionText[language]; // Get the question text in the selected language
    const currentAnswers = currentQuestion.answerOptions[language]; // Get the answer options in the selected language

    // Handle the user's answer to the question
    const handleAnswer = (answer) => {
        if (!answered) {
            if (answer.isCorrect) {
                setScore(score + 10); // Increment the score by 10 points if the answer is correct
                setCorrectAnswers(correctAnswers + 1); // Increment the number of correct answers by 1
            }
            setAnswered(true); // Mark question as answered
        }
    };

    // Handle moving to the next question
    const handleNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
    
        if (nextQuestionIndex < currentCategoryQuestions.length) {
            setCurrentQuestion(nextQuestionIndex); // Go to next question
            setAnswered(false); // Reset answered state
        } else {
            navigation.navigate("Results", {
                score: score,
                totalQuestions: totalQuestions,
                correctAnswers: correctAnswers,
            });
        }
    };

    // Display the quiz question and answer options
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category}</Text>
            <Text style={styles.question}>{currentQuestionText}</Text> 
            <View style={styles.answers}>
                {currentAnswers.map((option, index) => ( 
                    <TouchableOpacity
                        key={index}
                        style={styles.answerButton}
                        onPress={() => handleAnswer(option)}
                        disabled={answered} // Disable the button if the question has been answered 
                        >
                        <Text style={styles.answerText}>{option.answerText}</Text> 
                    </TouchableOpacity>
                ))}
            </View>
            <Button 
                title="Next" 
                onPress={handleNextQuestion}
                disabled={!answered} // Disable the button if the question has not been answered
                color= "#007AFF"      
            /> 
        </View>
    )
};

// Styles for the QuizScreen component
const styles = StyleSheet.create({
    container: { 
        width: '80%',
        maxWidth: 400,
        minHeight: 300,
        padding: 25,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: "auto",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 35,
        backgroundColor: "lightblue",
        width: "100%",
        padding: 15,
        textAlign: "center",
    },
    question: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        
    },

    answerText: {
        fontSize: 16,
        margin: 10,
        textAlign: "center",
        color: "#007AFF",
        padding: 10,
        borderBlockColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "lightblue",
    },
    Button: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
});
export default QuizScreen; // Export the QuizScreen component