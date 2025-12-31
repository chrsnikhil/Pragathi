export type Option = {
    text: string;
    score: number;
};

export type Question = {
    id: number;
    text: string;
    options: Option[];
};

export const questions: Question[] = [
    {
        id: 1,
        text: "How would you rate your expertise in React?",
        options: [
            { text: "Beginner (Just started learning)", score: 1 },
            { text: "Junior (Built a few small apps)", score: 2 },
            { text: "Intermediate (Comfortable with hooks & context)", score: 3 },
            { text: "Advanced (Performance tuning, custom hooks)", score: 4 },
            { text: "Expert (Contributed to core or major libraries)", score: 5 },
        ],
    },
    {
        id: 2,
        text: "I prefer to plan everything in detail rather than being spontaneous.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
    {
        id: 3,
        text: "I often think about the meaning of life.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
    {
        id: 4,
        text: "I find it easy to empathize with others' feelings.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
    {
        id: 5,
        text: "I remain calm under pressure.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
    {
        id: 6,
        text: "I enjoy exploring new ideas and theories.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
    {
        id: 7,
        text: "I tend to worry about things.",
        options: [
            { text: "Strongly Disagree", score: 5 },
            { text: "Disagree", score: 4 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 2 },
            { text: "Strongly Agree", score: 1 },
        ],
    },
    {
        id: 8,
        text: "I value cooperation over competition.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
    {
        id: 9,
        text: "I like to keep my belongings organized and tidy.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
    {
        id: 10,
        text: "I am often the life of the party.",
        options: [
            { text: "Strongly Disagree", score: 1 },
            { text: "Disagree", score: 2 },
            { text: "Neutral", score: 3 },
            { text: "Agree", score: 4 },
            { text: "Strongly Agree", score: 5 },
        ],
    },
];
