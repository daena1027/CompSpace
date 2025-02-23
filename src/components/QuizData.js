// Store the questions and answers for the quiz for modularity and ease of maintenance.
//Each question contains the question text in English and Khmer, as well as the answer options in English and Khmer.
const questions = {
    "Computer Science": [
        {
            questionText: {
                English: "What is the CPU?",
                Khmer: "តើ CPU គឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    { answerText: "Central Processing Unit", isCorrect: true }, 
                    { answerText: "Computer Printer Unit", isCorrect: false }, 
                    { answerText: "Computer Program Unit", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "ម៉ាស៊ីនស៊ីភីយូ", isCorrect: true },
                    { answerText: "ម៉ាស៊ីនបោះពុម្ពកំព្យូទ័រ", isCorrect: false },      
                    { answerText: "ប្រព័ន្ធកម្មវិធីកុំព្យូទ័រ", isCorrect: false }, 
                ],
            },
        },
        {
            questionText: {
                English: "What is variable declaration?",
                Khmer: "តើការបញ្ជាក់អថេរគឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    {answerText: "A way to change the value of a variable", isCorrect: false },
                    {answerText: "A way to clearly define variables for easy comprehension", isCorrect: true }, // https://quizlet.com/987452714/part-iii-variables-flash-cards/?i=1u3j6n&x=1jqt
                    {answerText: "A way to delete a variable", isCorrect: false },         
                ],
                Khmer: [
                    {answerText: "វិធីផ្លាស់ប្តូរតម្លៃអថេរ", isCorrect: false },
                    {answerText: "វិធីបញ្ជាក់អថេរ សម្រាប់ការស្រួលយល់", isCorrect: true },
                    {answerText: "វិធីលុបអថេរ", isCorrect: false },
                ],
            },
        },
        {
            questionText: {
                English: "What is a loop?",
                Khmer: "តើloopគឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    {answerText: "An operation that must occur only once", isCorrect: false },
                    {answerText: "A method for terminating a program", isCorrect: false },
                    {answerText: "A structure that repeatly executes a block of code", isCorrect: true},
                ],
                Khmer: [
                    {answerText: "ប្រវត្តិការដែលត្រូវកើតឡើងតែមួយដង", isCorrect: false },     
                    {answerText: "វិធីសម្រេចកម្មវិធី", isCorrect: false },
                    {answerText: "ការស្រួលធ្វើការដែលបញ្ជាក់អថេរមួយ", isCorrect: true },
                ],    
            },
        },
        {
            questionText: {
                English: "Which is a hardware component?",
                Khmer: "តើអ្វីជាគ្រឿងផ្នែកហារឌវែរ?",
            },
            answerOptions: {
                English: [
                    {answerText: "Operating System", isCorrect: false },
                    {answerText: "Command Line", isCorrect: false },
                    {answerText: "CPU", isCorrect: true },
                ],
                Khmer: [
                    {answerText: "ប្រព័ន្ធប្រតិបត្ដិការ", isCorrect: false },
                    {answerText: "បណ្តាញបញ្ជា", isCorrect: false },
                    {answerText: "ស៊ីភីយូ", isCorrect: true },
                ],
            },
        },
        {
            questionText: {
                English: "What is the purpose of test cases?",
                Khmer: "តើគោលបំណងនៃករណីតេស្តគឺអ្វី?",
            },
            answerOptions: {
                English: [
                    {answerText: "To ensure the program does not exceed the project's budget", isCorrect: false },  
                    {answerText: "To verify that the program meets requirements and works as expected", isCorrect: true },
                    {answerText: "To speed up the program's execution", isCorrect: false },
                ],
                Khmer: [
                    {answerText: "ដើម្បីធានាថាកម្មវិធីមិនលើសថវិកានៃគម្រោង", isCorrect: false },
                    {answerText: "ដើម្បីពិនិត្យថាកម្មវិធីបំពេញតំរូវការនិងដំណើរការដោយរបៀបដែលបានរំពឹងទុក", isCorrect: true },
                    {answerText: "ដើម្បីបង្កើនល្បឿននៃការប្រតិបត្តិកម្មវិធី", isCorrect: false },
                ],
            },
        },
        { 
            questionText: {
                English:"What is the purpose of gathering requirements?",
                Khmer: "គោលបំណងនៃការប្រមូលតំរូវការនៅក្នុងវិស័យវិស្វកម្មកម្មវិធីគឺអ្វី?",
            },
            answerOptions: {
                English: [
                    {answerText: "To decrease the cost of software development", isCorrect: false },
                    {answerText: "To identify the needs and constraints of the project", isCorrect: true },
                    {answerText: "To speed up the software development process", isCorrect: false },
                ],
                Khmer: [
                    {answerText: "ដើម្បីបន្ថយថ្លៃដើមនៃការអភិវឌ្ឍកម្មវិធី", isCorrect: false },
                    {answerText: "ដើម្បីកំណត់តំរូវការនិងកំណត់ប័ណ្ណនៃកម្មវិធី", isCorrect: true },
                    {answerText: "ដើម្បីបង្កើនល្បឿននៃដំណើរការអភិវឌ្ឍកម្មវិធី", isCorrect: false },
                ],
            },
        },
        {
            questionText: {
                English: "What is the significance of version control in software development?",
                Khmer: "តើអ្វីទៅជាសារៈសំខាន់នៃការគ្រប់គ្រងកំណែក្នុងការអភិវឌ្ឍន៍កម្មវិធី?",        
            },  
            answerOptions: {
                English: [
                    {answerText: "To visualize the steps of a process", isCorrect: false },
                    {answerText: "To test the functionality of a program", isCorrect: false },
                    {answerText: "To track changes and manage different versions of the software", isCorrect: true },
                ],
                Khmer: [
                    {answerText: "ដើម្បីបង្ហាញជំហាននៃដំណើរការ", isCorrect: true },
                    {answerText: "ដើម្បីធ្វើតេស្តនៃកម្មវិធី", isCorrect: false },
                    {answerText: "ដើម្បីសរសេរកូដសម្រាប់កម្មវិធី", isCorrect: false },
                ],
            },

        },
        {
            questionText: {
                English: "Who was the first computer programmer?",
                Khmer: "តើនរណា​ជា​កម្មវិធីករដំបូងបង្អស់?",
            },
            answerOptions: {
                English: [
                    {answerText: "Tim Berners-Lee", isCorrect: false },
                    {answerText: "Ada Lovelace", isCorrect: true },
                    {answerText: "Alan Turing", isCorrect: false },
                ],
                Khmer: [
                    {answerText: "តឹម ប៊ើន័រ-លី", isCorrect: false },
                    {answerText: "អាដា លូវលេស", isCorrect: true },
                    {answerText: "អាឡែន ទ្យូរ៉ីង", isCorrect: false },
                ],
            },
        },
        {
            questionText: { //https://daily.jstor.org/the-bug-in-the-computer-bug-story/
                English: "Grace Hopper discovered the first computer bug. What was it?",
                Khmer: "ក្រេស ហុបរី បានរកឃើញកំហុសកុំព្យូទ័រដំបូងបង្អស់។ វាគឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    {answerText: "A infinite loop that led to a system crash", isCorrect: false },
                    {answerText: "A moth trapped in the computer hardware", isCorrect: true },
                    {answerText: "A memory leak that caused data scrub", isCorrect: false },
                ],
                Khmer: [
                    {answerText: "លុបអនន្តដែលនាំឲ្យប្រព័ន្ធដួលលំណះ", isCorrect: false },
                    {answerText: "មូតស្លាកក្នុងឧបករណ៍កុំព្យូទ័រ", isCorrect: true },
                    {answerText: "ការលេចធ្លាយមេម៉ូរីដែលនាំឲ្យការលុបទិន្នន័យ", isCorrect: false },
                ],
            },
        },
        { 
            questionText: { //https://www.geeksforgeeks.org/top-50-interesting-unknown-facts-about-programming/
                English: "How is PHP used in web development?",
                Khmer: "តើកម្មវិធី PHP ត្រូវបានប្រើប្រាស់នៅក្នុងការអភិវឌ្ឍវេបសាយដែរអ្វី?",
            },
            answerOptions: {
                English: [
                    {answerText: "It is a front-end language for styling web pages", isCorrect: false },
                    {answerText: "It is used to help secure web applications", isCorrect: false },
                    {answerText: "It is a server-side scripting language used for web development", isCorrect: true },
                ],
                Khmer: [
                    {answerText: "វាគឺជាភាសាខាងមុខសម្រាប់រៀបចំទំព័រវេបសាយ", isCorrect: false },
                    {answerText: "វាត្រូវបានប្រើដើម្បីជួយការពារ​កម្មវិធីវេបសាយ", isCorrect: false },
                    {answerText: "វាគឺជាភាសាស៊ីវឺបុសសម្រាប់ការអភិវឌ្ឍវេបសាយ", isCorrect: true },
                ],
            },
        },
    ],
    "Space": [
        {
            questionText: {
                English: "Which is the largest planet in our solar system?",
                Khmer: "តើភពក្រហមធំបំផុតនៅក្នុងប្រព័ន្ធសូឡាររបស់យើងគឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    { answerText: "Jupiter", isCorrect: true },
                    { answerText: "Mars", isCorrect: false },
                    { answerText: "Saturn", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "ជុបតុរ", isCorrect: true },
                    { answerText: "ខ្លួន", isCorrect: false },
                    { answerText: "ស៊ីតុន", isCorrect: false },
                ],
            },
        },
        {
            questionText: {
                English: "What is the name of the first satellite sent into space?",
                Khmer: "តើឈ្មោះនៃសាតិវិទ្យាដំបូងដែលបានផ្ញើទៅកាន់កន្លះគឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    { answerText: "Apollo 11", isCorrect: false },
                    { answerText: "Sputnik 1", isCorrect: true },
                    { answerText: "Hubble Space Telescope", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "អាបូឡូ 11", isCorrect: false },
                    { answerText: "សពិនគ 1", isCorrect: true },
                    { answerText: "តែបូលស្បេរីបូរីបូល", isCorrect: false },
                ],
            },
        },
        {
            questionText: { //https://www.space.com/18135-how-far-is-the-moon.html
                English: "How far away is the moon from Earth?",
                Khmer: "តើព្រះច័ន្ទឆ្ងាយពីផែនដីប៉ុន្មាន?",
            },
            answerOptions: {
                English: [
                    { answerText: "238,855 miles", isCorrect: false },
                    { answerText: "384,400 kilometers", isCorrect: true },
                    { answerText: "1 light year", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "238,855 ម៉ាល", isCorrect: false },
                    { answerText: "384,400 គីឡីម៉េត្រ", isCorrect: true },
                    { answerText: "1 ឆ្នាំពន្លឺ", isCorrect: false },
                ],
            },
        },
        {
            questionText: { //https://www.nasa.gov/image-article/april-1961-first-human-entered-space/
                English: "Who was the first human to travel into space?",
                Khmer: "នរណា​ជា​មនុស្ស​ដំបូង​ដែល​ធ្វើ​ដឹង​ទៅ​កាន់​កន្លះ?",
            },
            answerOptions: {
                English: [
                    { answerText: "Yuri Gagarin", isCorrect: true },
                    { answerText: "Neil Armstrong", isCorrect: false },
                    { answerText: "Stephen Hawking", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "យូរី ហ្គាហ្គារីន", isCorrect: true },
                    { answerText: "នេល អាមស្ត្រុង", isCorrect: false },
                    { answerText: "យូរី ហ្គាហ្គារីន", isCorrect: false }, 
                ],
            },
        },
        {
            questionText: {
                English: "How many planets are in our solar system?",
                Khmer: "តើមានភពប៉ុន្មាននៅក្នុងប្រព័ន្ធព្រះអាទិត្យរបស់យើង?",
            },
            answerOptions: {//https://science.nasa.gov/solar-system/
                English: [
                    { answerText: "7", isCorrect: false },
                    { answerText: "8", isCorrect: true },
                    { answerText: "9", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "7", isCorrect: false },
                    { answerText: "8", isCorrect: true },
                    { answerText: "9", isCorrect: false },
                ],
            },
        },
        {
            questionText: { //https://science.nasa.gov/solar-system/resources/resource-packages/ocean-worlds-resources/
                English: "What is Nasa's Europa Clipper mission?",
                Khmer: "តើបេសកកម្ម Europa Clipper របស់ Nasa ជាអ្វី?",
            },
            answerOptions: {
                English: [
                    { answerText: "To study water on Mars", isCorrect: false },
                    { answerText: "To explore Saturn's moon surface", isCorrect: false },
                    { answerText: "To study Jupiter's icy moon", isCorrect: true },
                ],
                Khmer: [
                    { answerText: "ដើម្បីសិក្សាទឹកនៅលើភពព្រះអង្គារ", isCorrect: false },
                    { answerText: "ដើម្បីស្វែងយល់អំពីផ្ទៃខ្សាច់នៃព្រះច័ន្ទសាតឺន", isCorrect: false },
                    { answerText: "ដើម្បីសិក្សាព្រះច័ន្ទទឹកកករបស់ភពព្រហស្បតិ៍", isCorrect: true },
                ],
            },
        },
        {
            questionText: { //https://www.history.com/topics/1960s/moon-landing-1969
                English: "What year did humans land on the moon?",
                Khmer: "តើមនុស្សទៅឋានព្រះច័ន្ទនៅឆ្នាំណា?",
            },
            answerOptions: {
                English: [
                    { answerText: "1967", isCorrect: false },
                    { answerText: "1969", isCorrect: true },
                    { answerText: "1971", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "1967", isCorrect: false },
                    { answerText: "1969", isCorrect: true },
                    { answerText: "1971", isCorrect: false },
                ],
            },
        },
        {
            questionText: { //https://www.britannica.com/place/Olympus-Mons
                English: "What is the name of the largest volcano in the solar system?",
                Khmer: "ឈ្មោះនៃភពមូឡុងធំបំផុតនៅក្នុងប្រព័ន្ធសូឡារគឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    { answerText: "Mount Everest", isCorrect: false },
                    { answerText: "Olympus Mons", isCorrect: true },
                    { answerText: "Mauna Loa", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "ភ្លើងមេសត្ន័", isCorrect: false },
                    { answerText: "អូឡមូស មុន", isCorrect: true },
                    { answerText: "ម៉ាអុនា ឡូ", isCorrect: false },
                ],
            },
        },
        {
            questionText: { //https://science.nasa.gov/resource/largest-moon/
                English: "What is the largest moon in the solar system?",
                Khmer: "តើភពច័ន្ទធំបំផុតនៅក្នុងប្រព័ន្ធសូឡារគឺជាអ្វី?",
            },
            answerOptions: {
                English: [
                    { answerText: "Titan", isCorrect: false },
                    { answerText: "Callisto", isCorrect: false },
                    { answerText: "Ganymede", isCorrect: true },
                ],
                Khmer: [
                    { answerText: "ទីតាន", isCorrect: false },
                    { answerText: "កាលីស្តូ", isCorrect: false },
                    { answerText: "កានីម៉ីដ", isCorrect: true },
                ],  
            },
        },
        {
            questionText: { //https://science.nasa.gov/resource/largest-moon/
                English: "Which planet does the largest moon in our solar system orbit?",
                Khmer: "តើភពមួយណាដែលព្រះច័ន្ទធំជាងគេនៅក្នុងប្រព័ន្ធព្រះអាទិត្យរបស់យើងគន្លង?",
            },
            answerOptions: {
                English: [
                    { answerText: "Jupiter", isCorrect: true },
                    { answerText: "Saturn", isCorrect: false },
                    { answerText: "Uranus", isCorrect: false },
                ],
                Khmer: [
                    { answerText: "ភពព្រហស្បតិ៍", isCorrect: true },
                    { answerText: "ស៊ភពសៅរ៍", isCorrect: false },
                    { answerText: "អូរ៉ាណូស", isCorrect: false },
                ],
            },
        },

    ],
};

export default questions; // Export the questions object for use in other components