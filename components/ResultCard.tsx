import React from "react";
import { motion } from "framer-motion";

type ResultCardProps = {
    score: number;
    onRestart: () => void;
};

export default function ResultCard({ score, onRestart }: ResultCardProps) {
    let feedback = "";
    if (score <= 20) {
        feedback = "You are highly introverted and practical.";
    } else if (score <= 35) {
        feedback = "You have a balanced approach to life.";
    } else {
        feedback = "You are highly extroverted and open to new experiences.";
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md p-8 rounded-2xl glass-panel text-center"
        >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Test Complete</h2>
            <p className="text-gray-300 mb-6">Your total score is:</p>
            <div className="text-6xl font-extrabold text-primary mb-6">{score}</div>
            <p className="text-xl mb-8">{feedback}</p>
            <button
                onClick={onRestart}
                className="px-6 py-3 bg-primary hover:bg-violet-600 text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)]"
            >
                Retake Test
            </button>
        </motion.div>
    );
}
