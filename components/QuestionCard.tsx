import React from "react";
import { motion } from "framer-motion";
import { Question, Option } from "../data/questions";

type QuestionCardProps = {
    question: Question;
    onAnswer: (score: number) => void;
    currentQuestionIndex: number;
    totalQuestions: number;
};

export default function QuestionCard({
    question,
    onAnswer,
    currentQuestionIndex,
    totalQuestions,
}: QuestionCardProps) {
    return (
        <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl p-8 rounded-2xl glass-panel"
        >
            <div className="mb-6 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-400">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{
                            width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                        }}
                    />
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-8 leading-snug">{question.text}</h2>

            <div className="space-y-3">
                {question.options.map((option: Option, index: number) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(option.score)}
                        className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-primary/20 hover:border-primary/50 border border-transparent transition-all duration-200 group"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-lg group-hover:text-primary-foreground transition-colors">
                                {option.text}
                            </span>
                            <span className="w-4 h-4 rounded-full border border-gray-500 group-hover:border-primary group-hover:bg-primary transition-all" />
                        </div>
                    </button>
                ))}
            </div>
        </motion.div>
    );
}
