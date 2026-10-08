// =========================================
// FLAVORLY - COMPLETE RECIPE APP
// =========================================

let recipes = [
  {
    "id": 1,
    "name": "Masala Dosa",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Masala Dosa",
    "ingredients": [
      "2 cups rice",
      "1/2 cup urad dal",
      "1/2 tsp fenugreek",
      "3 potatoes",
      "1 onion",
      "2 green chillies",
      "1/2 tsp turmeric",
      "1 tsp mustard",
      "8 curry leaves",
      "2 tbsp oil",
      "salt"
    ],
    "steps": [
      "Soak rice, urad dal and fenugreek for 5–6 hours.",
      "Grind and ferment the batter overnight.",
      "Cook potato masala with onion, chilli and spices.",
      "Spread dosa thinly, fill with masala and serve with sambar and chutney."
    ]
  },
  {
    "id": 2,
    "name": "Idli & Sambar",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 35,
    "imageSearch": "Idli Sambar",
    "ingredients": [
      "2 cups idli rice",
      "1 cup urad dal",
      "1 tsp fenugreek",
      "1 cup toor dal",
      "2 tomatoes",
      "1 onion",
      "1 carrot",
      "1 drumstick",
      "1 tbsp tamarind",
      "2 tbsp sambar powder",
      "1/2 tsp turmeric",
      "mustard, cumin and curry leaves",
      "salt"
    ],
    "steps": [
      "Soak and grind rice and dal, then ferment the batter.",
      "Steam idlis for 10–12 minutes.",
      "Cook dal and vegetables with tamarind, turmeric and sambar powder.",
      "Temper with mustard, cumin and curry leaves and serve."
    ]
  },
  {
    "id": 3,
    "name": "Medu Vada",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Medu Vada",
    "ingredients": [
      "1 cup urad dal",
      "1 green chilli",
      "1 inch ginger",
      "1 tsp cumin",
      "8 curry leaves",
      "2 tbsp onion",
      "2 tbsp coriander",
      "salt",
      "oil for frying"
    ],
    "steps": [
      "Soak urad dal and grind into a thick batter.",
      "Mix in chilli, ginger, cumin, curry leaves and onion.",
      "Shape into rings with wet hands.",
      "Deep-fry until crisp and golden and serve with chutney."
    ]
  },
  {
    "id": 4,
    "name": "Vegetable Uttapam",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 20,
    "imageSearch": "Vegetable Uttapam",
    "ingredients": [
      "2 cups dosa batter",
      "1 onion",
      "1 tomato",
      "1/2 capsicum",
      "1 green chilli",
      "2 tbsp coriander",
      "2 tbsp oil",
      "salt"
    ],
    "steps": [
      "Chop all vegetables finely.",
      "Heat and lightly grease a dosa pan.",
      "Pour thick batter and spread gently.",
      "Top with vegetables, cook both sides and serve."
    ]
  },
  {
    "id": 5,
    "name": "Plain Dosa",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 20,
    "imageSearch": "Plain Dosa",
    "ingredients": [
      "2 cups rice",
      "1/2 cup urad dal",
      "1/2 tsp fenugreek",
      "salt",
      "water",
      "oil"
    ],
    "steps": [
      "Soak rice, dal and fenugreek.",
      "Grind, salt and ferment overnight.",
      "Spread batter very thinly on a hot pan.",
      "Cook until crisp and serve with chutney and sambar."
    ]
  },
  {
    "id": 6,
    "name": "Ven Pongal",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 25,
    "imageSearch": "Ven Pongal",
    "ingredients": [
      "1 cup rice",
      "1/2 cup moong dal",
      "1 tsp cumin",
      "1 tsp black pepper",
      "1 inch ginger",
      "10 curry leaves",
      "2 tbsp ghee",
      "10 cashews",
      "salt"
    ],
    "steps": [
      "Roast moong dal lightly.",
      "Pressure-cook rice and dal until soft.",
      "Temper ghee with cashews, cumin, pepper, ginger and curry leaves.",
      "Mix into the pongal and serve hot."
    ]
  },
  {
    "id": 7,
    "name": "Lemon Rice",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 15,
    "imageSearch": "Lemon Rice",
    "ingredients": [
      "3 cups cooked rice",
      "2 tbsp lemon juice",
      "1 tsp mustard",
      "1 tsp urad dal",
      "1 tsp chana dal",
      "2 green chillies",
      "8 curry leaves",
      "1/4 tsp turmeric",
      "2 tbsp peanuts",
      "2 tbsp oil",
      "salt"
    ],
    "steps": [
      "Cool the cooked rice.",
      "Temper mustard, dals, peanuts, chilli and curry leaves in oil.",
      "Add turmeric and turn off the heat.",
      "Mix with lemon juice, salt and rice."
    ]
  },
  {
    "id": 8,
    "name": "Curd Rice",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 10,
    "imageSearch": "Curd Rice",
    "ingredients": [
      "2 cups cooked rice",
      "1 cup curd",
      "1/4 cup milk",
      "1 tsp mustard",
      "1 tsp urad dal",
      "1 green chilli",
      "8 curry leaves",
      "1 tbsp coriander",
      "1 tbsp oil",
      "salt"
    ],
    "steps": [
      "Mash the cooked rice.",
      "Mix with curd, milk and salt.",
      "Temper mustard, dal, chilli and curry leaves.",
      "Mix into the rice and garnish with coriander."
    ]
  },
  {
    "id": 9,
    "name": "Tamarind Rice",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 25,
    "imageSearch": "Tamarind Rice",
    "ingredients": [
      "3 cups cooked rice",
      "2 tbsp tamarind",
      "2 tbsp peanuts",
      "1 tsp mustard",
      "1 tsp urad dal",
      "1 tsp chana dal",
      "2 red chillies",
      "8 curry leaves",
      "1/2 tsp turmeric",
      "2 tbsp oil",
      "salt"
    ],
    "steps": [
      "Extract tamarind juice.",
      "Temper mustard, dals, peanuts, chillies and curry leaves.",
      "Add tamarind, turmeric and salt and reduce slightly.",
      "Mix the paste with cooked rice."
    ]
  },
  {
    "id": 10,
    "name": "Upma",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 15,
    "imageSearch": "South Indian Upma",
    "ingredients": [
      "1 cup rava",
      "1 onion",
      "1 green chilli",
      "1 inch ginger",
      "1 tsp mustard",
      "1 tsp urad dal",
      "1 tsp chana dal",
      "8 curry leaves",
      "2 tbsp oil",
      "2.5 cups water",
      "salt"
    ],
    "steps": [
      "Dry-roast rava lightly.",
      "Temper mustard, dals, ginger, chilli and curry leaves.",
      "Cook onion, add water and salt and bring to a boil.",
      "Add rava slowly while stirring and cook until fluffy."
    ]
  },
  {
    "id": 11,
    "name": "Appam & Vegetable Stew",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 40,
    "imageSearch": "Appam Vegetable Stew Kerala",
    "ingredients": [
      "2 cups rice",
      "1/2 cup cooked rice",
      "1/2 tsp yeast",
      "1 cup coconut milk",
      "2 potatoes",
      "1 carrot",
      "1 cup peas",
      "1 onion",
      "1 green chilli",
      "1 inch ginger",
      "1 tbsp coconut oil",
      "salt"
    ],
    "steps": [
      "Soak and grind rice with cooked rice, then ferment with yeast.",
      "Cook vegetables with onion, ginger and chilli.",
      "Add coconut milk and simmer gently.",
      "Make thin appams in a hot pan and serve with stew."
    ]
  },
  {
    "id": 12,
    "name": "Naan & Paneer Curry",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 40,
    "imageSearch": "Naan Paneer Curry",
    "ingredients": [
      "2 cups maida",
      "1/2 cup yogurt",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "water",
      "250g paneer",
      "2 tomatoes",
      "1 onion",
      "1 tbsp ginger garlic",
      "1 tsp garam masala",
      "1/2 tsp turmeric",
      "2 tbsp oil",
      "coriander"
    ],
    "steps": [
      "Mix maida, yogurt, baking powder, salt and water into a soft dough and rest it.",
      "Cook onion, tomato, ginger garlic and spices, then add paneer to make the curry.",
      "Roll dough into naan shapes and cook on a hot pan until browned.",
      "Brush with butter if desired and serve hot with paneer curry."
    ]
  },
  {
    "id": 13,
    "name": "Kerala Parotta & Curry",
    "category": "South Indian",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Kerala Parotta Curry",
    "ingredients": [
      "3 cups maida",
      "1 tbsp oil",
      "1 tsp sugar",
      "1/2 tsp salt",
      "water",
      "2 tomatoes",
      "1 onion",
      "1 cup mixed vegetables",
      "1 tsp ginger garlic",
      "1 tsp garam masala",
      "2 tbsp oil"
    ],
    "steps": [
      "Knead maida with salt, sugar, oil and water and rest.",
      "Stretch and fold dough to create layers.",
      "Flatten and cook parotta on a hot pan.",
      "Cook vegetables with onion, tomato and spices and serve together."
    ]
  },
  {
    "id": 14,
    "name": "Butter Chicken",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Butter Chicken Indian",
    "ingredients": [
      "500g chicken",
      "1/2 cup yogurt",
      "1 tbsp lemon juice",
      "1 tsp chilli powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1 tbsp ginger garlic paste",
      "2 tbsp butter",
      "1 onion",
      "2 cups tomato puree",
      "1 tsp cumin",
      "1 tsp coriander powder",
      "1/2 cup cream",
      "1 tsp kasuri methi",
      "1/2 tsp sugar",
      "coriander",
      "salt"
    ],
    "steps": [
      "Marinate chicken with yogurt, lemon, spices and ginger garlic.",
      "Cook chicken until lightly charred.",
      "Cook onion, tomato puree and spices in butter.",
      "Add chicken, cream and kasuri methi and simmer until rich."
    ]
  },
  {
    "id": 15,
    "name": "Aloo Paratha",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Aloo Paratha",
    "ingredients": [
      "2 cups wheat flour",
      "3 potatoes",
      "1 onion",
      "2 green chillies",
      "1 tsp cumin",
      "1/2 tsp chilli powder",
      "1/2 tsp garam masala",
      "coriander",
      "ghee",
      "salt"
    ],
    "steps": [
      "Knead wheat flour into a soft dough.",
      "Mash potatoes with onion, chilli and spices.",
      "Stuff dough with potato mixture and roll.",
      "Cook with ghee until golden on both sides."
    ]
  },
  {
    "id": 16,
    "name": "Dal Makhani",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Dal Makhani",
    "ingredients": [
      "1 cup black urad dal",
      "1/4 cup kidney beans",
      "1 onion",
      "2 tomatoes",
      "1 tbsp ginger garlic",
      "1 tsp cumin",
      "1 tsp chilli powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "2 tbsp butter",
      "1/4 cup cream",
      "coriander",
      "salt"
    ],
    "steps": [
      "Soak and pressure-cook dal and kidney beans until soft.",
      "Cook onion, ginger garlic, tomato and spices in butter.",
      "Add cooked dal and simmer slowly.",
      "Finish with cream, garam masala and coriander."
    ]
  },
  {
    "id": 17,
    "name": "Palak Paneer",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Palak Paneer",
    "ingredients": [
      "250g paneer",
      "4 cups spinach",
      "1 onion",
      "2 tomatoes",
      "1 green chilli",
      "1 tbsp ginger garlic",
      "1/2 tsp cumin",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "2 tbsp cream",
      "1 tbsp oil",
      "salt"
    ],
    "steps": [
      "Blanch spinach and blend into a puree.",
      "Cook cumin, onion, ginger garlic and tomatoes.",
      "Add spices and spinach puree.",
      "Add paneer and cream and simmer gently."
    ]
  },
  {
    "id": 18,
    "name": "Chole Bhature",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Chole Bhature",
    "ingredients": [
      "2 cups chickpeas",
      "1 onion",
      "2 tomatoes",
      "1 tbsp ginger garlic",
      "2 green chillies",
      "1 tsp cumin",
      "1 tsp coriander powder",
      "1 tsp chole masala",
      "1/2 tsp turmeric",
      "2 cups maida",
      "2 tbsp yogurt",
      "1 tsp baking powder",
      "oil",
      "salt"
    ],
    "steps": [
      "Soak and pressure-cook chickpeas.",
      "Cook onion, tomato and spices and add chickpeas.",
      "Knead maida, yogurt, baking powder and salt into dough.",
      "Roll and deep-fry bhature until puffed."
    ]
  },
  {
    "id": 19,
    "name": "Rajma Chawal",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Rajma Chawal",
    "ingredients": [
      "1 cup kidney beans",
      "1 cup basmati rice",
      "1 onion",
      "2 tomatoes",
      "1 tbsp ginger garlic",
      "1 tsp cumin",
      "1/2 tsp turmeric",
      "1 tsp chilli powder",
      "1 tsp coriander powder",
      "1 tsp garam masala",
      "2 tbsp oil",
      "salt"
    ],
    "steps": [
      "Soak and pressure-cook kidney beans.",
      "Cook cumin, onion, ginger garlic and tomatoes with spices.",
      "Add beans and simmer until thick.",
      "Cook basmati rice separately and serve together."
    ]
  },
  {
    "id": 20,
    "name": "Shahi Paneer",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Shahi Paneer",
    "ingredients": [
      "250g paneer",
      "1 onion",
      "2 tomatoes",
      "10 cashews",
      "1 tbsp ginger garlic",
      "1/2 tsp cumin",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1/2 tsp chilli powder",
      "1/4 cup cream",
      "1 tbsp butter",
      "salt"
    ],
    "steps": [
      "Soak cashews and blend with cooked onion and tomato.",
      "Heat butter and cumin and add ginger garlic.",
      "Add puree and spices and cook until thick.",
      "Add paneer and cream and simmer."
    ]
  },
  {
    "id": 21,
    "name": "Kadai Paneer",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Kadai Paneer",
    "ingredients": [
      "250g paneer",
      "1 capsicum",
      "1 onion",
      "2 tomatoes",
      "1 tsp cumin",
      "1 tsp coriander seeds",
      "1 tsp chilli powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1 tbsp ginger garlic",
      "2 tbsp oil",
      "coriander",
      "salt"
    ],
    "steps": [
      "Roast cumin and coriander seeds and crush them.",
      "Cook onion, ginger garlic and tomatoes.",
      "Add spices and cook into a thick gravy.",
      "Add capsicum and paneer and finish with coriander."
    ]
  },
  {
    "id": 22,
    "name": "Paneer Butter Masala",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Paneer Butter Masala",
    "ingredients": [
      "250g paneer",
      "2 tomatoes",
      "1 onion",
      "10 cashews",
      "1 tbsp butter",
      "1 tbsp oil",
      "1 tsp ginger garlic",
      "1 tsp Kashmiri chilli",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1/4 cup cream",
      "kasuri methi",
      "salt"
    ],
    "steps": [
      "Cook onion and tomatoes and blend with soaked cashews.",
      "Heat butter and oil and add ginger garlic.",
      "Add puree and spices and cook until thick.",
      "Add paneer, cream and kasuri methi."
    ]
  },
  {
    "id": 23,
    "name": "Chicken Tikka Masala",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 40,
    "imageSearch": "Chicken Tikka Masala",
    "ingredients": [
      "500g chicken",
      "1/2 cup yogurt",
      "1 tbsp lemon",
      "1 tsp chilli powder",
      "1 tsp garam masala",
      "1 tbsp ginger garlic",
      "2 tomatoes",
      "1 onion",
      "1 tsp cumin",
      "1 tsp coriander powder",
      "1/2 cup cream",
      "2 tbsp oil",
      "salt"
    ],
    "steps": [
      "Marinate chicken with yogurt, lemon and spices.",
      "Grill or pan-cook chicken until charred.",
      "Make onion-tomato masala with spices.",
      "Add chicken and cream and simmer."
    ]
  },
  {
    "id": 24,
    "name": "Tandoori Chicken",
    "category": "North Indian",
    "cuisine": "Indian",
    "time": 50,
    "imageSearch": "Tandoori Chicken",
    "ingredients": [
      "500g chicken",
      "1/2 cup yogurt",
      "1 tbsp lemon",
      "1 tbsp ginger garlic",
      "1 tsp chilli powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1 tsp cumin powder",
      "1 tsp coriander powder",
      "1 tbsp oil",
      "salt"
    ],
    "steps": [
      "Make deep cuts in chicken and coat with marinade.",
      "Rest for at least 2 hours.",
      "Cook in a hot oven, grill or air fryer until charred and cooked through.",
      "Serve with lemon and onion."
    ]
  },
  {
    "id": 25,
    "name": "Hyderabadi Chicken Biryani",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 70,
    "imageSearch": "Hyderabadi Chicken Biryani",
    "ingredients": [
      "500g chicken",
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 onions",
      "2 tomatoes",
      "1 tbsp ginger garlic",
      "2 green chillies",
      "1 tsp chilli powder",
      "1/2 tsp turmeric",
      "1 tsp biryani masala",
      "mint",
      "coriander",
      "saffron",
      "3 tbsp oil",
      "2 tbsp ghee",
      "salt"
    ],
    "steps": [
      "Marinate chicken with yogurt and spices.",
      "Cook chicken until partially done.",
      "Boil basmati rice until about 70% cooked.",
      "Layer rice, chicken, fried onion, mint, saffron and ghee and cook covered on low heat."
    ]
  },
  {
    "id": 26,
    "name": "Mutton Biryani",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 90,
    "imageSearch": "Mutton Biryani",
    "ingredients": [
      "500g mutton",
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 onions",
      "2 tomatoes",
      "1 tbsp ginger garlic",
      "1 tsp chilli powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "mint",
      "coriander",
      "saffron",
      "3 tbsp oil",
      "2 tbsp ghee",
      "salt"
    ],
    "steps": [
      "Marinate mutton with yogurt and spices.",
      "Cook mutton until tender.",
      "Partially cook basmati rice.",
      "Layer rice over mutton with fried onions, mint, coriander and saffron and cook on low heat."
    ]
  },
  {
    "id": 27,
    "name": "Paneer Biryani",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Paneer Biryani",
    "ingredients": [
      "250g paneer",
      "2 cups basmati rice",
      "1 onion",
      "2 tomatoes",
      "1/2 cup yogurt",
      "1 tbsp ginger garlic",
      "1 tsp biryani masala",
      "1/2 tsp turmeric",
      "mint",
      "coriander",
      "saffron",
      "2 tbsp ghee",
      "2 tbsp oil",
      "salt"
    ],
    "steps": [
      "Marinate paneer with yogurt and spices.",
      "Cook onion and tomato masala and add paneer.",
      "Partially cook rice.",
      "Layer rice and paneer, add herbs and saffron and cook covered."
    ]
  },
  {
    "id": 28,
    "name": "Chilli Paneer",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 25,
    "imageSearch": "Chilli Paneer",
    "ingredients": [
      "250g paneer",
      "1 capsicum",
      "1 onion",
      "2 green chillies",
      "2 tbsp soy sauce",
      "1 tbsp chilli sauce",
      "1 tbsp ketchup",
      "1 tbsp cornflour",
      "2 tbsp flour",
      "2 garlic cloves",
      "spring onion",
      "oil",
      "salt"
    ],
    "steps": [
      "Coat paneer with flour and cornflour and fry until crisp.",
      "Stir-fry garlic, chilli, onion and capsicum.",
      "Add soy sauce, chilli sauce and ketchup.",
      "Toss in paneer and garnish with spring onion."
    ]
  },
  {
    "id": 29,
    "name": "Vada Pav",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 30,
    "imageSearch": "Vada Pav Mumbai",
    "ingredients": [
      "4 potatoes",
      "4 pav buns",
      "1 tsp mustard",
      "8 curry leaves",
      "2 green chillies",
      "1/2 tsp turmeric",
      "1 cup gram flour",
      "1/2 tsp chilli powder",
      "garlic chutney",
      "oil",
      "salt"
    ],
    "steps": [
      "Boil and mash potatoes and prepare the spiced filling.",
      "Shape into balls and dip in gram-flour batter.",
      "Deep-fry until golden.",
      "Spread chutney in pav, place vada inside and serve."
    ]
  },
  {
    "id": 30,
    "name": "Pav Bhaji",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 35,
    "imageSearch": "Pav Bhaji Mumbai",
    "ingredients": [
      "3 potatoes",
      "1 cup cauliflower",
      "1/2 cup peas",
      "1 capsicum",
      "2 tomatoes",
      "1 onion",
      "2 tbsp pav bhaji masala",
      "1 tsp chilli powder",
      "2 tbsp butter",
      "8 pav",
      "coriander",
      "lemon",
      "salt"
    ],
    "steps": [
      "Boil and mash vegetables.",
      "Cook onion and capsicum in butter and add tomato and spices.",
      "Add vegetables and mash together while simmering.",
      "Toast pav with butter and serve with bhaji."
    ]
  },
  {
    "id": 31,
    "name": "Pani Puri",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 25,
    "imageSearch": "Pani Puri Indian",
    "ingredients": [
      "20 puris",
      "2 potatoes",
      "1/2 cup chickpeas",
      "1/2 tsp cumin",
      "1/2 tsp chilli powder",
      "1/2 tsp chaat masala",
      "1/2 cup mint",
      "1/4 cup coriander",
      "1 tbsp tamarind",
      "1 tbsp lemon",
      "3 cups water",
      "salt"
    ],
    "steps": [
      "Boil potato and chickpeas.",
      "Blend mint and coriander with tamarind, lemon and spices to make pani.",
      "Crack puris and fill with potato and chickpeas.",
      "Add pani and serve immediately."
    ]
  },
  {
    "id": 32,
    "name": "Samosa",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 40,
    "imageSearch": "Indian Samosa",
    "ingredients": [
      "2 cups maida",
      "3 potatoes",
      "1/2 cup peas",
      "1 tsp cumin",
      "1 tsp coriander seeds",
      "1/2 tsp chilli powder",
      "1/2 tsp garam masala",
      "1/2 tsp amchur",
      "2 tbsp oil",
      "water",
      "salt"
    ],
    "steps": [
      "Make a firm dough with maida, oil, salt and water.",
      "Cook potato and pea filling with spices.",
      "Shape dough into cones and fill.",
      "Seal and deep-fry on medium heat until golden."
    ]
  },
  {
    "id": 33,
    "name": "Aloo Tikki",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 25,
    "imageSearch": "Aloo Tikki Indian",
    "ingredients": [
      "4 potatoes",
      "2 tbsp cornflour",
      "1 tsp chilli powder",
      "1/2 tsp cumin",
      "1/2 tsp chaat masala",
      "2 tbsp coriander",
      "1 green chilli",
      "oil",
      "salt"
    ],
    "steps": [
      "Boil and mash potatoes.",
      "Mix with cornflour, spices, chilli and coriander.",
      "Shape into flat patties.",
      "Shallow-fry until crisp and serve with chutney."
    ]
  },
  {
    "id": 34,
    "name": "Dahi Puri",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 20,
    "imageSearch": "Dahi Puri Indian",
    "ingredients": [
      "20 puris",
      "2 potatoes",
      "1/2 cup chickpeas",
      "1 cup yogurt",
      "2 tbsp tamarind chutney",
      "2 tbsp green chutney",
      "1 tsp chaat masala",
      "1/2 tsp chilli powder",
      "2 tbsp sev",
      "coriander",
      "salt"
    ],
    "steps": [
      "Fill puris with potato and chickpeas.",
      "Add yogurt and both chutneys.",
      "Sprinkle chaat masala and chilli powder.",
      "Top with sev and coriander."
    ]
  },
  {
    "id": 35,
    "name": "Momos",
    "category": "Specials",
    "cuisine": "Asian",
    "time": 40,
    "imageSearch": "Momos Dumplings",
    "ingredients": [
      "2 cups flour",
      "1 cup cabbage",
      "1 carrot",
      "1/2 capsicum",
      "2 spring onions",
      "2 garlic cloves",
      "1 tsp soy sauce",
      "1/2 tsp pepper",
      "1 tbsp oil",
      "water",
      "salt"
    ],
    "steps": [
      "Make a soft dough with flour and water.",
      "Cook chopped vegetables with garlic and soy sauce.",
      "Roll dough into thin circles and fill.",
      "Fold, seal and steam for 10–12 minutes."
    ]
  },
  {
    "id": 36,
    "name": "Chicken 65",
    "category": "Specials",
    "cuisine": "Indian",
    "time": 35,
    "imageSearch": "Chicken 65",
    "ingredients": [
      "500g chicken",
      "1/2 cup yogurt",
      "1 tbsp ginger garlic",
      "1 tsp chilli powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "2 tbsp cornflour",
      "2 tbsp rice flour",
      "1 egg",
      "curry leaves",
      "green chillies",
      "oil",
      "salt"
    ],
    "steps": [
      "Marinate chicken with yogurt, spices, egg and flours.",
      "Rest for 30 minutes.",
      "Deep-fry chicken until crisp and cooked.",
      "Temper curry leaves and green chilli and toss with chicken."
    ]
  },
  {
    "id": 37,
    "name": "Mango Shake",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Mango Milkshake",
    "ingredients": [
      "1 ripe mango",
      "1 cup chilled milk",
      "2 tbsp sugar",
      "4 ice cubes",
      "1 scoop vanilla ice cream"
    ],
    "steps": [
      "Peel and chop mango.",
      "Blend mango, milk, sugar and ice.",
      "Pour into a chilled glass.",
      "Top with vanilla ice cream."
    ]
  },
  {
    "id": 38,
    "name": "Strawberry Milkshake",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Strawberry Milkshake",
    "ingredients": [
      "1 cup strawberries",
      "1 cup chilled milk",
      "2 tbsp sugar",
      "4 ice cubes",
      "1 scoop vanilla ice cream"
    ],
    "steps": [
      "Wash and chop strawberries.",
      "Blend strawberries, milk and sugar.",
      "Add ice and blend until smooth.",
      "Pour into a glass and top with ice cream."
    ]
  },
  {
    "id": 39,
    "name": "Chocolate Milkshake",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Chocolate Milkshake",
    "ingredients": [
      "1 cup chilled milk",
      "2 tbsp cocoa powder",
      "2 tbsp sugar",
      "1 scoop chocolate ice cream",
      "4 ice cubes"
    ],
    "steps": [
      "Add milk, cocoa, sugar and ice to blender.",
      "Blend until smooth.",
      "Add chocolate ice cream and blend briefly.",
      "Pour and serve chilled."
    ]
  },
  {
    "id": 40,
    "name": "Banana Shake",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Banana Milkshake",
    "ingredients": [
      "2 bananas",
      "1 cup milk",
      "1 tbsp honey",
      "4 ice cubes",
      "1/2 tsp cinnamon"
    ],
    "steps": [
      "Slice bananas.",
      "Blend with milk and honey.",
      "Add ice and cinnamon.",
      "Blend until creamy and serve."
    ]
  },
  {
    "id": 41,
    "name": "Oreo Shake",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Oreo Milkshake",
    "ingredients": [
      "6 Oreo cookies",
      "1 cup milk",
      "2 scoops vanilla ice cream",
      "1 tbsp chocolate syrup",
      "4 ice cubes"
    ],
    "steps": [
      "Blend Oreos, milk and ice cream.",
      "Add chocolate syrup.",
      "Blend until creamy.",
      "Pour and garnish with crushed Oreo."
    ]
  },
  {
    "id": 42,
    "name": "Virgin Mojito",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Virgin Mojito Mocktail",
    "ingredients": [
      "10 mint leaves",
      "1 lime",
      "2 tsp sugar",
      "1 cup soda",
      "1/2 cup ice",
      "1/2 cup chilled water"
    ],
    "steps": [
      "Muddle mint, lime and sugar gently.",
      "Add ice.",
      "Pour chilled water and soda.",
      "Stir and garnish with mint and lime."
    ]
  },
  {
    "id": 43,
    "name": "Blue Lagoon Mocktail",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Blue Lagoon Mocktail",
    "ingredients": [
      "30ml blue curacao syrup",
      "1 cup lemonade",
      "1/2 cup ice",
      "1 lemon slice",
      "mint leaves"
    ],
    "steps": [
      "Fill glass with ice.",
      "Add blue curacao syrup.",
      "Pour chilled lemonade over it.",
      "Stir gently and garnish."
    ]
  },
  {
    "id": 44,
    "name": "Watermelon Mint Cooler",
    "category": "Shakes & Mocktails",
    "cuisine": "Beverage",
    "time": 5,
    "imageSearch": "Watermelon Mint Cooler",
    "ingredients": [
      "2 cups watermelon",
      "8 mint leaves",
      "1 tbsp lemon juice",
      "1 tsp honey",
      "1/2 cup ice",
      "1/2 cup chilled water"
    ],
    "steps": [
      "Blend watermelon until smooth.",
      "Add lemon juice and honey.",
      "Add mint, ice and chilled water.",
      "Blend briefly and serve cold."
    ]
  },
  {
    "id": 45,
    "name": "Gulab Jamun",
    "category": "Desserts",
    "cuisine": "Indian",
    "time": 40,
    "imageSearch": "Gulab Jamun",
    "ingredients": [
      "1 cup milk powder",
      "1/4 cup flour",
      "2 tbsp ghee",
      "1/4 cup milk",
      "1 cup sugar",
      "1 cup water",
      "4 cardamom pods",
      "oil"
    ],
    "steps": [
      "Mix milk powder, flour and ghee.",
      "Add milk to form a soft dough and shape balls.",
      "Prepare sugar syrup with cardamom.",
      "Fry balls on medium heat and soak in warm syrup."
    ]
  },
  {
    "id": 46,
    "name": "Rasgulla",
    "category": "Desserts",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Rasgulla Indian Dessert",
    "ingredients": [
      "1 litre milk",
      "2 tbsp lemon juice",
      "1 cup sugar",
      "4 cups water",
      "2 cardamom pods"
    ],
    "steps": [
      "Boil milk and curdle with lemon juice.",
      "Strain and knead chenna until smooth.",
      "Shape small balls.",
      "Boil sugar syrup and cook the balls covered for 15–20 minutes."
    ]
  },
  {
    "id": 47,
    "name": "Jalebi",
    "category": "Desserts",
    "cuisine": "Indian",
    "time": 40,
    "imageSearch": "Jalebi Indian Dessert",
    "ingredients": [
      "1 cup maida",
      "2 tbsp cornflour",
      "1/2 cup yogurt",
      "water",
      "1 cup sugar",
      "1/2 cup water",
      "saffron",
      "oil"
    ],
    "steps": [
      "Mix maida, cornflour and yogurt into batter and rest.",
      "Make sugar syrup with water, sugar and saffron.",
      "Pipe batter into hot oil in spiral shapes.",
      "Fry crisp and soak briefly in syrup."
    ]
  },
  {
    "id": 48,
    "name": "Gajar Halwa",
    "category": "Desserts",
    "cuisine": "Indian",
    "time": 45,
    "imageSearch": "Gajar Halwa",
    "ingredients": [
      "500g carrots",
      "2 cups milk",
      "1/2 cup sugar",
      "2 tbsp ghee",
      "1/2 tsp cardamom",
      "10 cashews",
      "10 almonds",
      "2 tbsp raisins"
    ],
    "steps": [
      "Grate carrots and cook with milk.",
      "Simmer until milk reduces.",
      "Add sugar and ghee and cook until glossy.",
      "Add cardamom and nuts and serve."
    ]
  },
  {
    "id": 49,
    "name": "Rasmalai",
    "category": "Desserts",
    "cuisine": "Indian",
    "time": 50,
    "imageSearch": "Rasmalai Indian Dessert",
    "ingredients": [
      "8 rasgullas",
      "1 litre milk",
      "1/3 cup sugar",
      "4 cardamom pods",
      "10 pistachios",
      "10 almonds",
      "saffron"
    ],
    "steps": [
      "Reduce milk by simmering.",
      "Add sugar, cardamom and saffron.",
      "Gently squeeze rasgullas and add to milk.",
      "Simmer briefly, garnish with nuts and chill."
    ]
  },
  {
    "id": 50,
    "name": "Cheesecake",
    "category": "Desserts",
    "cuisine": "International",
    "time": 60,
    "imageSearch": "Cheesecake Dessert",
    "ingredients": [
      "200g digestive biscuits",
      "80g melted butter",
      "400g cream cheese",
      "1/2 cup sugar",
      "1 tsp vanilla",
      "2 eggs",
      "1/2 cup cream",
      "1 tbsp flour"
    ],
    "steps": [
      "Crush biscuits and mix with butter.",
      "Press into a cake tin.",
      "Beat cream cheese, sugar, vanilla, eggs, cream and flour.",
      "Pour over base, bake until set and chill."
    ]
  },
  {
    "id": 51,
    "name": "Creamy Tomato Pasta",
    "category": "International",
    "cuisine": "Italian",
    "time": 25,
    "imageSearch": "Creamy Tomato Pasta",
    "ingredients": [
      "200g pasta",
      "2 tomatoes",
      "3 garlic cloves",
      "1/2 cup cream",
      "1 tbsp olive oil",
      "1/2 tsp chilli flakes",
      "1/2 tsp oregano",
      "1/4 cup parmesan",
      "basil",
      "salt",
      "black pepper"
    ],
    "steps": [
      "Boil pasta until al dente.",
      "Sauté garlic and tomatoes in olive oil.",
      "Add cream and seasonings and simmer.",
      "Toss with pasta and finish with parmesan and basil."
    ]
  },
  {
    "id": 52,
    "name": "Margherita Pizza",
    "category": "International",
    "cuisine": "Italian",
    "time": 35,
    "imageSearch": "Margherita Pizza",
    "ingredients": [
      "1 pizza base",
      "1/2 cup tomato sauce",
      "150g mozzarella",
      "fresh basil",
      "1 tbsp olive oil",
      "1/2 tsp oregano",
      "salt",
      "black pepper"
    ],
    "steps": [
      "Preheat oven to 220°C.",
      "Spread tomato sauce over base and add mozzarella.",
      "Add basil, oregano and olive oil.",
      "Bake until crust is golden and cheese melts."
    ]
  },
  {
    "id": 53,
    "name": "Lasagna",
    "category": "International",
    "cuisine": "Italian",
    "time": 70,
    "imageSearch": "Lasagna Italian",
    "ingredients": [
      "8 lasagna sheets",
      "300g minced meat or vegetables",
      "1 onion",
      "2 cups tomato sauce",
      "1 cup white sauce",
      "200g mozzarella",
      "50g parmesan",
      "2 garlic cloves",
      "oregano",
      "olive oil",
      "salt"
    ],
    "steps": [
      "Cook onion, garlic, filling and tomato sauce.",
      "Prepare lasagna sheets.",
      "Layer sauce, sheets, white sauce and cheese.",
      "Bake until bubbling and golden and rest before slicing."
    ]
  },
  {
    "id": 54,
    "name": "Alfredo Pasta",
    "category": "International",
    "cuisine": "Italian",
    "time": 20,
    "imageSearch": "Fettuccine Alfredo Pasta",
    "ingredients": [
      "200g fettuccine",
      "2 tbsp butter",
      "2 garlic cloves",
      "1 cup cream",
      "1/2 cup parmesan",
      "1/2 tsp black pepper",
      "parsley",
      "salt"
    ],
    "steps": [
      "Boil pasta until al dente.",
      "Melt butter and sauté garlic.",
      "Add cream and parmesan and simmer until creamy.",
      "Toss in pasta and garnish with parsley."
    ]
  },
  {
    "id": 55,
    "name": "Ramen",
    "category": "International",
    "cuisine": "Japanese",
    "time": 30,
    "imageSearch": "Japanese Ramen",
    "ingredients": [
      "2 ramen noodle packs",
      "3 cups stock",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "1 garlic clove",
      "1 inch ginger",
      "1 boiled egg",
      "1/2 cup mushrooms",
      "1/2 cup corn",
      "spring onion"
    ],
    "steps": [
      "Heat stock with garlic, ginger, soy sauce and sesame oil.",
      "Add mushrooms and corn.",
      "Cook noodles in the broth.",
      "Serve with boiled egg and spring onion."
    ]
  },
  {
    "id": 56,
    "name": "Sushi",
    "category": "International",
    "cuisine": "Japanese",
    "time": 45,
    "imageSearch": "Japanese Sushi Rolls",
    "ingredients": [
      "1 cup sushi rice",
      "2 tbsp rice vinegar",
      "1 tsp sugar",
      "1/2 tsp salt",
      "nori sheets",
      "cucumber",
      "avocado",
      "carrot",
      "soy sauce",
      "pickled ginger",
      "wasabi"
    ],
    "steps": [
      "Cook sushi rice and season with vinegar, sugar and salt.",
      "Place nori on a sushi mat and spread rice.",
      "Add cucumber, avocado and carrot.",
      "Roll tightly, slice and serve with soy sauce."
    ]
  },
  {
    "id": 57,
    "name": "Tacos",
    "category": "International",
    "cuisine": "Mexican",
    "time": 25,
    "imageSearch": "Mexican Tacos",
    "ingredients": [
      "6 taco shells",
      "250g chicken or beans",
      "1 onion",
      "1 tomato",
      "1/2 capsicum",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp chilli powder",
      "lettuce",
      "cheese",
      "salsa",
      "oil"
    ],
    "steps": [
      "Cook onion, capsicum and filling with spices.",
      "Warm taco shells.",
      "Fill with the cooked mixture.",
      "Top with lettuce, cheese and salsa."
    ]
  },
  {
    "id": 58,
    "name": "Burrito Bowl",
    "category": "International",
    "cuisine": "Mexican",
    "time": 30,
    "imageSearch": "Burrito Bowl Mexican",
    "ingredients": [
      "1 cup cooked rice",
      "1/2 cup black beans",
      "1/2 cup corn",
      "1 tomato",
      "1/2 avocado",
      "lettuce",
      "100g chicken",
      "1/2 tsp cumin",
      "1/2 tsp paprika",
      "salsa",
      "sour cream",
      "lime"
    ],
    "steps": [
      "Season and cook chicken with cumin and paprika.",
      "Add rice to a bowl.",
      "Arrange beans, corn, lettuce, tomato and chicken.",
      "Top with avocado, salsa, sour cream and lime."
    ]
  },
  {
    "id": 59,
    "name": "Pancakes",
    "category": "International",
    "cuisine": "American",
    "time": 20,
    "imageSearch": "American Pancakes",
    "ingredients": [
      "1 cup flour",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "1 egg",
      "3/4 cup milk",
      "2 tbsp melted butter",
      "1 tsp vanilla",
      "salt",
      "maple syrup",
      "berries"
    ],
    "steps": [
      "Mix dry ingredients.",
      "Whisk egg, milk, butter and vanilla.",
      "Combine without overmixing.",
      "Cook spoonfuls on a hot pan and serve with syrup and berries."
    ]
  },
  {
    "id": 60,
    "name": "Chocolate Brownie",
    "category": "International",
    "cuisine": "American",
    "time": 35,
    "imageSearch": "Chocolate Brownie Dessert",
    "ingredients": [
      "100g dark chocolate",
      "100g butter",
      "3/4 cup sugar",
      "2 eggs",
      "1 tsp vanilla",
      "1/2 cup flour",
      "1/4 cup cocoa",
      "1/2 tsp baking powder",
      "1/2 cup chocolate chips",
      "salt"
    ],
    "steps": [
      "Melt chocolate and butter.",
      "Whisk eggs, sugar and vanilla and combine.",
      "Fold in flour, cocoa, baking powder, salt and chocolate chips.",
      "Bake at 180°C for 20–25 minutes and cool before slicing."
    ]
  }
];


// Recipe management, community and admin data (frontend demo)
let customRecipes = JSON.parse(localStorage.getItem("flavorly_custom_recipes") || "[]");
let recipeEdits = JSON.parse(localStorage.getItem("flavorly_recipe_edits") || "{}");
let adminCategories = JSON.parse(localStorage.getItem("flavorly_admin_categories") || "[]");
let recipeComments = JSON.parse(localStorage.getItem("flavorly_comments") || "[]");
let recipeReports = JSON.parse(localStorage.getItem("flavorly_reports") || "[]");

function persistManagement(){
  localStorage.setItem("flavorly_custom_recipes",JSON.stringify(customRecipes));
  localStorage.setItem("flavorly_recipe_edits",JSON.stringify(recipeEdits));
  localStorage.setItem("flavorly_admin_categories",JSON.stringify(adminCategories));
  localStorage.setItem("flavorly_comments",JSON.stringify(recipeComments));
  localStorage.setItem("flavorly_reports",JSON.stringify(recipeReports));
}

// Apply saved edits and published custom recipes to the catalog.
recipes.forEach(r=>{ if(recipeEdits[r.id]) Object.assign(r,recipeEdits[r.id]); });
customRecipes.filter(r=>r.published).forEach(r=>recipes.push(r));

const categoryInfo = {
  "South Indian": ["SOUTH INDIAN","Comfort from the South","Crisp dosas, soft idlis and comforting classics."],
  "North Indian": ["NORTH INDIAN","Rich, warm & comforting","Creamy curries, breads and dishes full of flavour."],
  "Specials": ["FLAVORLY SPECIALS","Worth making tonight","Popular favourites, street food and special dishes."],
  "Shakes & Mocktails": ["DRINKS","Shakes, mojitos & coolers","Cold, refreshing drinks for every mood."],
  "Desserts": ["SWEET ENDINGS","Something sweet","Classic Indian sweets and beautiful desserts."],
  "International": ["AROUND THE WORLD","Flavours beyond borders","Italian, Japanese, Mexican and American favourites."]
};

const sections = document.getElementById("recipeSections");
const searchInput = document.getElementById("searchInput");
const savedButton = document.getElementById("savedButton");
const exploreButton = document.getElementById("exploreButton");
const categoryButtons = document.querySelectorAll(".category-btn");

let currentCategory = "All";
let currentSearch = "";
let savedRecipes = JSON.parse(localStorage.getItem("flavorly_saved") || "[]");
let currentDiet = "All";
let currentRecipeId = null;
let currentUser = JSON.parse(localStorage.getItem("flavorly_user") || "null");
let collections = JSON.parse(localStorage.getItem("flavorly_collections") || "{}");

function dietaryType(recipe){
  const text = [...(recipe.ingredients || []), recipe.name].join(" ").toLowerCase();
  const nonVeg = /chicken|mutton|beef|pork|fish|prawn|shrimp|egg|meat|seafood|chicken|bacon|ham/.test(text);
  const dairy = /milk|cream|cheese|paneer|curd|yogurt|butter|ghee|parmesan|mozzarella|ice cream/.test(text);
  if(nonVeg) return "Non-Vegetarian";
  if(!dairy) return "Vegan";
  return "Vegetarian";
}

recipes.forEach(r => r.diet = dietaryType(r));

function filteredRecipes(){
  return recipes.filter(r => {
    const dietOk = currentDiet === "All" || r.diet === currentDiet;
    const catOk = currentCategory === "All" || r.category === currentCategory;
    return dietOk && catOk;
  });
}

function saveCollections(){ localStorage.setItem("flavorly_collections", JSON.stringify(collections)); }
function saveUser(){ localStorage.setItem("flavorly_user", JSON.stringify(currentUser)); }


function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]));
}

const curatedFoodImages = {
  "Rasgulla": "https://images.pexels.com/photos/39959160/pexels-photo-39959160.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Fettuccine Alfredo Pasta": "https://images.pexels.com/photos/37336686/pexels-photo-37336686.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Creamy Tomato Pasta": "https://images.pexels.com/photos/29160624/pexels-photo-29160624.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Mango Milkshake": "https://images.pexels.com/photos/32503389/pexels-photo-32503389.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Chocolate Milkshake": "https://images.pexels.com/photos/9730380/pexels-photo-9730380.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Mutton Biryani": "https://images.pexels.com/photos/16229982/pexels-photo-16229982.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Vegetable Uttapam": "https://images.pexels.com/photos/36854500/pexels-photo-36854500.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

async function getFoodImage(term) {
  if (curatedFoodImages[term]) return curatedFoodImages[term];

  const key = "flavorly_img_" + term;
  const cached = localStorage.getItem(key);
  if (cached) return cached;

  try {
    const p = new URLSearchParams({
      action:"query",
      generator:"search",
      gsrsearch:term + " food",
      gsrnamespace:"6",
      gsrlimit:"1",
      prop:"imageinfo",
      iiprop:"url",
      iiurlwidth:"900",
      format:"json",
      origin:"*"
    });

    const r = await fetch("https://commons.wikimedia.org/w/api.php?" + p);
    const d = await r.json();
    const pages = d.query && d.query.pages;
    if (pages) {
      const page = Object.values(pages)[0];
      const info = page?.imageinfo?.[0];
      const url = info?.thumburl || info?.url;
      if (url) {
        localStorage.setItem(key,url);
        return url;
      }
    }
  } catch(e) {
    console.log("Image API unavailable:",term);
  }
  return "";
}

function card(recipe) {
  const saved = savedRecipes.includes(recipe.id);
  return `
    <article class="recipe-card">
      <div class="card-image">
        <img src="" data-term="${escapeHtml(recipe.imageSearch)}" alt="${escapeHtml(recipe.name)}" loading="lazy">
        <button class="save-btn ${saved ? "saved":""}" onclick="toggleSave(${recipe.id},event)">${saved ? "♥":"♡"}</button>
      </div>
      <div class="card-content">
        <span class="card-category">${escapeHtml(recipe.category)} · ${escapeHtml(recipe.diet || dietaryType(recipe))}</span>
        <h3>${escapeHtml(recipe.name)}</h3>
        <div class="card-meta"><span>⏱ ${recipe.time} min</span><span>🍴 ${escapeHtml(recipe.cuisine)}</span></div>
        <button class="view-recipe" onclick="openRecipe(${recipe.id})">View recipe →</button>
      </div>
    </article>`;
}

function renderAll(list=recipes) {
  sections.innerHTML = "";
  const cats = ["South Indian","North Indian","Specials","Shakes & Mocktails","Desserts","International"];

  cats.forEach(cat => {
    const items = list.filter(r => r.category === cat);
    if (!items.length) return;
    const info = categoryInfo[cat];

    const section = document.createElement("section");
    section.className = "recipe-section";
    section.innerHTML = `
      <div class="recipe-header">
        <div>
          <p class="eyebrow">${info[0]}</p>
          <h2>${info[1]}</h2>
          <p>${info[2]}</p>
        </div>
        <button class="see-all" onclick="showCategory('${cat}')">See all →</button>
      </div>
      <div class="recipe-grid">${items.slice(0,4).map(card).join("")}</div>`;
    sections.appendChild(section);
  });
  loadImages();
}

function renderCategory(cat,list) {
  const info = categoryInfo[cat];
  sections.innerHTML = `
    <section class="recipe-section">
      <div class="recipe-header">
        <div><p class="eyebrow">${info[0]}</p><h2>${info[1]}</h2><p>${info[2]}</p></div>
      </div>
      <div class="recipe-grid">${list.map(card).join("")}</div>
    </section>`;
  loadImages();
}

async function loadImages() {
  const imgs = document.querySelectorAll(".card-image img[data-term]");
  for (const img of imgs) {
    const url = await getFoodImage(img.dataset.term);
    if (url) img.src = url;
    else img.parentElement.style.background = "linear-gradient(135deg,#ded4c8,#f2ebe3)";
  }
}

function showCategory(cat) {
  currentCategory = cat;
  categoryButtons.forEach(b => b.classList.toggle("active",b.dataset.category===cat));
  renderCategory(cat,filteredRecipes());
  document.getElementById("recipes").scrollIntoView({behavior:"smooth"});
}

function search() {
  currentSearch = searchInput.value.trim().toLowerCase();
  if (!currentSearch) {
    currentCategory="All";
    categoryButtons.forEach(b=>b.classList.toggle("active",b.dataset.category==="All"));
    renderAll(filteredRecipes());
    return;
  }

  const results = recipes.filter(r => {
    const text = [r.name,r.category,r.cuisine,...r.ingredients].join(" ").toLowerCase();
    const dietOk = currentDiet === "All" || r.diet === currentDiet;
    const catOk = currentCategory === "All" || r.category === currentCategory;
    return text.includes(currentSearch) && dietOk && catOk;
  });

  sections.innerHTML = `
    <section class="recipe-section">
      <div class="recipe-header">
        <div><p class="eyebrow">SEARCH RESULTS</p><h2>Recipes you might like</h2></div>
      </div>
      ${results.length ? `<div class="recipe-grid">${results.map(card).join("")}</div>` : `<div class="empty"><h2>No recipes found</h2><p>Try dosa, chicken, paneer, pasta or dessert.</p></div>`}
    </section>`;
  loadImages();
}

searchInput.addEventListener("input",search);

categoryButtons.forEach(btn => btn.addEventListener("click",() => {
  categoryButtons.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentCategory=btn.dataset.category;
  currentSearch="";
  searchInput.value="";
  const list = filteredRecipes();
  if(currentCategory==="All") renderAll(list);
  else renderCategory(currentCategory,list);
}));

function toggleSave(id,event) {
  event.stopPropagation();
  if(savedRecipes.includes(id)) savedRecipes=savedRecipes.filter(x=>x!==id);
  else savedRecipes.push(id);
  localStorage.setItem("flavorly_saved",JSON.stringify(savedRecipes));
  const list = filteredRecipes();
  if(currentCategory==="All") renderAll(list);
  else renderCategory(currentCategory,list);
}

savedButton.addEventListener("click",() => {
  const saved=recipes.filter(r=>savedRecipes.includes(r.id));
  currentCategory="All";
  categoryButtons.forEach(b=>b.classList.remove("active"));
  sections.innerHTML = `
    <section class="recipe-section">
      <div class="recipe-header"><div><p class="eyebrow">YOUR COLLECTION</p><h2>Saved recipes</h2></div></div>
      ${saved.length ? `<div class="recipe-grid">${saved.map(card).join("")}</div>` : `<div class="empty"><h2>No saved recipes yet</h2><p>Tap ♡ on any recipe to save it here.</p></div>`}
    </section>`;
  loadImages();
  document.getElementById("recipes").scrollIntoView({behavior:"smooth"});
});

exploreButton.addEventListener("click",()=>document.getElementById("recipes").scrollIntoView({behavior:"smooth"}));

// ===== Accounts, collections, sharing, dietary filters and recipe reviews =====
function ensureFeatureModals(){
  if(document.getElementById("loginModal")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="feature-modal" id="loginModal"><div class="feature-modal-box">
      <button class="feature-close" onclick="closeFeatureModal('loginModal')">×</button>
      <h2>Welcome to Flavorly</h2>
      <form id="loginForm" class="form-grid">
        <label>Email</label><input id="loginEmail" type="email" required placeholder="you@example.com">
        <label>Password</label><input id="loginPassword" type="password" required minlength="4" placeholder="••••••••">
        <button class="primary" type="submit">Login</button>
      </form>
      <hr>
      <form id="registerForm" class="form-grid">
        <label>Create account</label><input id="registerName" required placeholder="Your name">
        <input id="registerEmail" type="email" required placeholder="Email">
        <input id="registerPassword" type="password" required minlength="4" placeholder="Password">
        <button class="primary" type="submit">Register</button>
      </form>
      <p class="form-note">Demo authentication is stored in this browser using localStorage.</p>
      <p id="authMessage" class="feedback-message"></p>
    </div></div>
    <div class="feature-modal" id="profileModal"><div class="feature-modal-box">
      <button class="feature-close" onclick="closeFeatureModal('profileModal')">×</button>
      <h2>Your Profile</h2><div id="profileContent"></div>
    </div></div>
    <div class="feature-modal" id="collectionsModal"><div class="feature-modal-box">
      <button class="feature-close" onclick="closeFeatureModal('collectionsModal')">×</button>
      <h2>My Recipe Collections</h2><form id="collectionForm" class="form-grid"><input id="collectionName" required placeholder="e.g. Weekend Breakfast"><button class="primary">Create collection</button></form><div id="collectionsContent"></div>
    </div></div>`);

  document.getElementById("loginForm").addEventListener("submit", e=>{
    e.preventDefault();
    const email=document.getElementById("loginEmail").value.trim().toLowerCase();
    const password=document.getElementById("loginPassword").value;
    const stored=JSON.parse(localStorage.getItem("flavorly_account")||"null");
    const msg=document.getElementById("authMessage");
    if(stored && stored.email===email && stored.password===password){
      currentUser={name:stored.name,email:stored.email}; saveUser(); updateAccountUI(); closeFeatureModal("loginModal");
    } else msg.textContent="Account not found or password is incorrect.";
  });
  document.getElementById("registerForm").addEventListener("submit", e=>{
    e.preventDefault();
    const account={name:document.getElementById("registerName").value.trim(),email:document.getElementById("registerEmail").value.trim().toLowerCase(),password:document.getElementById("registerPassword").value};
    localStorage.setItem("flavorly_account",JSON.stringify(account));
    currentUser={name:account.name,email:account.email}; saveUser(); updateAccountUI(); closeFeatureModal("loginModal");
  });
  document.getElementById("collectionForm").addEventListener("submit", e=>{
    e.preventDefault();
    if(!currentUser){ openFeatureModal("loginModal"); return; }
    const name=document.getElementById("collectionName").value.trim();
    if(name && !collections[name]) collections[name]=[];
    saveCollections(); e.target.reset(); renderCollections();
  });
}

function openFeatureModal(id){ ensureFeatureModals(); document.getElementById(id).classList.add("open"); if(id==="profileModal") renderProfile(); if(id==="collectionsModal") renderCollections(); }
function closeFeatureModal(id){ const el=document.getElementById(id); if(el) el.classList.remove("open"); }
function updateAccountUI(){
  const auth=document.getElementById("authButton"), profile=document.getElementById("profileButton");
  if(!auth) return;
  if(currentUser){ auth.textContent="Logout"; profile.classList.remove("profile-hidden"); }
  else { auth.textContent="Login / Register"; profile.classList.add("profile-hidden"); }
}
function renderProfile(){
  const saved=recipes.filter(r=>savedRecipes.includes(r.id));
  const count=Object.values(collections).reduce((n,a)=>n+a.length,0);
  document.getElementById("profileContent").innerHTML=`
    <div class="form-grid"><label>Name</label><input id="profileName" value="${escapeHtml(currentUser?.name||"")}"><label>Email</label><input value="${escapeHtml(currentUser?.email||"")}" disabled>
    <button class="primary" onclick="updateProfile()">Save profile</button></div>
    <div class="profile-stats"><div class="profile-stat"><strong>${saved.length}</strong>Saved</div><div class="profile-stat"><strong>${Object.keys(collections).length}</strong>Collections</div><div class="profile-stat"><strong>${count}</strong>Items</div></div>
    <button class="account-button" onclick="logoutUser()">Log out</button>`;
}
function updateProfile(){ if(!currentUser) return; currentUser.name=document.getElementById("profileName").value.trim()||currentUser.name; saveUser(); const a=JSON.parse(localStorage.getItem("flavorly_account")||"null"); if(a){a.name=currentUser.name;localStorage.setItem("flavorly_account",JSON.stringify(a));} renderProfile(); }
function logoutUser(){ currentUser=null; localStorage.removeItem("flavorly_user"); updateAccountUI(); closeFeatureModal("profileModal"); }
function renderCollections(){
  const box=document.getElementById("collectionsContent"); if(!box) return;
  const names=Object.keys(collections);
  box.innerHTML=names.length?`<div class="collection-list">${names.map(name=>`<div class="collection-item"><div><strong>${escapeHtml(name)}</strong><div class="form-note">${collections[name].length} recipe(s)</div></div><button onclick="viewCollection('${encodeURIComponent(name)}')">View</button></div>`).join("")}</div>`:`<p class="form-note">Create your first collection above.</p>`;
}
function viewCollection(encoded){
  const name=decodeURIComponent(encoded), ids=collections[name]||[], list=recipes.filter(r=>ids.includes(r.id));
  closeFeatureModal("collectionsModal");
  currentCategory="All"; currentDiet="All"; currentSearch=""; searchInput.value=""; categoryButtons.forEach(b=>b.classList.remove("active"));
  sections.innerHTML=`<section class="recipe-section"><div class="recipe-header"><div><p class="eyebrow">MY COLLECTION</p><h2>${escapeHtml(name)}</h2></div></div>${list.length?`<div class="recipe-grid">${list.map(card).join("")}</div>`:`<div class="empty"><h2>Collection is empty</h2></div>`}</section>`; loadImages(); document.getElementById("recipes").scrollIntoView({behavior:"smooth"});
}
function addToCollection(){
  if(!currentUser){openFeatureModal("loginModal");return;}
  ensureFeatureModals();
  const names=Object.keys(collections); const r=recipes.find(x=>x.id===currentRecipeId); if(!r)return;
  const choices=names.length?names.map(n=>`<button type="button" class="collection-item" onclick="addRecipeToCollection('${encodeURIComponent(n)}',${r.id})"><span>${escapeHtml(n)}</span><span>${collections[n].length} recipes</span></button>`).join(""):"<p class='form-note'>No collections yet. Create one below.</p>";
  openFeatureModal("collectionsModal");
  document.getElementById("collectionsContent").innerHTML=`<div class="collection-list">${choices}</div>`;
}
function addRecipeToCollection(encoded,id){ const name=decodeURIComponent(encoded); if(!collections[name].includes(id)) collections[name].push(id); saveCollections(); renderCollections(); }
async function shareRecipe(){
  const r=recipes.find(x=>x.id===currentRecipeId); if(!r)return;
  const data={title:r.name,text:`${r.name} — ${r.cuisine} recipe from Flavorly`,url:location.href.split('#')[0]+`#recipe-${r.id}`};
  try{ if(navigator.share) await navigator.share(data); else {await navigator.clipboard.writeText(`${data.title}\n${data.text}\n${data.url}`); alert("Recipe link copied!");} }catch(e){}
}
function recipeReviews(id){ return JSON.parse(localStorage.getItem("flavorly_reviews_"+id)||"[]"); }
function saveRecipeReview(id,rating,text){ const reviews=recipeReviews(id); reviews.push({rating,text,date:new Date().toISOString(),user:currentUser?.name||"Guest"}); localStorage.setItem("flavorly_reviews_"+id,JSON.stringify(reviews)); }
function renderRecipeRating(id){
  const reviews=recipeReviews(id), avg=reviews.length?(reviews.reduce((a,r)=>a+r.rating,0)/reviews.length).toFixed(1):"—";
  return `<div class="recipe-rating"><strong>Recipe rating: ${avg}/5 (${reviews.length})</strong><div class="recipe-stars">${[1,2,3,4,5].map(n=>`<button class="recipe-star" onclick="rateRecipe(${id},${n})">★</button>`).join("")}</div><div class="form-grid"><textarea id="reviewText" rows="3" maxlength="300" placeholder="Write a review..."></textarea><button class="primary" onclick="submitRecipeReview(${id})">Submit review</button></div><div class="review-list">${reviews.slice(-3).reverse().map(r=>`<div class="review-item"><strong>${"★".repeat(r.rating)} · ${escapeHtml(r.user)}</strong><p>${escapeHtml(r.text||"No written review")}</p></div>`).join("")}</div></div>`;
}
function rateRecipe(id,rating){ window._pendingRecipeRating=rating; document.querySelectorAll(".recipe-star").forEach((b,i)=>b.classList.toggle("active",i<rating)); }
function submitRecipeReview(id){ const text=document.getElementById("reviewText")?.value.trim()||""; const rating=window._pendingRecipeRating||0; if(!rating){alert("Please select a rating first.");return;} saveRecipeReview(id,rating,text); window._pendingRecipeRating=0; openRecipe(id); }


function difficultyForRecipe(r){
  if(r.difficulty) return r.difficulty;
  if(r.time<=25) return "Easy";
  if(r.time<=60) return "Medium";
  return "Hard";
}

function openRecipeEditor(id=null){
  ensureFeatureModals();
  const form=document.getElementById("recipeEditorForm");
  form.reset();
  document.getElementById("editRecipeId").value=id||"";
  document.getElementById("recipeEditorTitle").textContent=id?"Edit Existing Recipe":"Add New Recipe";
  document.getElementById("recipeEditorMessage").textContent="";
  if(id){
    const r=recipes.find(x=>x.id===Number(id));
    if(!r)return;
    document.getElementById("editorName").value=r.name||"";
    document.getElementById("editorCuisine").value=r.cuisine||"";
    document.getElementById("editorCategory").value=r.category||"International";
    document.getElementById("editorDiet").value=r.diet||dietaryType(r);
    document.getElementById("editorTime").value=r.time||30;
    document.getElementById("editorDifficulty").value=difficultyForRecipe(r);
    document.getElementById("editorIngredients").value=(r.ingredients||[]).join("\n");
    document.getElementById("editorSteps").value=(r.steps||[]).join("\n");
  }
  openFeatureModal("recipeEditorModal");
}

function recipeEditorData(published){
  const id=document.getElementById("editRecipeId").value;
  const existing=id?recipes.find(r=>r.id===Number(id)):null;
  const imageInput=document.getElementById("editorImage");
  const imageFile=imageInput.files[0];
  return {id:id?Number(id):Date.now(),name:document.getElementById("editorName").value.trim(),cuisine:document.getElementById("editorCuisine").value.trim(),category:document.getElementById("editorCategory").value,diet:document.getElementById("editorDiet").value,time:Number(document.getElementById("editorTime").value),difficulty:document.getElementById("editorDifficulty").value,imageSearch:existing?.imageSearch||document.getElementById("editorName").value.trim(),image:imageFile?null:(existing?.image||""),ingredients:document.getElementById("editorIngredients").value.split("\n").map(x=>x.trim()).filter(Boolean),steps:document.getElementById("editorSteps").value.split("\n").map(x=>x.trim()).filter(Boolean),published};
}

function finishRecipeSave(data){
  if(data.image) localStorage.setItem("flavorly_img_"+data.imageSearch,data.image);
  const existing=recipes.findIndex(r=>r.id===data.id);
  if(existing>=0){
    Object.assign(recipes[existing],data);
    recipeEdits[data.id]={...data};
    delete recipeEdits[data.id].published;
  } else {
    customRecipes=customRecipes.filter(r=>r.id!==data.id);
    customRecipes.push(data);
    if(data.published) recipes.push(data);
  }
  persistManagement();
  document.getElementById("recipeEditorMessage").textContent=data.published?"Recipe published successfully.":"Recipe saved as a draft for admin approval.";
  renderAll(filteredRecipes());
  renderManagedRecipes();
  refreshAdminDashboard();
}

function saveRecipeAsDraft(){
  const form=document.getElementById("recipeEditorForm");
  if(!form.reportValidity())return;
  const data=recipeEditorData(false);
  const file=document.getElementById("editorImage").files[0];
  if(file){const reader=new FileReader();reader.onload=()=>{data.image=reader.result;finishRecipeSave(data);};reader.readAsDataURL(file);}else finishRecipeSave(data);
}

document.addEventListener("submit",e=>{
  if(e.target.id!=="recipeEditorForm")return;
  e.preventDefault();
  const data=recipeEditorData(true), file=document.getElementById("editorImage").files[0];
  if(file){const reader=new FileReader();reader.onload=()=>{data.image=reader.result;finishRecipeSave(data);};reader.readAsDataURL(file);}else finishRecipeSave(data);
});

function editManagedRecipe(id){openRecipeEditor(id);}
function renderManagedRecipes(){
  const box=document.getElementById("managedRecipes"); if(!box)return;
  const items=[...recipes].slice(-12).reverse();
  box.innerHTML=`<div class="managed-heading"><h3>Recipe Management</h3><span>${items.length} recipes shown</span></div><div class="managed-list">${items.map(r=>`<div class="managed-item"><div><strong>${escapeHtml(r.name)}</strong><span>${escapeHtml(r.category)} · ${difficultyForRecipe(r)} · ${r.time} min</span></div><div><button class="account-button" onclick="editManagedRecipe(${r.id})">Edit</button><button class="account-button" onclick="openRecipe(${r.id})">View</button></div></div>`).join("")}</div>`;
}

function renderCommunityDashboard(){
  const scores=recipes.map(r=>({r,score:recipeReviews(r.id).reduce((a,x)=>a+x.rating,0)})).sort((a,b)=>b.score-a.score).slice(0,5);
  const popular=document.getElementById("popularRecipes"), trending=document.getElementById("trendingRecipes");
  if(popular) popular.innerHTML=scores.map((x,i)=>`<div class="rank-row"><b>#${i+1}</b><span>${escapeHtml(x.r.name)}</span><strong>${x.score||0} ★</strong></div>`).join("");
  if(trending) trending.innerHTML=recipes.slice(-5).reverse().map((r,i)=>`<div class="rank-row"><b>↗</b><span>${escapeHtml(r.name)}</span><small>${r.time} min · ${r.diet||dietaryType(r)}</small></div>`).join("");
}

function refreshAdminDashboard(){
  renderManagedRecipes(); renderCommunityDashboard();
  const stats=document.getElementById("adminStats"); if(!stats)return;
  const accounts=[]; for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("flavorly_account")){try{accounts.push(JSON.parse(localStorage.getItem(k)));}catch(e){}}}
  const reviews=recipes.reduce((n,r)=>n+recipeReviews(r.id).length,0);
  const pending=customRecipes.filter(r=>!r.published).length;
  stats.innerHTML=`<div><strong>${accounts.length||1}</strong><span>Users</span></div><div><strong>${recipes.length}</strong><span>Published recipes</span></div><div><strong>${pending}</strong><span>Pending approval</span></div><div><strong>${reviews}</strong><span>Reviews</span></div>`;
  document.getElementById("adminUsers").innerHTML=`<div class="admin-line"><span>Guest visitors</span><strong>Active</strong></div><div class="admin-line"><span>Registered accounts</span><strong>${accounts.length}</strong></div><div class="admin-line"><span>Current user</span><strong>${currentUser?escapeHtml(currentUser.name):"Guest"}</strong></div>`;
  const pend=document.getElementById("adminPending");
  pend.innerHTML=pending?customRecipes.filter(r=>!r.published).map(r=>`<div class="admin-line"><span>${escapeHtml(r.name)}</span><button class="account-button" onclick="approveRecipe(${r.id})">Approve</button></div>`).join(""):"<p class='form-note'>No pending recipes.</p>";
  const cats=[...new Set([...Object.keys(categoryInfo),...adminCategories])];
  document.getElementById("adminCategories").innerHTML=cats.map(c=>`<span class="tag">${escapeHtml(c)}</span>`).join("");
  document.getElementById("adminCommunity").innerHTML=`<div class="admin-line"><span>Reviews</span><strong>${reviews}</strong></div><div class="admin-line"><span>Comments</span><strong>${recipeComments.length}</strong></div><div class="admin-line"><span>Reports</span><strong>${recipeReports.length}</strong></div>`;
  const totalSaved=savedRecipes.length, totalCollections=Object.values(collections).reduce((n,a)=>n+a.length,0);
  document.getElementById("adminAnalytics").innerHTML=`<div class="analytics-bars"><div><span>Catalog</span><b style="width:${Math.min(100,recipes.length)}%"></b></div><div><span>Saved recipes</span><b style="width:${Math.min(100,totalSaved*10)}%"></b></div><div><span>Collection items</span><b style="width:${Math.min(100,totalCollections*10)}%"></b></div></div>`;
}

function approveRecipe(id){const r=customRecipes.find(x=>x.id===id);if(!r)return;r.published=true;customRecipes=customRecipes.filter(x=>x.id!==id);recipes.push(r);persistManagement();refreshAdminDashboard();renderAll(filteredRecipes());}
function addAdminCategory(){const input=document.getElementById("newCategory"),name=input.value.trim();if(!name)return;if(!adminCategories.includes(name))adminCategories.push(name);persistManagement();input.value="";refreshAdminDashboard();}
function generateAdminReport(){const report={generatedAt:new Date().toISOString(),users:currentUser?1:0,publishedRecipes:recipes.length,pendingRecipes:customRecipes.length,reviews:recipes.reduce((n,r)=>n+recipeReviews(r.id).length,0),comments:recipeComments.length,reports:recipeReports.length};const blob=new Blob([JSON.stringify(report,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="flavorly-admin-report.json";a.click();URL.revokeObjectURL(a.href);}

ensureFeatureModals();
const dietFilters=document.querySelectorAll(".filter-btn");
dietFilters.forEach(btn=>btn.addEventListener("click",()=>{ currentDiet=btn.dataset.diet; dietFilters.forEach(b=>b.classList.toggle("active",b===btn)); currentSearch=searchInput.value.trim().toLowerCase(); if(currentSearch){ search(); } else if(currentCategory==="All"){ renderAll(filteredRecipes()); } else { renderCategory(currentCategory,filteredRecipes()); } }));

document.getElementById("authButton").addEventListener("click",()=>{ if(currentUser) logoutUser(); else openFeatureModal("loginModal"); });
document.getElementById("profileButton").addEventListener("click",()=>openFeatureModal("profileModal"));
document.getElementById("collectionsButton").addEventListener("click",()=>openFeatureModal("collectionsModal"));
document.getElementById("adminButton").addEventListener("click",()=>{document.getElementById("adminDashboard").scrollIntoView({behavior:"smooth"});refreshAdminDashboard();});
updateAccountUI();
renderManagedRecipes();
renderCommunityDashboard();

// Rating and feedback
const feedbackForm=document.getElementById("feedbackForm");
const stars=document.querySelectorAll(".star");
const ratingText=document.getElementById("ratingText");
const feedbackMessage=document.getElementById("feedbackMessage");
let selectedRating=0;

const ratingLabels={1:"Poor",2:"Fair",3:"Good",4:"Very good",5:"Excellent"};

function updateStars(rating){
  stars.forEach(star=>star.classList.toggle("active",Number(star.dataset.rating)<=rating));
}

stars.forEach(star=>star.addEventListener("click",()=>{
  selectedRating=Number(star.dataset.rating);
  updateStars(selectedRating);
  ratingText.textContent=`${ratingLabels[selectedRating]} (${selectedRating}/5)`;
}));

feedbackForm.addEventListener("submit",e=>{
  e.preventDefault();
  const feedback=document.getElementById("feedbackText").value.trim();

  if(!selectedRating){
    feedbackMessage.textContent="Please select a rating first.";
    return;
  }

  const reviews=JSON.parse(localStorage.getItem("flavorly_feedback")||"[]");
  reviews.push({rating:selectedRating,feedback,date:new Date().toISOString()});
  localStorage.setItem("flavorly_feedback",JSON.stringify(reviews));

  feedbackMessage.textContent="Thank you! Your feedback has been submitted.";
  feedbackForm.reset();
  selectedRating=0;
  updateStars(0);
  ratingText.textContent="Select a rating";
});

async function openRecipe(id) {
  const r=recipes.find(x=>x.id===id);
  if(!r)return;
  currentRecipeId=id;
  document.getElementById("modalTitle").textContent=r.name;
  document.getElementById("modalCategory").textContent=`${r.category} · ${r.diet}`;
  document.getElementById("modalTime").textContent=`⏱ ${r.time} minutes`;
  document.getElementById("modalCuisine").textContent=`🍴 ${r.cuisine}`;
  document.getElementById("modalIngredients").innerHTML=r.ingredients.map(x=>`<li>${escapeHtml(x)}</li>`).join("");
  document.getElementById("modalSteps").innerHTML=r.steps.map(x=>`<li>${escapeHtml(x)}</li>`).join("");
  document.getElementById("modalImage").src=await getFoodImage(r.imageSearch);
  document.getElementById("modalImage").alt=r.name;
  let actions=document.getElementById("recipeFeatureActions");
  if(!actions){ actions=document.createElement("div"); actions.id="recipeFeatureActions"; document.querySelector("#recipeModal .modal-body").appendChild(actions); }
  actions.innerHTML=`<div class="modal-actions"><button onclick="shareRecipe()">↗ Share recipe</button><button onclick="addToCollection()">＋ Add to collection</button></div>${renderRecipeRating(id)}`;
  document.getElementById("recipeModal").classList.add("active");
  document.body.style.overflow="hidden";
}
function closeRecipe() {
  document.getElementById("recipeModal").classList.remove("active");
  document.body.style.overflow="";
}

document.getElementById("recipeModal").addEventListener("click",e=>{if(e.target.id==="recipeModal")closeRecipe();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeRecipe();});

renderAll(filteredRecipes());
console.log("Flavorly loaded:",recipes.length,"recipes");

window.addEventListener("load",()=>{refreshAdminDashboard();});
