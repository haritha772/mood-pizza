
import { useState } from "react";
import { Mood } from "../types";
import { moods, getMoodById } from "../data/moods";
import { cn } from "@/lib/utils";

interface MoodSelectorProps {
  selectedMood: Mood;
  onMoodSelect: (mood: Mood) => void;
}

export default function MoodSelector({
  selectedMood,
  onMoodSelect,
}: MoodSelectorProps) {
  
  // Handle mood selection
  const handleMoodClick = (moodId: string) => {
    const mood = getMoodById(moodId);
    onMoodSelect(mood);
  };

  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        How are you feeling today?
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-3xl mx-auto">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => handleMoodClick(mood.id)}
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:scale-105",
              selectedMood.id === mood.id
                ? "border-2 border-primary shadow-lg"
                : "border border-gray-200 hover:border-primary/50",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
            style={{
              backgroundColor: 
                selectedMood.id === mood.id 
                  ? mood.color 
                  : `${mood.color}80`, // More transparent version
            }}
          >
            <span className="text-4xl mb-2 animate-pulse">{mood.emoji}</span>
            <span className="font-medium">{mood.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}