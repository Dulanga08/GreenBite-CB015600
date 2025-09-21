// Recipe data
  const recipes = [
    {
      id: 1,
      name: "Avocado Toast with Egg",
      ingredients: ["2 slices whole-grain bread", "1 ripe avocado", "2 eggs", "Salt & pepper", "Chili flakes"],
      steps: ["Toast the bread.", "Mash avocado & spread.", "Fry eggs.", "Place eggs on toast.", "Add seasonings."],
      nutrition: { calories: 350, protein: "14g", fat: "22g", carbs: "32g" }
    },
    {
      id: 2,
      name: "Salmon with Lemon & Asparagus",
      ingredients: ["2 salmon fillets", "Asparagus", "Lemon", "Olive oil", "Salt & pepper"],
      steps: ["Preheat oven.", "Place salmon & asparagus.", "Season & add lemon slices.", "Bake 15 mins."],
      nutrition: { calories: 450, protein: "34g", fat: "25g", carbs: "8g" }
    },
    {
      id: 3,
      name: "Greek Yogurt with Nuts & Honey",
      ingredients: ["1 cup Greek yogurt", "1/4 cup mixed nuts", "2 tbsp honey", "Berries (optional)"],
      steps: ["Spoon yogurt into bowl.", "Top with nuts & honey.", "Add berries if desired."],
      nutrition: { calories: 220, protein: "12g", fat: "15g", carbs: "20g" }
    },
    {
      id: 4,
      name: "Grilled Chicken Salad with Avocado & Balsamic",
      ingredients: ["Chicken breast", "Avocado", "Lettuce", "Tomatoes", "Balsamic dressing"],
      steps: ["Grill the chicken.", "Slice avocado.", "Toss salad ingredients.", "Top with chicken & dressing."],
      nutrition: { calories: 400, protein: "30g", fat: "20g", carbs: "18g" }
    },
    {
      id: 5,
      name: "Turkey & Hummus Wrap",
      ingredients: ["Whole wheat wrap", "Sliced turkey", "Hummus", "Lettuce", "Tomato"],
      steps: ["Spread hummus on wrap.", "Layer turkey and veggies.", "Roll up and slice."],
      nutrition: { calories: 370, protein: "28g", fat: "15g", carbs: "28g" }
    },
    {
      id: 6,
      name: "Chickpea Salad",
      ingredients: ["Canned chickpeas", "Cucumber", "Cherry tomatoes", "Red onion", "Lemon juice"],
      steps: ["Rinse chickpeas.", "Chop veggies.", "Mix all ingredients.", "Add dressing."],
      nutrition: { calories: 310, protein: "12g", fat: "10g", carbs: "40g" }
    },
    {
      id: 7,
      name: "Stuffed Sweet Potatoes with Black Beans and Avocado",
      ingredients: ["Sweet potatoes", "Black beans", "Avocado", "Corn", "Salsa"],
      steps: ["Bake sweet potatoes.", "Mash avocado.", "Mix beans & corn.", "Stuff potatoes and top with salsa."],
      nutrition: { calories: 380, protein: "14g", fat: "16g", carbs: "45g" }
    },
    {
      id: 8,
      name: "Zucchini Noodles with Pesto and Shrimp",
      ingredients: ["Zucchini noodles", "Shrimp", "Pesto", "Parmesan cheese"],
      steps: ["Spiralize zucchini.", "Cook shrimp.", "Toss noodles with pesto and shrimp.", "Top with cheese."],
      nutrition: { calories: 340, protein: "30g", fat: "18g", carbs: "10g" }
    },
    {
      id: 9,
      name: "Lentil Stir Fry with Veggies",
      ingredients: ["Cooked lentils", "Mixed vegetables", "Soy sauce", "Ginger", "Brown rice"],
      steps: ["Stir-fry vegetables.", "Add lentils and sauce.", "Serve over rice."],
      nutrition: { calories: 420, protein: "20g", fat: "10g", carbs: "60g" }
    }
  ];

  // Modal functionality
  const modal = document.getElementById("recipeModal");
  const closeBtn = modal.querySelector(".close");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const recipeId = parseInt(card.getAttribute("data-id"));
      const recipe = recipes.find(r => r.id === recipeId);

      if (recipe) {
        document.getElementById("modalTitle").textContent = recipe.name;
        document.getElementById("modalIngredients").innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
        document.getElementById("modalSteps").innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join('');
        document.getElementById("modalCalories").textContent = recipe.nutrition.calories;
        document.getElementById("modalProtein").textContent = recipe.nutrition.protein;
        document.getElementById("modalFat").textContent = recipe.nutrition.fat;
        document.getElementById("modalCarbs").textContent = recipe.nutrition.carbs;

        modal.style.display = "flex";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Filter and search functionality
  const categoryFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');
  const allCards = document.querySelectorAll('.card');

  function filterRecipes() {
    const categoryValue = categoryFilter.value;
    const searchValue = searchInput.value.toLowerCase();
    
    allCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardTitle = card.querySelector('h2').textContent.toLowerCase();
      const titleMatch = cardTitle.includes(searchValue);
      const categoryMatch = categoryValue === 'all' || cardCategory === categoryValue;
      
      if (categoryMatch && titleMatch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Show/hide section headings based on visible cards
    document.querySelectorAll('.recipe-section').forEach(section => {
      const sectionId = section.querySelector('.recipe-grid').id;
      const hasVisibleCards = Array.from(section.querySelectorAll('.card'))
        .some(card => card.style.display !== 'none');
      
      section.style.display = hasVisibleCards ? 'block' : 'none';
    });
  }

  categoryFilter.addEventListener('change', filterRecipes);
  searchInput.addEventListener('input', filterRecipes);
  
  // Newsletter form submission
  document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    alert(`Thank you for subscribing with ${email}! You'll receive our latest recipes and updates.`);
    this.reset();
  });