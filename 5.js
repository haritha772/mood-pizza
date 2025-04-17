import { MoodPizza } from "../types";
import { getPizzaByMood } from "../data/moods";

interface IngredientsExplainerProps {
  moodId: string;
}

export default function IngredientsExplainer({ moodId }: IngredientsExplainerProps) {
  const pizza = getPizzaByMood(moodId);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 rounded-lg bg-white/90 shadow-md backdrop-blur-sm animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">Why These Ingredients?</h2>
      
      <div className="space-y-4">
        {pizza.ingredients.map((ingredient, index) => (
          <div 
            key={index}
            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xl">
              🧩
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-primary">{ingredient.name}</h3>
              <p className="text-gray-600 text-sm">{ingredient.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 italic">
          Our expert pizza alchemists carefully select each ingredient to match your mood's energy and transform it into a delicious experience.
        </p>
      </div>
    </div>
  );
}