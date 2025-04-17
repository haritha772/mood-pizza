
import { useState, useEffect } from "react";
import { Mood, MoodPizza } from "../types";
import { getPizzaByMood } from "../data/moods";

interface PizzaDisplayProps {
  mood: Mood;
}

export default function PizzaDisplay({ mood }: PizzaDisplayProps) {
  const [pizza, setPizza] = useState<MoodPizza | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading time for pizza creation
    const timer = setTimeout(() => {
      setPizza(getPizzaByMood(mood.id));
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [mood]);

  if (isLoading) {
    return (
      <div 
        className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-8 rounded-lg"
        style={{ backgroundColor: `${mood.color}40` }}
      >
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-pizza-spin text-6xl">🍕</div>
          <p className="mt-4 text-lg font-medium">
            Creating your mood pizza...
          </p>
        </div>
      </div>
    );
  }

  if (!pizza) return null;

  return (
    <div 
      className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-6 rounded-lg animate-fade-in"
      style={{ backgroundColor: `${mood.color}40` }}
    >
      <h2 className="text-2xl font-bold text-center mb-2">{pizza.name}</h2>
      <div className="relative w-64 h-64 md:w-80 md:h-80 my-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-200 to-yellow-100 flex items-center justify-center animate-pizza-bounce">
            <span className="text-8xl">🍕</span>
          </div>
        </div>
      </div>
      <p className="text-center text-base md:text-lg mb-4 max-w-md">
        {pizza.description}
      </p>

      <button className="mt-4 px-8 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
        Order This Pizza
      </button>
    </div>
  );
}