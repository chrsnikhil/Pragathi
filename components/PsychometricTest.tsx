"use client";

import React, { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";
import { AnimatePresence, motion } from "framer-motion";

export default function PsychometricTest() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [status, setStatus] = useState<"intro" | "active" | "completed">(
        "intro"
    );

    const handleStart = () => {
        setStatus("active");
    };

    const handleAnswer = (score: number) => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setStatus("completed");
        }
    };

    const handleRestart = () => {
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setStatus("intro");
    };

    const totalScore = answers.reduce((a, b) => a + b, 0);

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] w-full">
            <AnimatePresence mode="wait">
                {status === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center max-w-xl"
                    >
                        <h1 className="text-5xl font-bold mb-6 gradient-text">
                            Discover Yourself
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Take our 3-minute scientific assessment to uncover your hidden
                            personality traits and strengths.
                        </p>
                        <button
                            onClick={handleStart}
                            className="px-8 py-4 bg-primary hover:bg-violet-600 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] hover:scale-105 active:scale-95"
                        >
                            Start Assessment
                        </button>
                    </motion.div>
                )}

                {status === "active" && (
                    <QuestionCard
                        key="question"
                        question={questions[currentQuestionIndex]}
                        onAnswer={handleAnswer}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={questions.length}
                    />
                )}

                {status === "completed" && (
                    <ResultCard
                        key="result"
                        score={totalScore}
                        onRestart={handleRestart}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
