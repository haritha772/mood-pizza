import { Mood, MoodPizza } from "../types";

export const moods: Mood[] = [
  {
    id: "happy",
    name: "Happy",
    emoji: "😊",
    description: "You're in a great mood today!",
    color: "#FEF7CD", // Soft Yellow
  },
  {
    id: "sad",
    name: "Sad",
    emoji: "😢",
    description: "Feeling a bit down? We've got you covered.",
    color: "#D3E4FD", // Soft Blue
  },
  {
    id: "angry",
    name: "Angry",
    emoji: "😠",
    description: "Let's channel that energy into something delicious.",
    color: "#FEC6A1", // Soft Orange
  },
  {
    id: "chill",
    name: "Chill",
    emoji: "😌",
    description: "Relaxed and easy-going? Perfect pizza time.",
    color: "#F2FCE2", // Soft Green
  },
  {
    id: "confused",
    name: "Confused",
    emoji: "🤔",
    description: "Not sure what you want? Let us decide for you.",
    color: "#E5DEFF", // Soft Purple
  },
  {
    id: "inLove",
    name: "In Love",
    emoji: "😍",
    description: "Share the love with a heartfelt pizza creation.",
    color: "#FFDEE2", // Soft Pink
  },
];

export const moodPizzas: Record<string, MoodPizza> = {
  happy: {
    name: "Sunny Side Up Pizza",
    description:
      "A bright and cheerful pizza that's as happy as you are! Topped with yellow bell peppers, corn, pineapple, and sunny side up eggs that smile back at you.",
    baseColor: "#FEF7CD",
    ingredients: [
      {
        name: "Yellow Bell Peppers",
        description: "Bright and sweet, just like your mood!",
      },
      {
        name: "Sweet Corn",
        description: "Little bursts of sunshine in every bite.",
      },
      {
        name: "Pineapple",
        description: "Tropical sweetness that brings instant joy.",
      },
      {
        name: "Sunny Side Up Eggs",
        description: "Smiling back at you from the pizza!",
      },
      {
        name: "Honey Drizzle",
        description: "Because sweet moments deserve sweet flavors.",
      },
    ],
  },
  sad: {
    name: "Comfort Blanket Pizza",
    description:
      "A warm hug in pizza form. This comforting creation features creamy blue cheese, rich mushrooms, and soothing herbs to lift your spirits.",
    baseColor: "#D3E4FD",
    ingredients: [
      {
        name: "Blue Cheese",
        description: "Rich and complex, like your emotions.",
      },
      {
        name: "Wild Mushrooms",
        description: "Earthy and grounding when you need stability.",
      },
      {
        name: "Caramelized Onions",
        description: "Sweet relief after the tears.",
      },
      {
        name: "Fresh Rosemary",
        description: "Known for its calming properties.",
      },
      {
        name: "Truffle Oil",
        description: "Because you deserve something special right now.",
      },
    ],
  },
  angry: {
    name: "Fury Fire Pizza",
    description:
      "Channel that anger into something productive - like enjoying this fiery hot pizza that bites back with spicy pepperoni, jalapeños, and hot sauce.",
    baseColor: "#FEC6A1",
    ingredients: [
      {
        name: "Spicy Pepperoni",
        description: "Let the spice match your intensity!",
      },
      {
        name: "Jalapeños",
        description: "Feel the heat and release that tension.",
      },
      {
        name: "Crushed Red Pepper",
        description: "Scattered like the thoughts in your mind.",
      },
      {
        name: "Hot Sauce Swirl",
        description: "A visual representation of your current mood.",
      },
      {
        name: "Pepper Jack Cheese",
        description: "Because regular cheese just isn't cutting it right now.",
      },
    ],
  },
  chill: {
    name: "Zen Garden Pizza",
    description:
      "As relaxed as you are, this mellow pizza features calming herbs, smooth avocado, and stress-relieving ingredients for maximum chill vibes.",
    baseColor: "#F2FCE2",
    ingredients: [
      {
        name: "Fresh Avocado",
        description: "Smooth and relaxed, just like you.",
      },
      {
        name: "Cucumber Slices",
        description: "Cool as a cucumber—literally.",
      },
      {
        name: "Spinach",
        description: "Green and serene for your peaceful state of mind.",
      },
      {
        name: "Pesto Base",
        description: "A mellow alternative to traditional sauce.",
      },
      {
        name: "Mozzarella",
        description: "Soft, stretchy, and not a care in the world.",
      },
    ],
  },
  confused: {
    name: "Mystery Medley Pizza",
    description:
      "Not sure what you want? This pizza isn't either! A delightful chaos of contrasting flavors and textures that somehow works perfectly together.",
    baseColor: "#E5DEFF",
    ingredients: [
      {
        name: "Half Tomato/Half BBQ Sauce",
        description: "Can't decide? Have both!",
      },
      {
        name: "Contrasting Cheeses",
        description: "Sharp cheddar meets mild mozzarella in perfect confusion.",
      },
      {
        name: "Sweet and Savory Toppings",
        description: "Bacon and maple syrup—trust us on this one.",
      },
      {
        name: "Random Vegetable Medley",
        description: "Whatever the chef felt like adding today!",
      },
      {
        name: "Question Mark Balsamic Drizzle",
        description: "A finishing touch as puzzling as your current state.",
      },
    ],
  },
  inLove: {
    name: "Passionate Heart Pizza",
    description:
      "Love is in the air... and on this pizza! Heart-shaped and loaded with aphrodisiac ingredients like figs, honey, and rose petals for a romantic experience.",
    baseColor: "#FFDEE2",
    ingredients: [
      {
        name: "Fresh Figs",
        description: "Sweet, sensual, and historically romantic.",
      },
      {
        name: "Prosciutto",
        description: "Delicately draped like a lover's embrace.",
      },
      {
        name: "Goat Cheese",
        description: "Creamy little clouds of passion.",
      },
      {
        name: "Honey Drizzle",
        description: "Sweet as the words between lovers.",
      },
      {
        name: "Edible Rose Petals",
        description: "Because nothing says romance like flowers you can eat.",
      },
    ],
  },
};

export const getDefaultMood = (): Mood => moods[0];

export const getMoodById = (id: string): Mood => {
  return moods.find((mood) => mood.id === id) || getDefaultMood();
};

export const getPizzaByMood = (moodId: string): MoodPizza => {
  return moodPizzas[moodId] || moodPizzas[getDefaultMood().id];
};
