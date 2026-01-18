// Cozy English Academy - Interactive English Learning Website
// Author: Farangis Rajabova

// Data for all grammar topics and questions
const grammarTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "___ am a student.", options: ["I", "He", "She"], answer: "I" },
            { type: "multiple-choice", question: "___ is my brother.", options: ["I", "He", "We"], answer: "He" },
            { type: "multiple-choice", question: "___ are good friends.", options: ["She", "He", "We"], answer: "We" },
            { type: "multiple-choice", question: "___ is a doctor.", options: ["She", "We", "They"], answer: "She" },
            { type: "multiple-choice", question: "___ are from London.", options: ["He", "They", "I"], answer: "They" },
            { type: "multiple-choice", question: "___ is a cat.", options: ["It", "They", "We"], answer: "It" },
            { type: "multiple-choice", question: "___ is my teacher.", options: ["She", "They", "It"], answer: "She" },
            { type: "multiple-choice", question: "___ are students.", options: ["He", "She", "They"], answer: "They" },
            { type: "fill-blank", question: "My sister ___ apples every day.", answer: "likes" },
            { type: "fill-blank", question: "Muhammad said ___ is tired after work.", answer: "he" }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "She gave ___ a book.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "I saw ___ yesterday.", options: ["he", "him", "his"], answer: "him" },
            { type: "multiple-choice", question: "Can you help ___?", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "He called ___ last night.", options: ["she", "her", "hers"], answer: "her" },
            { type: "multiple-choice", question: "I don't know ___", options: ["they", "them", "their"], answer: "them" },
            { type: "multiple-choice", question: "The teacher asked ___ a question.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "Muhammad told ___ the story.", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "She likes ___", options: ["he", "him", "his"], answer: "him" },
            { type: "fill-blank", question: "Please give ___ the pen when you finish.", answer: "me" },
            { type: "fill-blank", question: "I will call ___ tomorrow at 5 PM.", answer: "you" }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "This is ___ book.", options: ["I", "my", "me"], answer: "my" },
            { type: "multiple-choice", question: "That is ___ car.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "___ name is Sarah.", options: ["Her", "She", "Hers"], answer: "Her" },
            { type: "multiple-choice", question: "This is ___ house.", options: ["we", "our", "us"], answer: "our" },
            { type: "multiple-choice", question: "___ teacher is very good.", options: ["They", "Their", "Them"], answer: "Their" },
            { type: "multiple-choice", question: "Is this ___ pen?", options: ["you", "your", "yours"], answer: "your" },
            { type: "multiple-choice", question: "Muhammad forgot ___ bag.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The dog ate ___ food.", options: ["it", "its", "it's"], answer: "its" },
            { type: "fill-blank", question: "I really like ___ new phone.", answer: "my" },
            { type: "fill-blank", question: "She lost ___ keys somewhere in the house.", answer: "her" }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "This book is ___", options: ["my", "mine", "I"], answer: "mine" },
            { type: "multiple-choice", question: "Is this pen ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "multiple-choice", question: "That car is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The red house is ___", options: ["they", "their", "theirs"], answer: "theirs" },
            { type: "multiple-choice", question: "These shoes are ___", options: ["our", "ours", "us"], answer: "ours" },
            { type: "multiple-choice", question: "The idea was ___", options: ["she", "her", "hers"], answer: "hers" },
            { type: "multiple-choice", question: "Muhammad said the bag is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "Is this umbrella ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "fill-blank", question: "This phone is not yours, it's ___.", answer: "mine" },
            { type: "fill-blank", question: "The victory was not ours, it was ___.", answer: "theirs" }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "I cut ___ while cooking.", options: ["me", "myself", "my"], answer: "myself" },
            { type: "multiple-choice", question: "She bought ___ a new dress.", options: ["her", "herself", "hers"], answer: "herself" },
            { type: "multiple-choice", question: "They enjoyed ___ at the party.", options: ["them", "themselves", "theirs"], answer: "themselves" },
            { type: "multiple-choice", question: "He taught ___ to play guitar.", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "We organized the event ___", options: ["our", "ourselves", "us"], answer: "ourselves" },
            { type: "multiple-choice", question: "The cat cleaned ___", options: ["it", "itself", "its"], answer: "itself" },
            { type: "multiple-choice", question: "Muhammad fixed the car ___", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "You should do it ___", options: ["you", "yourself", "yours"], answer: "yourself" },
            { type: "fill-blank", question: "I made this cake all by ___.", answer: "myself" },
            { type: "fill-blank", question: "She spoke to ___ in the mirror every morning.", answer: "herself" }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "I have ___ apples.", options: ["one", "first", "ones"], answer: "one" },
            { type: "multiple-choice", question: "There are ___ days in a week.", options: ["seven", "seventh", "sevens"], answer: "seven" },
            { type: "multiple-choice", question: "She has ___ brothers.", options: ["two", "second", "twos"], answer: "two" },
            { type: "multiple-choice", question: "Muhammad is ___ years old.", options: ["twenty", "twentieth", "twenties"], answer: "twenty" },
            { type: "multiple-choice", question: "There are ___ students in the class.", options: ["thirty", "thirtieth", "thirty's"], answer: "thirty" },
            { type: "multiple-choice", question: "I need ___ eggs for the recipe.", options: ["three", "third", "threes"], answer: "three" },
            { type: "multiple-choice", question: "The book has ___ pages.", options: ["one hundred", "hundredth", "hundreds"], answer: "one hundred" },
            { type: "multiple-choice", question: "We walked for ___ minutes.", options: ["fifteen", "fifteenth", "fifteens"], answer: "fifteen" },
            { type: "fill-blank", question: "There are exactly ___ months in a year.", answer: "twelve" },
            { type: "fill-blank", question: "I bought ___ oranges from the market.", answer: "five" }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "January is the ___ month.", options: ["one", "first", "ones"], answer: "first" },
            { type: "multiple-choice", question: "My birthday is on the ___ of May.", options: ["five", "fifth", "fives"], answer: "fifth" },
            { type: "multiple-choice", question: "This is my ___ time in London.", options: ["two", "second", "twos"], answer: "second" },
            { type: "multiple-choice", question: "She finished in ___ place.", options: ["three", "third", "threes"], answer: "third" },
            { type: "multiple-choice", question: "Muhammad lives on the ___ floor.", options: ["ten", "tenth", "tenths"], answer: "tenth" },
            { type: "multiple-choice", question: "Today is the ___ of June.", options: ["eight", "eighth", "eighths"], answer: "eighth" },
            { type: "multiple-choice", question: "This is our ___ anniversary.", options: ["four", "fourth", "fourths"], answer: "fourth" },
            { type: "multiple-choice", question: "He came in ___ in the race.", options: ["seven", "seventh", "sevenths"], answer: "seventh" },
            { type: "fill-blank", question: "It's my ___ visit to Paris, and I'm very excited.", answer: "first" },
            { type: "fill-blank", question: "Her office is on the ___ floor of the building.", answer: "third" }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "___ is my book (near me).", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ are my keys (near me).", options: ["This", "That", "These"], answer: "These" },
            { type: "multiple-choice", question: "___ is your bag over there.", options: ["This", "That", "These"], answer: "That" },
            { type: "multiple-choice", question: "___ are my friends over there.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "multiple-choice", question: "Look at ___ beautiful flowers!", options: ["this", "that", "these"], answer: "these" },
            { type: "multiple-choice", question: "___ car is very fast.", options: ["This", "That", "Those"], answer: "That" },
            { type: "multiple-choice", question: "Muhammad said, '___ is my sister.' (pointing nearby)", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ books on the shelf are old.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "fill-blank", question: "___ house right here is where I live.", answer: "This" },
            { type: "fill-blank", question: "Look at ___ mountains far away - they're very high.", answer: "those" }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
            { type: "multiple-choice", question: "He ___ my brother.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "We ___ friends.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "She ___ a doctor.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "They ___ from London.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "It ___ a cat.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "You ___ my teacher.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "Muhammad ___ a good student.", options: ["am", "is", "are"], answer: "is" },
            { type: "fill-blank", question: "I ___ very happy today.", answer: "am" },
            { type: "fill-blank", question: "They ___ at school right now.", answer: "are" }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "I ___ at home yesterday.", options: ["was", "were", "am"], answer: "was" },
            { type: "multiple-choice", question: "They ___ in London last week.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "She ___ tired after work.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "We ___ happy to see you.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "He ___ at the party last night.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "You ___ late for class.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "Muhammad ___ sick yesterday.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "The children ___ excited about the trip.", options: ["was", "were", "are"], answer: "were" },
            { type: "fill-blank", question: "It ___ very cold yesterday.", answer: "was" },
            { type: "fill-blank", question: "We ___ at the cinema last night.", answer: "were" }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "I ___ at home tomorrow.", options: ["will be", "was", "am"], answer: "will be" },
            { type: "multiple-choice", question: "They ___ in Paris next month.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "She ___ a doctor in the future.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "We ___ happy to help you.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "He ___ here soon.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "You ___ surprised by the news.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Muhammad ___ at the meeting tomorrow.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "The weather ___ nice next week.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "fill-blank", question: "I ___ ready in five minutes.", answer: "will be" },
            { type: "fill-blank", question: "They ___ here at exactly 5 PM.", answer: "will be" }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "I ___ English every day.", options: ["study", "studies", "studying"], answer: "study" },
            { type: "multiple-choice", question: "He ___ to work by bus.", options: ["go", "goes", "going"], answer: "goes" },
            { type: "multiple-choice", question: "We ___ TV in the evening.", options: ["watch", "watches", "watching"], answer: "watch" },
            { type: "multiple-choice", question: "She ___ in an office.", options: ["work", "works", "working"], answer: "works" },
            { type: "multiple-choice", question: "They ___ in London.", options: ["live", "lives", "living"], answer: "live" },
            { type: "multiple-choice", question: "Muhammad ___ coffee every morning.", options: ["drink", "drinks", "drinking"], answer: "drinks" },
            { type: "multiple-choice", question: "I usually ___ at 7 AM.", options: ["wake up", "wakes up", "waking up"], answer: "wake up" },
            { type: "multiple-choice", question: "My parents ___ in a small town.", options: ["live", "lives", "living"], answer: "live" },
            { type: "fill-blank", question: "She always ___ to music while studying.", answer: "listens" },
            { type: "fill-blank", question: "We ___ football every Saturday.", answer: "play" }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "I ___ TV yesterday.", options: ["watch", "watched", "watching"], answer: "watched" },
            { type: "multiple-choice", question: "She ___ her homework last night.", options: ["finish", "finished", "finishing"], answer: "finished" },
            { type: "multiple-choice", question: "We ___ to the park on Sunday.", options: ["walk", "walked", "walking"], answer: "walked" },
            { type: "multiple-choice", question: "He ___ the dishes after dinner.", options: ["wash", "washed", "washing"], answer: "washed" },
            { type: "multiple-choice", question: "They ___ football yesterday.", options: ["play", "played", "playing"], answer: "played" },
            { type: "multiple-choice", question: "Muhammad ___ his room yesterday.", options: ["clean", "cleaned", "cleaning"], answer: "cleaned" },
            { type: "multiple-choice", question: "I ___ my grandmother last week.", options: ["visit", "visited", "visiting"], answer: "visited" },
            { type: "multiple-choice", question: "She ___ to music all evening.", options: ["listen", "listened", "listening"], answer: "listened" },
            { type: "fill-blank", question: "We ___ for the test all night.", answer: "studied" },
            { type: "fill-blank", question: "He ___ his car last weekend.", answer: "washed" }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "I ___ you tomorrow.", options: ["call", "will call", "called"], answer: "will call" },
            { type: "multiple-choice", question: "She ___ to the party next week.", options: ["come", "will come", "came"], answer: "will come" },
            { type: "multiple-choice", question: "We ___ dinner at 7 PM.", options: ["have", "will have", "had"], answer: "will have" },
            { type: "multiple-choice", question: "They ___ their homework tonight.", options: ["do", "will do", "did"], answer: "will do" },
            { type: "multiple-choice", question: "He ___ a new car next year.", options: ["buy", "will buy", "bought"], answer: "will buy" },
            { type: "multiple-choice", question: "Muhammad ___ to London next month.", options: ["travel", "will travel", "traveled"], answer: "will travel" },
            { type: "multiple-choice", question: "I ___ you with your project.", options: ["help", "will help", "helped"], answer: "will help" },
            { type: "multiple-choice", question: "The meeting ___ at 3 PM.", options: ["start", "will start", "started"], answer: "will start" },
            { type: "fill-blank", question: "She ___ the report by tomorrow evening.", answer: "will finish" },
            { type: "fill-blank", question: "We ___ early tomorrow morning.", answer: "will leave" }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "___ a book on the table.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ three chairs in the room.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a cat in the garden.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ many people at the party.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a problem with the computer.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ some milk in the fridge.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ two apples on the plate.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a letter for you.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "fill-blank", question: "___ a pen in my bag if you need one.", answer: "There is" },
            { type: "fill-blank", question: "___ many students in the classroom today.", answer: "There are" }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "___ a party last night.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ many people at the concert.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a big tree in the garden.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ three cats in the house.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a problem with the car.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ some coffee in the cup.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ two books on the table.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a beautiful sunset yesterday.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "fill-blank", question: "___ a good film on TV last night.", answer: "There was" },
            { type: "fill-blank", question: "___ many students in the classroom yesterday.", answer: "There were" }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "The book is ___ the table.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The cat is ___ the box.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The ball is ___ the bed.", options: ["under", "on", "in"], answer: "under" },
            { type: "multiple-choice", question: "She is standing ___ the door.", options: ["behind", "on", "in"], answer: "behind" },
            { type: "multiple-choice", question: "The school is ___ the hospital.", options: ["next to", "in", "on"], answer: "next to" },
            { type: "multiple-choice", question: "Muhammad is ___ the classroom.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The keys are ___ the drawer.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The picture is ___ the wall.", options: ["on", "in", "at"], answer: "on" },
            { type: "fill-blank", question: "The cat is sleeping ___ the tree.", answer: "under" },
            { type: "fill-blank", question: "He is sitting right ___ me in the classroom.", answer: "next to" }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "I go to work ___ the morning.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "We have class ___ Monday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The meeting starts ___ 9 o'clock.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "My birthday is ___ July.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "I'll see you ___ Friday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "Muhammad studies ___ the evening.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The shop closes ___ 6 PM.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "We go on holiday ___ summer.", options: ["in", "on", "at"], answer: "in" },
            { type: "fill-blank", question: "I usually wake up ___ 7 AM every morning.", answer: "at" },
            { type: "fill-blank", question: "She was born ___ 1990 in London.", answer: "in" }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "I ___ swim when I was five.", options: ["can", "could", "am able to"], answer: "could" },
            { type: "multiple-choice", question: "She ___ speak three languages.", options: ["can", "could", "was able to"], answer: "can" },
            { type: "multiple-choice", question: "___ you help me with this?", options: ["Can", "Could", "Are able to"], answer: "Can" },
            { type: "multiple-choice", question: "They ___ come to the party yesterday.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ I borrow your pen?", options: ["Can", "Could", "Am able to"], answer: "Can" },
            { type: "multiple-choice", question: "Muhammad ___ play the piano very well.", options: ["can", "could", "is able to"], answer: "can" },
            { type: "multiple-choice", question: "We ___ finish the project on time.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ you open the window, please?", options: ["Can", "Could", "Are able to"], answer: "Could" },
            { type: "fill-blank", question: "I ___ speak French fluently.", answer: "can" },
            { type: "fill-blank", question: "He ___ solve the difficult problem.", answer: "was able to" }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "You ___ wear a seatbelt in the car.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "I ___ go to the bank today.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "multiple-choice", question: "You ___ see that movie, it's great!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "Students ___ do their homework.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "We ___ be quiet in the library.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "Muhammad ___ study for his exam.", options: ["must", "has to", "should"], answer: "has to" },
            { type: "multiple-choice", question: "You ___ try this cake, it's delicious!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "I ___ wake up early tomorrow.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "fill-blank", question: "You ___ drive on the left in the UK.", answer: "must" },
            { type: "fill-blank", question: "We ___ finish this report by today.", answer: "have to" }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "I ___ play football when I was young.", options: ["used to", "use to", "am used to"], answer: "used to" },
            { type: "multiple-choice", question: "She ___ have long hair.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "We ___ live in London.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "He ___ smoke, but he quit last year.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "They ___ go to that school.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "Muhammad ___ drink coffee, but now he prefers tea.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "There ___ be a park here.", options: ["used to", "use to", "was used to"], answer: "used to" },
            { type: "multiple-choice", question: "I ___ like vegetables, but now I love them.", options: ["didn't use to", "didn't used to", "wasn't used to"], answer: "didn't use to" },
            { type: "fill-blank", question: "I ___ walk to school when I was a child.", answer: "used to" },
            { type: "fill-blank", question: "She ___ live in Paris before moving to London.", answer: "used to" }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "I ___ buy milk because we already had some.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "She ___ go to the bank because she had enough cash.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "We ___ hurry because the train was late.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "He ___ worry about the test because it was easy.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "They ___ cook because we ordered pizza.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "Muhammad ___ study so hard for the easy exam.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "You ___ bring an umbrella because it didn't rain.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "I ___ call him because he called me first.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "fill-blank", question: "She ___ buy tickets; they were already free.", answer: "needn't have" },
            { type: "fill-blank", question: "We ___ rush; we had plenty of time.", answer: "didn't need to" }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "___ is your name?", options: ["Who", "What", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ do you live?", options: ["Who", "What", "Where"], answer: "Where" },
            { type: "multiple-choice", question: "___ old are you?", options: ["How", "What", "When"], answer: "How" },
            { type: "multiple-choice", question: "___ is your birthday?", options: ["When", "What", "Where"], answer: "When" },
            { type: "multiple-choice", question: "___ is that man?", options: ["Who", "What", "Where"], answer: "Who" },
            { type: "multiple-choice", question: "___ do you study English?", options: ["Why", "What", "When"], answer: "Why" },
            { type: "multiple-choice", question: "___ is your favorite color?", options: ["What", "Who", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ does Muhammad work?", options: ["Where", "What", "When"], answer: "Where" },
            { type: "fill-blank", question: "___ time does the movie start?", answer: "What" },
            { type: "fill-blank", question: "___ are you going after class?", answer: "Where" }
        ]
    }
];

// Vocabulary data - DIRECTLY LINKED TO GRAMMAR TOPICS - TRANSLATION-BASED
const vocabularyTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "Choose the correct Russian meaning of the word 'I':", options: ["он", "я", "мы"], answer: "я" },
            { type: "multiple-choice", question: "What does 'he' mean in Russian?", options: ["она", "он", "они"], answer: "он" },
            { type: "multiple-choice", question: "Choose the correct Russian meaning of 'she':", options: ["он", "она", "они"], answer: "она" },
            { type: "multiple-choice", question: "What does 'we' mean in Russian?", options: ["вы", "мы", "они"], answer: "мы" },
            { type: "multiple-choice", question: "Choose the correct Russian meaning of 'they':", options: ["мы", "они", "вы"], answer: "они" },
            { type: "multiple-choice", question: "What does 'it' mean in Russian?", options: ["оно", "он", "она"], answer: "оно" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'You are my friend.'", options: ["Ты мой друг.", "Я твой друг.", "Он мой друг."], answer: "Ты мой друг." },
            { type: "multiple-choice", question: "What does 'You are students.' mean in Russian?", options: ["Мы студенты.", "Вы студенты.", "Они студенты."], answer: "Вы студенты." },
            { type: "fill-blank", question: "Переведите на английский: Он сейчас дома.", answer: "He is at home now." },
            { type: "fill-blank", question: "Переведите на английский: Мы хорошие друзья.", answer: "We are good friends." }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "What does 'me' mean in Russian?", options: ["меня", "мне", "мой"], answer: "меня" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'him':", options: ["его", "ему", "её"], answer: "его" },
            { type: "multiple-choice", question: "What does 'her' mean in Russian?", options: ["её", "его", "ей"], answer: "её" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'us':", options: ["нас", "нам", "наш"], answer: "нас" },
            { type: "multiple-choice", question: "What does 'them' mean in Russian?", options: ["их", "им", "они"], answer: "их" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'She sees me.'", options: ["Она видит меня.", "Она видит тебя.", "Она видит его."], answer: "Она видит меня." },
            { type: "multiple-choice", question: "What does 'I help them.' mean in Russian?", options: ["Я помогаю им.", "Я помогаю нам.", "Я помогаю вам."], answer: "Я помогаю им." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'He calls you.'", options: ["Он звонит тебе.", "Он звонит мне.", "Он звонит ей."], answer: "Он звонит тебе." },
            { type: "fill-blank", question: "Переведите на английский: Она дала мне книгу.", answer: "She gave me a book." },
            { type: "fill-blank", question: "Переведите на английский: Я видел его вчера.", answer: "I saw him yesterday." }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "What does 'my' mean in Russian?", options: ["мой", "твой", "наш"], answer: "мой" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'your':", options: ["твой", "мой", "ваш"], answer: "твой" },
            { type: "multiple-choice", question: "What does 'his' mean in Russian?", options: ["его", "её", "их"], answer: "его" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'her':", options: ["её", "его", "их"], answer: "её" },
            { type: "multiple-choice", question: "What does 'our' mean in Russian?", options: ["наш", "ваш", "их"], answer: "наш" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'their':", options: ["их", "наш", "ваш"], answer: "их" },
            { type: "multiple-choice", question: "What does 'This is my house.' mean in Russian?", options: ["Это мой дом.", "Это твой дом.", "Это его дом."], answer: "Это мой дом." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'That is their car.'", options: ["Это их машина.", "Это наша машина.", "Это его машина."], answer: "Это их машина." },
            { type: "fill-blank", question: "Переведите на английский: Это его книга.", answer: "This is his book." },
            { type: "fill-blank", question: "Переведите на английский: Наш учитель очень добрый.", answer: "Our teacher is very kind." }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "What does 'mine' mean in Russian?", options: ["мой", "моё", "моя"], answer: "мой" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'yours':", options: ["твой", "твоё", "твоя"], answer: "твой" },
            { type: "multiple-choice", question: "What does 'his' mean in Russian?", options: ["его", "её", "их"], answer: "его" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'hers':", options: ["её", "его", "их"], answer: "её" },
            { type: "multiple-choice", question: "What does 'ours' mean in Russian?", options: ["наш", "ваш", "их"], answer: "наш" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'theirs':", options: ["их", "наш", "ваш"], answer: "их" },
            { type: "multiple-choice", question: "What does 'This book is mine.' mean in Russian?", options: ["Эта книга моя.", "Эта книга твоя.", "Эта книга его."], answer: "Эта книга моя." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'These shoes are ours.'", options: ["Эти туфли наши.", "Эти туфли ваши.", "Эти туфли их."], answer: "Эти туфли наши." },
            { type: "fill-blank", question: "Переведите на английский: Эта сумка её.", answer: "This bag is hers." },
            { type: "fill-blank", question: "Переведите на английский: Эта победа их.", answer: "This victory is theirs." }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "What does 'myself' mean in Russian?", options: ["себя", "сам", "самому"], answer: "сам" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'yourself':", options: ["сам", "сама", "сами"], answer: "сам" },
            { type: "multiple-choice", question: "What does 'himself' mean in Russian?", options: ["сам", "сама", "само"], answer: "сам" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'herself':", options: ["сама", "сам", "само"], answer: "сама" },
            { type: "multiple-choice", question: "What does 'themselves' mean in Russian?", options: ["сами", "само", "сама"], answer: "сами" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I did it myself.'", options: ["Я сделал это сам.", "Я сделал это для себя.", "Я сделал это один."], answer: "Я сделал это сам." },
            { type: "multiple-choice", question: "What does 'She bought herself a dress.' mean in Russian?", options: ["Она купила себе платье.", "Она купила платье сама.", "Она купила платье для него."], answer: "Она купила себе платье." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'They organized the party themselves.'", options: ["Они организовали вечеринку сами.", "Они организовали вечеринку для себя.", "Они организовали вечеринку вместе."], answer: "Они организовали вечеринку сами." },
            { type: "fill-blank", question: "Переведите на английский: Я приготовил этот торт сам.", answer: "I made this cake myself." },
            { type: "fill-blank", question: "Переведите на английский: Она разговаривала сама с собой.", answer: "She was talking to herself." }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "What does 'one' mean in Russian?", options: ["один", "первый", "раз"], answer: "один" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'two':", options: ["два", "второй", "двое"], answer: "два" },
            { type: "multiple-choice", question: "What does 'ten' mean in Russian?", options: ["десять", "десятый", "десяток"], answer: "десять" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'twenty':", options: ["двадцать", "двадцатый", "два десятка"], answer: "двадцать" },
            { type: "multiple-choice", question: "What does 'hundred' mean in Russian?", options: ["сто", "сотня", "сотый"], answer: "сто" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I have three apples.'", options: ["У меня три яблока.", "У меня третье яблоко.", "У меня тридцать яблок."], answer: "У меня три яблока." },
            { type: "multiple-choice", question: "What does 'There are seven days in a week.' mean in Russian?", options: ["В неделе семь дней.", "В неделе седьмой день.", "В неделе семьдесят дней."], answer: "В неделе семь дней." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'He is fifteen years old.'", options: ["Ему пятнадцать лет.", "Ему пятидесятый год.", "Ему пятьдесят лет."], answer: "Ему пятнадцать лет." },
            { type: "fill-blank", question: "Переведите на английский: У меня пять карандашей.", answer: "I have five pencils." },
            { type: "fill-blank", question: "Переведите на английский: В классе тридцать студентов.", answer: "There are thirty students in the class." }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "What does 'first' mean in Russian?", options: ["первый", "один", "вначале"], answer: "первый" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'second':", options: ["второй", "два", "следующий"], answer: "второй" },
            { type: "multiple-choice", question: "What does 'third' mean in Russian?", options: ["третий", "три", "трижды"], answer: "третий" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'fifth':", options: ["пятый", "пять", "пятеро"], answer: "пятый" },
            { type: "multiple-choice", question: "What does 'tenth' mean in Russian?", options: ["десятый", "десять", "десяток"], answer: "десятый" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'This is my first visit.'", options: ["Это мой первый визит.", "Это мой один визит.", "Это мой главный визит."], answer: "Это мой первый визит." },
            { type: "multiple-choice", question: "What does 'She lives on the eighth floor.' mean in Russian?", options: ["Она живёт на восьмом этаже.", "Она живёт на восемь этаже.", "Она живёт на этаже восемь."], answer: "Она живёт на восьмом этаже." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'Today is the fifth of May.'", options: ["Сегодня пятое мая.", "Сегодня пять мая.", "Сегодня мая пятое."], answer: "Сегодня пятое мая." },
            { type: "fill-blank", question: "Переведите на английский: Это её третий день в школе.", answer: "This is her third day at school." },
            { type: "fill-blank", question: "Переведите на английский: Мой офис на втором этаже.", answer: "My office is on the second floor." }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "What does 'this' (близкий) mean in Russian?", options: ["этот", "тот", "эти"], answer: "этот" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'that' (далёкий):", options: ["тот", "этот", "та"], answer: "тот" },
            { type: "multiple-choice", question: "What does 'these' (близкие) mean in Russian?", options: ["эти", "те", "этот"], answer: "эти" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'those' (далёкие):", options: ["те", "эти", "тот"], answer: "те" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'This is my book.' (книга рядом)", options: ["Это моя книга.", "Та моя книга.", "Эти мои книги."], answer: "Это моя книга." },
            { type: "multiple-choice", question: "What does 'That car is fast.' mean in Russian?", options: ["Та машина быстрая.", "Эта машина быстрая.", "Те машины быстрые."], answer: "Та машина быстрая." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'These flowers are beautiful.'", options: ["Эти цветы красивые.", "Те цветы красивые.", "Этот цветок красивый."], answer: "Эти цветы красивые." },
            { type: "multiple-choice", question: "What does 'Those mountains are high.' mean in Russian?", options: ["Те горы высокие.", "Эти горы высокие.", "Та гора высокая."], answer: "Те горы высокие." },
            { type: "fill-blank", question: "Переведите на английский: Этот дом мой.", answer: "This house is mine." },
            { type: "fill-blank", question: "Переведите на английский: Те книги интересные.", answer: "Those books are interesting." }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "What does 'am' (с 'I') mean in Russian?", options: ["есть", "являюсь", "быть"], answer: "есть" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'is' (с he/she/it):", options: ["есть", "является", "быть"], answer: "есть" },
            { type: "multiple-choice", question: "What does 'are' (с you/we/they) mean in Russian?", options: ["есть", "являются", "быть"], answer: "есть" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I am a student.'", options: ["Я студент.", "Я есть студент.", "Я являюсь студентом."], answer: "Я студент." },
            { type: "multiple-choice", question: "What does 'He is my brother.' mean in Russian?", options: ["Он мой брат.", "Он есть мой брат.", "Он является моим братом."], answer: "Он мой брат." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'We are friends.'", options: ["Мы друзья.", "Мы есть друзья.", "Мы являемся друзьями."], answer: "Мы друзья." },
            { type: "multiple-choice", question: "What does 'They are at home.' mean in Russian?", options: ["Они дома.", "Они есть дома.", "Они находятся дома."], answer: "Они дома." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'You are a good teacher.'", options: ["Вы хороший учитель.", "Вы есть хороший учитель.", "Вы являетесь хорошим учителем."], answer: "Вы хороший учитель." },
            { type: "fill-blank", question: "Переведите на английский: Она сейчас в школе.", answer: "She is at school now." },
            { type: "fill-blank", question: "Переведите на английский: Они счастливы сегодня.", answer: "They are happy today." }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "What does 'was' (с I/he/she/it) mean in Russian?", options: ["был", "есть", "быть"], answer: "был" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'were' (с you/we/they):", options: ["были", "есть", "быть"], answer: "были" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I was at home yesterday.'", options: ["Я был дома вчера.", "Я есть дома вчера.", "Я находился дома вчера."], answer: "Я был дома вчера." },
            { type: "multiple-choice", question: "What does 'They were in London.' mean in Russian?", options: ["Они были в Лондоне.", "Они есть в Лондоне.", "Они находились в Лондоне."], answer: "Они были в Лондоне." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'She was tired.'", options: ["Она была уставшей.", "Она есть уставшая.", "Она являлась уставшей."], answer: "Она была уставшей." },
            { type: "multiple-choice", question: "What does 'We were happy.' mean in Russian?", options: ["Мы были счастливы.", "Мы есть счастливые.", "Мы являлись счастливыми."], answer: "Мы были счастливы." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'He was at the party.'", options: ["Он был на вечеринке.", "Он есть на вечеринке.", "Он находился на вечеринке."], answer: "Он был на вечеринке." },
            { type: "multiple-choice", question: "What does 'You were late.' mean in Russian?", options: ["Вы опоздали.", "Вы есть опоздавшие.", "Вы являлись опоздавшими."], answer: "Вы опоздали." },
            { type: "fill-blank", question: "Переведите на английский: Вчера было холодно.", answer: "It was cold yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Мы были в кино вчера вечером.", answer: "We were at the cinema yesterday evening." }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "What does 'will be' mean in Russian?", options: ["буду", "будешь", "будет"], answer: "будет" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I will be at home tomorrow.'", options: ["Я буду дома завтра.", "Я есть дома завтра.", "Я был дома завтра."], answer: "Я буду дома завтра." },
            { type: "multiple-choice", question: "What does 'They will be in Paris.' mean in Russian?", options: ["Они будут в Париже.", "Они есть в Париже.", "Они были в Париже."], answer: "Они будут в Париже." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'She will be a doctor.'", options: ["Она будет врачом.", "Она есть врач.", "Она была врачом."], answer: "Она будет врачом." },
            { type: "multiple-choice", question: "What does 'We will be happy to help.' mean in Russian?", options: ["Мы будем рады помочь.", "Мы есть рады помочь.", "Мы были рады помочь."], answer: "Мы будем рады помочь." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'He will be here soon.'", options: ["Он будет здесь скоро.", "Он есть здесь скоро.", "Он был здесь скоро."], answer: "Он будет здесь скоро." },
            { type: "multiple-choice", question: "What does 'You will be surprised.' mean in Russian?", options: ["Вы будете удивлены.", "Вы есть удивлены.", "Вы были удивлены."], answer: "Вы будете удивлены." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'The weather will be nice.'", options: ["Погода будет хорошей.", "Погода есть хорошая.", "Погода была хорошей."], answer: "Погода будет хорошей." },
            { type: "fill-blank", question: "Переведите на английский: Я буду готов через пять минут.", answer: "I will be ready in five minutes." },
            { type: "fill-blank", question: "Переведите на английский: Они будут здесь в 5 часов.", answer: "They will be here at 5 o'clock." }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "What does 'I work' mean in Russian?", options: ["Я работаю.", "Я работал.", "Я буду работать."], answer: "Я работаю." },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'he works':", options: ["Он работает.", "Он работал.", "Он будет работать."], answer: "Он работает." },
            { type: "multiple-choice", question: "What does 'they live' mean in Russian?", options: ["Они живут.", "Они жили.", "Они будут жить."], answer: "Они живут." },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'she studies':", options: ["Она учится.", "Она училась.", "Она будет учиться."], answer: "Она учится." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I study English every day.'", options: ["Я учу английский каждый день.", "Я учил английский каждый день.", "Я буду учить английский каждый день."], answer: "Я учу английский каждый день." },
            { type: "multiple-choice", question: "What does 'He goes to work by bus.' mean in Russian?", options: ["Он ездит на работу на автобусе.", "Он ездил на работу на автобусе.", "Он поедет на работу на автобусе."], answer: "Он ездит на работу на автобусе." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'We watch TV in the evening.'", options: ["Мы смотрим телевизор вечером.", "Мы смотрели телевизор вечером.", "Мы будем смотреть телевизор вечером."], answer: "Мы смотрим телевизор вечером." },
            { type: "multiple-choice", question: "What does 'She works in an office.' mean in Russian?", options: ["Она работает в офисе.", "Она работала в офисе.", "Она будет работать в офисе."], answer: "Она работает в офисе." },
            { type: "fill-blank", question: "Переведите на английский: Он живёт в Лондоне.", answer: "He lives in London." },
            { type: "fill-blank", question: "Переведите на английский: Мы играем в футбол по субботам.", answer: "We play football on Saturdays." }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "What does 'worked' mean in Russian?", options: ["работал", "работаю", "буду работать"], answer: "работал" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'played':", options: ["играл", "играю", "буду играть"], answer: "играл" },
            { type: "multiple-choice", question: "What does 'cleaned' mean in Russian?", options: ["убирал", "убираю", "буду убирать"], answer: "убирал" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'visited':", options: ["посещал", "посещаю", "буду посещать"], answer: "посещал" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I watched TV yesterday.'", options: ["Я смотрел телевизор вчера.", "Я смотрю телевизор вчера.", "Я буду смотреть телевизор вчера."], answer: "Я смотрел телевизор вчера." },
            { type: "multiple-choice", question: "What does 'She finished her homework.' mean in Russian?", options: ["Она закончила домашнее задание.", "Она заканчивает домашнее задание.", "Она закончит домашнее задание."], answer: "Она закончила домашнее задание." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'We walked to the park.'", options: ["Мы ходили в парк.", "Мы ходим в парк.", "Мы пойдём в парк."], answer: "Мы ходили в парк." },
            { type: "multiple-choice", question: "What does 'He washed the dishes.' mean in Russian?", options: ["Он помыл посуду.", "Он моет посуду.", "Он помоет посуду."], answer: "Он помыл посуду." },
            { type: "fill-blank", question: "Переведите на английский: Они играли в футбол вчера.", answer: "They played football yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Я посетил бабушку на прошлой неделе.", answer: "I visited my grandmother last week." }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "What does 'will work' mean in Russian?", options: ["буду работать", "работаю", "работал"], answer: "буду работать" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'will play':", options: ["буду играть", "играю", "играл"], answer: "буду играть" },
            { type: "multiple-choice", question: "What does 'will study' mean in Russian?", options: ["буду учиться", "учусь", "учился"], answer: "буду учиться" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I will call you tomorrow.'", options: ["Я позвоню тебе завтра.", "Я звоню тебе завтра.", "Я звонил тебе завтра."], answer: "Я позвоню тебе завтра." },
            { type: "multiple-choice", question: "What does 'She will come to the party.' mean in Russian?", options: ["Она придёт на вечеринку.", "Она приходит на вечеринку.", "Она приходила на вечеринку."], answer: "Она придёт на вечеринку." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'We will have dinner at 7 PM.'", options: ["Мы поужинаем в 7 вечера.", "Мы ужинаем в 7 вечера.", "Мы ужинали в 7 вечера."], answer: "Мы поужинаем в 7 вечера." },
            { type: "multiple-choice", question: "What does 'They will do their homework.' mean in Russian?", options: ["Они сделают домашнее задание.", "Они делают домашнее задание.", "Они делали домашнее задание."], answer: "Они сделают домашнее задание." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'He will buy a new car.'", options: ["Он купит новую машину.", "Он покупает новую машину.", "Он покупал новую машину."], answer: "Он купит новую машину." },
            { type: "fill-blank", question: "Переведите на английский: Она закончит отчёт завтра.", answer: "She will finish the report tomorrow." },
            { type: "fill-blank", question: "Переведите на английский: Мы уедем рано утром.", answer: "We will leave early in the morning." }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "What does 'There is' mean in Russian?", options: ["Есть", "Был", "Будет"], answer: "Есть" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'There are':", options: ["Есть", "Были", "Будут"], answer: "Есть" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'There is a book on the table.'", options: ["На столе есть книга.", "На столе была книга.", "На столе будет книга."], answer: "На столе есть книга." },
            { type: "multiple-choice", question: "What does 'There are three chairs.' mean in Russian?", options: ["Есть три стула.", "Были три стула.", "Будут три стула."], answer: "Есть три стула." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'There is a cat in the garden.'", options: ["В саду есть кот.", "В саду был кот.", "В саду будет кот."], answer: "В саду есть кот." },
            { type: "multiple-choice", question: "What does 'There are many people.' mean in Russian?", options: ["Есть много людей.", "Было много людей.", "Будет много людей."], answer: "Есть много людей." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'There is a problem.'", options: ["Есть проблема.", "Была проблема.", "Будет проблема."], answer: "Есть проблема." },
            { type: "multiple-choice", question: "What does 'There are two apples.' mean in Russian?", options: ["Есть два яблока.", "Было два яблока.", "Будет два яблока."], answer: "Есть два яблока." },
            { type: "fill-blank", question: "Переведите на английский: В моей сумке есть ручка.", answer: "There is a pen in my bag." },
            { type: "fill-blank", question: "Переведите на английский: В классе много студентов.", answer: "There are many students in the classroom." }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "What does 'There was' mean in Russian?", options: ["Был", "Есть", "Будет"], answer: "Был" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'There were':", options: ["Были", "Есть", "Будут"], answer: "Были" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'There was a party last night.'", options: ["Вчера вечером была вечеринка.", "Вчера вечером есть вечеринка.", "Вчера вечером будет вечеринка."], answer: "Вчера вечером была вечеринка." },
            { type: "multiple-choice", question: "What does 'There were many people.' mean in Russian?", options: ["Было много людей.", "Есть много людей.", "Будет много людей."], answer: "Было много людей." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'There was a big tree.'", options: ["Было большое дерево.", "Есть большое дерево.", "Будет большое дерево."], answer: "Было большое дерево." },
            { type: "multiple-choice", question: "What does 'There were three cats.' mean in Russian?", options: ["Были три кошки.", "Есть три кошки.", "Будут три кошки."], answer: "Были три кошки." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'There was a problem.'", options: ["Была проблема.", "Есть проблема.", "Будет проблема."], answer: "Была проблема." },
            { type: "multiple-choice", question: "What does 'There were two books.' mean in Russian?", options: ["Были две книги.", "Есть две книги.", "Будут две книги."], answer: "Были две книги." },
            { type: "fill-blank", question: "Переведите на английский: Вчера был хороший фильм по телевизору.", answer: "There was a good film on TV yesterday." },
            { type: "fill-blank", question: "Переведите на английский: В классе вчера было много студентов.", answer: "There were many students in the classroom yesterday." }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "What does 'in' mean in Russian?", options: ["в", "на", "под"], answer: "в" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'on':", options: ["на", "в", "под"], answer: "на" },
            { type: "multiple-choice", question: "What does 'under' mean in Russian?", options: ["под", "на", "в"], answer: "под" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'behind':", options: ["за", "перед", "рядом"], answer: "за" },
            { type: "multiple-choice", question: "What does 'next to' mean in Russian?", options: ["рядом с", "перед", "за"], answer: "рядом с" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'The book is on the table.'", options: ["Книга на столе.", "Книга в столе.", "Книга под столом."], answer: "Книга на столе." },
            { type: "multiple-choice", question: "What does 'The cat is in the box.' mean in Russian?", options: ["Кот в коробке.", "Кот на коробке.", "Кот под коробкой."], answer: "Кот в коробке." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'The ball is under the bed.'", options: ["Мяч под кроватью.", "Мяч на кровати.", "Мяч в кровати."], answer: "Мяч под кроватью." },
            { type: "fill-blank", question: "Переведите на английский: Кошка спит под деревом.", answer: "The cat is sleeping under the tree." },
            { type: "fill-blank", question: "Переведите на английский: Он сидит рядом со мной.", answer: "He is sitting next to me." }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "What does 'in' (утро/вечер) mean in Russian?", options: ["в", "на", "по"], answer: "в" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'on' (день недели):", options: ["в", "на", "по"], answer: "в" },
            { type: "multiple-choice", question: "What does 'at' (время) mean in Russian?", options: ["в", "на", "по"], answer: "в" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I go to work in the morning.'", options: ["Я хожу на работу утром.", "Я хожу на работу на утро.", "Я хожу на работу по утрам."], answer: "Я хожу на работу утром." },
            { type: "multiple-choice", question: "What does 'We have class on Monday.' mean in Russian?", options: ["У нас занятия в понедельник.", "У нас занятия на понедельник.", "У нас занятия по понедельникам."], answer: "У нас занятия в понедельник." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'The meeting starts at 9 o'clock.'", options: ["Встреча начинается в 9 часов.", "Встреча начинается на 9 часов.", "Встреча начинается по 9 часов."], answer: "Встреча начинается в 9 часов." },
            { type: "multiple-choice", question: "What does 'My birthday is in July.' mean in Russian?", options: ["Мой день рождения в июле.", "Мой день рождения на июль.", "Мой день рождения по июлю."], answer: "Мой день рождения в июле." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I'll see you on Friday.'", options: ["Увидимся в пятницу.", "Увидимся на пятницу.", "Увидимся по пятницам."], answer: "Увидимся в пятницу." },
            { type: "fill-blank", question: "Переведите на английский: Обычно я просыпаюсь в 7 утра.", answer: "I usually wake up at 7 AM." },
            { type: "fill-blank", question: "Переведите на английский: Она родилась в 1990 году.", answer: "She was born in 1990." }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "What does 'can' (могу сейчас) mean in Russian?", options: ["могу", "смог", "буду мочь"], answer: "могу" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'could' (мог раньше):", options: ["мог", "могу", "смогу"], answer: "мог" },
            { type: "multiple-choice", question: "What does 'be able to' mean in Russian?", options: ["быть в состоянии", "мочь", "иметь возможность"], answer: "быть в состоянии" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I can swim.'", options: ["Я умею плавать.", "Я умел плавать.", "Я научусь плавать."], answer: "Я умею плавать." },
            { type: "multiple-choice", question: "What does 'I could swim when I was five.' mean in Russian?", options: ["Я умел плавать, когда мне было пять.", "Я умею плавать, когда мне было пять.", "Я научусь плавать, когда мне будет пять."], answer: "Я умел плавать, когда мне было пять." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'Can you help me?'", options: ["Ты можешь помочь мне?", "Ты мог помочь мне?", "Ты сможешь помочь мне?"], answer: "Ты можешь помочь мне?" },
            { type: "multiple-choice", question: "What does 'They were able to come.' mean in Russian?", options: ["Они смогли прийти.", "Они могут прийти.", "Они умеют приходить."], answer: "Они смогли прийти." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'Can I borrow your pen?'", options: ["Можно я возьму твою ручку?", "Мог ли я взять твою ручку?", "Смогу ли я взять твою ручку?"], answer: "Можно я возьму твою ручку?" },
            { type: "fill-blank", question: "Переведите на английский: Я могу говорить по-французски.", answer: "I can speak French." },
            { type: "fill-blank", question: "Переведите на английский: Он смог решить проблему.", answer: "He was able to solve the problem." }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "What does 'must' (должен) mean in Russian?", options: ["должен", "надо", "следует"], answer: "должен" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'have to':", options: ["должен", "надо", "вынужден"], answer: "должен" },
            { type: "multiple-choice", question: "What does 'should' (следует) mean in Russian?", options: ["следует", "должен", "надо"], answer: "следует" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'You must wear a seatbelt.'", options: ["Ты должен пристегнуться.", "Тебе надо пристегнуться.", "Тебе следует пристегнуться."], answer: "Ты должен пристегнуться." },
            { type: "multiple-choice", question: "What does 'I have to go to the bank.' mean in Russian?", options: ["Мне нужно сходить в банк.", "Я должен сходить в банк.", "Мне следует сходить в банк."], answer: "Мне нужно сходить в банк." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'You should see that movie.'", options: ["Тебе стоит посмотреть этот фильм.", "Ты должен посмотреть этот фильм.", "Тебе надо посмотреть этот фильм."], answer: "Тебе стоит посмотреть этот фильм." },
            { type: "multiple-choice", question: "What does 'Students must do homework.' mean in Russian?", options: ["Студенты должны делать домашнее задание.", "Студентам надо делать домашнее задание.", "Студентам следует делать домашнее задание."], answer: "Студенты должны делать домашнее задание." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'We have to be quiet.'", options: ["Мы должны быть тихими.", "Нам надо быть тихими.", "Нам следует быть тихими."], answer: "Мы должны быть тихими." },
            { type: "fill-blank", question: "Переведите на английский: Вы должны ехать слева в Великобритании.", answer: "You must drive on the left in the UK." },
            { type: "fill-blank", question: "Переведите на английский: Нам нужно закончить этот отчёт сегодня.", answer: "We have to finish this report today." }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "What does 'used to' mean in Russian?", options: ["раньше", "использовал", "привык"], answer: "раньше" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I used to play football.'", options: ["Я раньше играл в футбол.", "Я использовал футбол.", "Я привык играть в футбол."], answer: "Я раньше играл в футбол." },
            { type: "multiple-choice", question: "What does 'She used to have long hair.' mean in Russian?", options: ["У неё раньше были длинные волосы.", "Она использовала длинные волосы.", "Она привыкла к длинным волосам."], answer: "У неё раньше были длинные волосы." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'We used to live in London.'", options: ["Мы раньше жили в Лондоне.", "Мы использовали Лондон для жизни.", "Мы привыкли жить в Лондоне."], answer: "Мы раньше жили в Лондоне." },
            { type: "multiple-choice", question: "What does 'He used to smoke.' mean in Russian?", options: ["Он раньше курил.", "Он использовал курение.", "Он привык курить."], answer: "Он раньше курил." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'They used to go to that school.'", options: ["Они раньше ходили в ту школу.", "Они использовали ту школу.", "Они привыкли ходить в ту школу."], answer: "Они раньше ходили в ту школу." },
            { type: "multiple-choice", question: "What does 'There used to be a park here.' mean in Russian?", options: ["Раньше здесь был парк.", "Здесь использовали парк.", "Здесь привыкли к парку."], answer: "Раньше здесь был парк." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I didn't use to like vegetables.'", options: ["Раньше мне не нравились овощи.", "Я не использовал овощи.", "Я не привык к овощам."], answer: "Раньше мне не нравились овощи." },
            { type: "fill-blank", question: "Переведите на английский: Я раньше ходил в школу пешком.", answer: "I used to walk to school." },
            { type: "fill-blank", question: "Переведите на английский: Она раньше жила в Париже.", answer: "She used to live in Paris." }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "What does 'needn't have' mean in Russian?", options: ["не нужно было", "не нужно", "не надо было"], answer: "не нужно было" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'didn't need to':", options: ["не нужно было", "не нужно", "не надо было"], answer: "не нужно было" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'I needn't have bought milk.'", options: ["Мне не нужно было покупать молоко.", "Мне не нужно покупать молоко.", "Мне не надо было покупать молоко."], answer: "Мне не нужно было покупать молоко." },
            { type: "multiple-choice", question: "What does 'She didn't need to go to the bank.' mean in Russian?", options: ["Ей не нужно было идти в банк.", "Ей не нужно идти в банк.", "Ей не надо было идти в банк."], answer: "Ей не нужно было идти в банк." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'We needn't have hurried.'", options: ["Нам не нужно было спешить.", "Нам не нужно спешить.", "Нам не надо было спешить."], answer: "Нам не нужно было спешить." },
            { type: "multiple-choice", question: "What does 'He needn't have worried.' mean in Russian?", options: ["Ему не нужно было волноваться.", "Ему не нужно волноваться.", "Ему не надо было волноваться."], answer: "Ему не нужно было волноваться." },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'They didn't need to cook.'", options: ["Им не нужно было готовить.", "Им не нужно готовить.", "Им не надо было готовить."], answer: "Им не нужно было готовить." },
            { type: "multiple-choice", question: "What does 'You needn't have brought an umbrella.' mean in Russian?", options: ["Тебе не нужно было брать зонт.", "Тебе не нужно брать зонт.", "Тебе не надо было брать зонт."], answer: "Тебе не нужно было брать зонт." },
            { type: "fill-blank", question: "Переведите на английский: Ей не нужно было покупать билеты.", answer: "She needn't have bought tickets." },
            { type: "fill-blank", question: "Переведите на английский: Нам не нужно было спешить.", answer: "We didn't need to hurry." }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "What does 'what' mean in Russian?", options: ["что", "кто", "где"], answer: "что" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'where':", options: ["где", "когда", "куда"], answer: "где" },
            { type: "multiple-choice", question: "What does 'when' mean in Russian?", options: ["когда", "где", "почему"], answer: "когда" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'who':", options: ["кто", "что", "чей"], answer: "кто" },
            { type: "multiple-choice", question: "What does 'why' mean in Russian?", options: ["почему", "когда", "как"], answer: "почему" },
            { type: "multiple-choice", question: "Choose the Russian meaning of 'how':", options: ["как", "сколько", "какой"], answer: "как" },
            { type: "multiple-choice", question: "Choose the Russian meaning: 'What is your name?'", options: ["Как тебя зовут?", "Кто ты?", "Где ты?"], answer: "Как тебя зовут?" },
            { type: "multiple-choice", question: "What does 'Where do you live?' mean in Russian?", options: ["Где ты живёшь?", "Куда ты живёшь?", "Когда ты живёшь?"], answer: "Где ты живёшь?" },
            { type: "fill-blank", question: "Переведите на английский: Сколько тебе лет?", answer: "How old are you?" },
            { type: "fill-blank", question: "Переведите на английский: Когда начинается фильм?", answer: "When does the film start?" }
        ]
    }
];

// Application state
const state = {
    currentPage: 'home',
    currentTest: null,
    currentTopic: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    testType: null, // 'grammar' or 'vocabulary'
    testMode: null, // 'overall' or 'topic'
    score: 0
};

// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    grammarMenu: document.getElementById('grammar-menu'),
    vocabularyMenu: document.getElementById('vocabulary-menu'),
    topicSelection: document.getElementById('topic-selection'),
    testSection: document.getElementById('test-section'),
    resultsSection: document.getElementById('results-section')
};

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    pages[pageId].classList.add('active');
    state.currentPage = pageId;
    
    // Update the current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function setupEventListeners() {
    // Home page buttons
    document.getElementById('grammar-btn').addEventListener('click', () => {
        showPage('grammarMenu');
    });
    
    document.getElementById('vocabulary-btn').addEventListener('click', () => {
        showPage('vocabularyMenu');
    });
    
    // Grammar menu buttons
    document.getElementById('overall-grammar-test').addEventListener('click', () => {
        startOverallTest('grammar');
    });
    
    document.getElementById('grammar-topics').addEventListener('click', () => {
        showTopicSelection('grammar');
    });
    
    // Vocabulary menu buttons
    document.getElementById('overall-vocabulary-test').addEventListener('click', () => {
        startOverallTest('vocabulary');
    });
    
    document.getElementById('vocabulary-topics').addEventListener('click', () => {
        showTopicSelection('vocabulary');
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (state.currentPage === 'grammarMenu' || state.currentPage === 'vocabularyMenu') {
                showPage('home');
            } else if (state.currentPage === 'topicSelection') {
                if (state.testType === 'grammar') {
                    showPage('grammarMenu');
                } else {
                    showPage('vocabularyMenu');
                }
            } else if (state.currentPage === 'testSection') {
                if (state.testMode === 'overall') {
                    if (state.testType === 'grammar') {
                        showPage('grammarMenu');
                    } else {
                        showPage('vocabularyMenu');
                    }
                } else {
                    showPage('topicSelection');
                }
            } else if (state.currentPage === 'resultsSection') {
                showPage('home');
            }
        });
    });
    
    // Test navigation buttons
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('finish-btn').addEventListener('click', finishTest);
    document.getElementById('submit-blank-btn').addEventListener('click', submitBlankAnswer);
    
    // Results buttons
    document.getElementById('retry-btn').addEventListener('click', retryTest);
    document.getElementById('new-test-btn').addEventListener('click', () => {
        if (state.testType === 'grammar') {
            showPage('grammarMenu');
        } else {
            showPage('vocabularyMenu');
        }
    });
    document.getElementById('home-results-btn').addEventListener('click', () => {
        showPage('home');
    });
    
    // Fill in the blank input
    document.getElementById('fill-blank-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBlankAnswer();
        }
    });
}

// Test functions
function startOverallTest(type) {
    state.testType = type;
    state.testMode = 'overall';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    // Get 30 random questions
    let allQuestions = [];
    
    if (type === 'grammar') {
        grammarTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...q,
                topic: topic.title
            })));
        });
    } else {
        vocabularyTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...q,
                topic: topic.title
            })));
        });
    }
    
    // Shuffle and get first 30 questions
    allQuestions = shuffleArray(allQuestions).slice(0, 30);
    state.currentTest = allQuestions;
    
    // Update test UI
    document.getElementById('test-topic').textContent = `Overall ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Test`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function showTopicSelection(type) {
    state.testType = type;
    
    const topicsContainer = document.getElementById('topics-container');
    topicsContainer.innerHTML = '';
    
    const topics = type === 'grammar' ? grammarTopics : vocabularyTopics;
    document.getElementById('topic-selection-title').textContent = `Select a ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Topic`;
    
    topics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-number">${topic.id}</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-info">
                <span><i class="fas fa-question-circle"></i> 10 questions</span>
                <span><i class="fas fa-clock"></i> 5-10 min</span>
            </div>
        `;
        
        topicCard.addEventListener('click', () => {
            startTopicTest(topic.id);
        });
        
        topicsContainer.appendChild(topicCard);
    });
    
    showPage('topicSelection');
}

function startTopicTest(topicId) {
    state.testMode = 'topic';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    const topics = state.testType === 'grammar' ? grammarTopics : vocabularyTopics;
    const topic = topics.find(t => t.id === topicId);
    
    if (!topic) return;
    
    state.currentTopic = topic;
    state.currentTest = [...topic.questions]; // Create a copy
    
    // Update test UI
    document.getElementById('test-topic').textContent = `${topic.title} - ${state.testType === 'grammar' ? 'Grammar' : 'Vocabulary'}`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function renderQuestion() {
    if (!state.currentTest || state.currentTest.length === 0) return;
    
    const question = state.currentTest[state.currentQuestionIndex];
    const questionType = question.type;
    
    // Update progress
    const progressPercentage = ((state.currentQuestionIndex + 1) / state.currentTest.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    document.getElementById('current-question').textContent = state.currentQuestionIndex + 1;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-type').textContent = questionType === 'multiple-choice' ? 'Multiple Choice' : 'Fill in the Blank';
    
    // Clear previous feedback
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback').className = 'feedback';
    
    // Show/hide appropriate containers
    if (questionType === 'multiple-choice') {
        document.getElementById('options-container').style.display = 'grid';
        document.getElementById('fill-blank-container').style.display = 'none';
        
        // Render options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.value = option;
            
            // Check if this option was previously selected
            if (state.userAnswers[state.currentQuestionIndex] && 
                state.userAnswers[state.currentQuestionIndex].selected === option) {
                optionBtn.classList.add('selected');
                
                // Show feedback if answer was checked
                if (state.userAnswers[state.currentQuestionIndex].checked) {
                    showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                }
            }
            
            optionBtn.addEventListener('click', () => {
                selectOption(option);
            });
            
            optionsContainer.appendChild(optionBtn);
        });
    } else {
        document.getElementById('options-container').style.display = 'none';
        document.getElementById('fill-blank-container').style.display = 'block';
        
        // Clear the input and enable it
        const fillBlankInput = document.getElementById('fill-blank-input');
        fillBlankInput.value = '';
        fillBlankInput.disabled = false;
        fillBlankInput.focus();
        
        document.getElementById('submit-blank-btn').disabled = false;
        
        // Check if this question was previously answered
        if (state.userAnswers[state.currentQuestionIndex]) {
            fillBlankInput.value = state.userAnswers[state.currentQuestionIndex].selected || '';
            
            if (state.userAnswers[state.currentQuestionIndex].checked) {
                showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                fillBlankInput.disabled = true;
                document.getElementById('submit-blank-btn').disabled = true;
            }
        }
    }
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = state.currentQuestionIndex === 0;
    
    // Next button should be enabled only if current question is answered
    const isAnswered = state.userAnswers[state.currentQuestionIndex] && 
                      state.userAnswers[state.currentQuestionIndex].checked;
    document.getElementById('next-btn').disabled = !isAnswered && state.currentQuestionIndex < state.currentTest.length - 1;
    
    // Update score display
    updateScoreDisplay();
}

function selectOption(option) {
    // Remove selected class from all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.classList.add('selected');
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: option,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Auto-check the answer for learning purposes
    checkAnswer();
}

function submitBlankAnswer() {
    const input = document.getElementById('fill-blank-input');
    const answer = input.value.trim();
    
    if (!answer) {
        // Show error message
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = 'Please enter an answer.';
        feedbackEl.className = 'feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
    }
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: answer,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Check the answer
    checkAnswer();
}

function checkAnswer() {
    const question = state.currentTest[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];
    
    if (!userAnswer) return;
    
    // For fill-in-the-blank, check if answer is correct (case insensitive)
    const isCorrect = userAnswer.selected.toLowerCase() === question.answer.toLowerCase();
    userAnswer.isCorrect = isCorrect;
    userAnswer.checked = true;
    
    // Show feedback
    showFeedback(isCorrect, question.answer);
    
    // Update score
    if (isCorrect) {
        state.score++;
    }
    
    // Update UI based on question type
    if (question.type === 'multiple-choice') {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.value === question.answer) {
                btn.classList.add('correct');
            } else if (btn.dataset.value === userAnswer.selected && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        document.getElementById('fill-blank-input').disabled = true;
        document.getElementById('submit-blank-btn').disabled = true;
    }
    
    updateScoreDisplay();
}

function showFeedback(isCorrect, correctAnswer) {
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.style.display = 'block';
    
    if (isCorrect) {
        feedbackEl.textContent = 'Correct! Well done.';
        feedbackEl.className = 'feedback correct';
    } else {
        feedbackEl.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        feedbackEl.className = 'feedback incorrect';
    }
}

function updateScoreDisplay() {
    const totalAnswered = state.userAnswers.filter(a => a && a.checked).length;
    const currentScore = totalAnswered > 0 ? Math.round((state.score / totalAnswered) * 100) : 0;
    document.getElementById('current-score').textContent = currentScore;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentTest.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        finishTest();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
}

function finishTest() {
    // Calculate final score
    const totalQuestions = state.currentTest.length;
    const correctAnswers = state.userAnswers.filter(a => a && a.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Determine grade
    let grade = '';
    if (scorePercentage >= 90) {
        grade = 'Excellent';
    } else if (scorePercentage >= 70) {
        grade = 'Good';
    } else {
        grade = 'Try Again';
    }
    
    // Update results UI
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('total-answers').textContent = totalQuestions;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('final-score').textContent = `${scorePercentage}%`;
    document.getElementById('score-grade').textContent = grade;
    
    // Set the circular progress
    const circle = document.querySelector('.score-circle-fill');
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scorePercentage / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    
    // Update test completed message
    const testName = state.testMode === 'overall' 
        ? `Overall ${state.testType} Test` 
        : `${state.currentTopic.title} ${state.testType} Test`;
    document.getElementById('test-completed-message').textContent = `You've completed the ${testName}`;
    
    // Generate breakdown
    const breakdownContent = document.getElementById('breakdown-content');
    breakdownContent.innerHTML = '';
    
    state.currentTest.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const isCorrect = userAnswer && userAnswer.isCorrect;
        const answerText = userAnswer ? userAnswer.selected : 'Not answered';
        
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
            <div class="breakdown-question">Q${index + 1}: ${question.question.substring(0, 50)}...</div>
            <div class="breakdown-result ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
        `;
        
        breakdownContent.appendChild(item);
    });
    
    showPage('resultsSection');
}

function retryTest() {
    if (state.testMode === 'overall') {
        startOverallTest(state.testType);
    } else {
        startTopicTest(state.currentTopic.id);
    }
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the application
function init() {
    setupEventListeners();
    showPage('home');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);