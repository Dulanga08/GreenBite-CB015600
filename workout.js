 // Workout database
    const workoutDatabase = {
      full: {
        none: [
          { name: "Jumping Jacks", sets: 3, reps: 30, rest: 30 },
          { name: "Push-ups", sets: 3, reps: 12, rest: 45 },
          { name: "Bodyweight Squats", sets: 3, reps: 15, rest: 45 },
          { name: "Plank", sets: 3, reps: "30 seconds", rest: 30 },
          { name: "Lunges", sets: 3, reps: 12, rest: 45 }
        ],
        dumbbells: [
          { name: "Goblet Squats", sets: 4, reps: 12, rest: 60 },
          { name: "Dumbbell Press", sets: 4, reps: 10, rest: 60 },
          { name: "Bent-over Rows", sets: 4, reps: 10, rest: 60 },
          { name: "Dumbbell Lunges", sets: 3, reps: 12, rest: 45 },
          { name: "Shoulder Press", sets: 3, reps: 10, rest: 45 }
        ],
        resistance: [
          { name: "Resistance Band Squats", sets: 3, reps: 15, rest: 45 },
          { name: "Band Rows", sets: 3, reps: 15, rest: 45 },
          { name: "Band Chest Press", sets: 3, reps: 15, rest: 45 },
          { name: "Band Pull Aparts", sets: 3, reps: 15, rest: 30 },
          { name: "Band Leg Press", sets: 3, reps: 15, rest: 45 }
        ]
      },
      arms: {
        none: [
          { name: "Push-ups", sets: 3, reps: 12, rest: 45 },
          { name: "Tricep Dips", sets: 3, reps: 15, rest: 45 },
          { name: "Plank to Push-up", sets: 3, reps: 10, rest: 45 },
          { name: "Arm Circles", sets: 3, reps: "30 seconds", rest: 30 }
        ],
        dumbbells: [
          { name: "Bicep Curls", sets: 3, reps: 12, rest: 45 },
          { name: "Tricep Extensions", sets: 3, reps: 12, rest: 45 },
          { name: "Hammer Curls", sets: 3, reps: 12, rest: 45 },
          { name: "Overhead Tricep Press", sets: 3, reps: 12, rest: 45 }
        ],
        resistance: [
          { name: "Band Bicep Curls", sets: 3, reps: 15, rest: 45 },
          { name: "Band Tricep Pushdowns", sets: 3, reps: 15, rest: 45 },
          { name: "Band Chest Press", sets: 3, reps: 15, rest: 45 },
          { name: "Band Rows", sets: 3, reps: 15, rest: 45 }
        ]
      },
      legs: {
        none: [
          { name: "Bodyweight Squats", sets: 4, reps: 15, rest: 45 },
          { name: "Lunges", sets: 3, reps: 12, rest: 45 },
          { name: "Glute Bridges", sets: 3, reps: 15, rest: 45 },
          { name: "Calf Raises", sets: 3, reps: 20, rest: 30 }
        ],
        dumbbells: [
          { name: "Goblet Squats", sets: 4, reps: 12, rest: 60 },
          { name: "Dumbbell Lunges", sets: 3, reps: 12, rest: 60 },
          { name: "Romanian Deadlifts", sets: 3, reps: 12, rest: 60 },
          { name: "Dumbbell Calf Raises", sets: 3, reps: 20, rest: 30 }
        ],
        resistance: [
          { name: "Band Squats", sets: 4, reps: 15, rest: 45 },
          { name: "Band Leg Press", sets: 3, reps: 15, rest: 45 },
          { name: "Band Glute Bridges", sets: 3, reps: 15, rest: 45 },
          { name: "Band Lateral Walks", sets: 3, reps: 15, rest: 30 }
        ]
      },
      core: {
        none: [
          { name: "Plank", sets: 3, reps: "30 seconds", rest: 30 },
          { name: "Russian Twists", sets: 3, reps: 20, rest: 30 },
          { name: "Leg Raises", sets: 3, reps: 15, rest: 30 },
          { name: "Mountain Climbers", sets: 3, reps: 30, rest: 30 },
          { name: "Bicycle Crunches", sets: 3, reps: 20, rest: 30 }
        ],
        dumbbells: [
          { name: "Weighted Russian Twists", sets: 3, reps: 15, rest: 30 },
          { name: "Dumbbell Side Bends", sets: 3, reps: 15, rest: 30 },
          { name: "Weighted Plank", sets: 3, reps: "30 seconds", rest: 30 },
          { name: "Dumbbell Leg Raises", sets: 3, reps: 15, rest: 30 }
        ],
        resistance: [
          { name: "Band Wood Chops", sets: 3, reps: 15, rest: 30 },
          { name: "Band Pallof Press", sets: 3, reps: 15, rest: 30 },
          { name: "Band Crunches", sets: 3, reps: 20, rest: 30 },
          { name: "Band Twists", sets: 3, reps: 20, rest: 30 }
        ]
      },
      chest: {
        none: [
          { name: "Push-ups", sets: 4, reps: 12, rest: 45 },
          { name: "Wide Grip Push-ups", sets: 3, reps: 10, rest: 45 },
          { name: "Decline Push-ups", sets: 3, reps: 10, rest: 45 },
          { name: "Incline Push-ups", sets: 3, reps: 10, rest: 45 }
        ],
        dumbbells: [
          { name: "Dumbbell Bench Press", sets: 4, reps: 10, rest: 60 },
          { name: "Dumbbell Flyes", sets: 3, reps: 12, rest: 45 },
          { name: "Incline Dumbbell Press", sets: 3, reps: 10, rest: 60 },
          { name: "Dumbbell Pullover", sets: 3, reps: 12, rest: 45 }
        ],
        resistance: [
          { name: "Band Chest Press", sets: 4, reps: 15, rest: 45 },
          { name: "Band Chest Flyes", sets: 3, reps: 15, rest: 45 },
          { name: "Band Crossovers", sets: 3, reps: 15, rest: 45 },
          { name: "Band Push-ups", sets: 3, reps: 12, rest: 45 }
        ]
      },
      back: {
        none: [
          { name: "Superman", sets: 3, reps: "30 seconds", rest: 30 },
          { name: "Bird Dog", sets: 3, reps: 12, rest: 30 },
          { name: "Reverse Snow Angels", sets: 3, reps: 12, rest: 30 },
          { name: "Prone Cobra", sets: 3, reps: "30 seconds", rest: 30 }
        ],
        dumbbells: [
          { name: "Bent-over Rows", sets: 4, reps: 10, rest: 60 },
          { name: "Single Arm Rows", sets: 3, reps: 12, rest: 45 },
          { name: "Renegade Rows", sets: 3, reps: 10, rest: 45 },
          { name: "Dumbbell Pullovers", sets: 3, reps: 12, rest: 45 }
        ],
        resistance: [
          { name: "Band Rows", sets: 4, reps: 15, rest: 45 },
          { name: "Band Pull-aparts", sets: 3, reps: 15, rest: 30 },
          { name: "Band Lat Pulldowns", sets: 3, reps: 15, rest: 45 },
          { name: "Band Face Pulls", sets: 3, reps: 15, rest: 30 }
        ]
      }
    };

    // Timer variables
    let timer;
    let timeLeft = 0;
    let currentExerciseIndex = 0;
    let currentWorkout = [];

    // DOM Elements
    const generateButton = document.getElementById('generate-button');
    const workoutDisplay = document.getElementById('workout-display');
    const currentExerciseElement = document.getElementById('current-exercise');
    const timerElement = document.getElementById('timer');
    const startButton = document.getElementById('start-button');
    const resetButton = document.getElementById('reset-button');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Hamburger menu functionality (same as recipe page)
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });

    // Generate workout
    generateButton.addEventListener('click', function() {
      const bodyPart = document.getElementById('body-part').value;
      const equipment = document.getElementById('equipment').value;
      
      if (workoutDatabase[bodyPart] && workoutDatabase[bodyPart][equipment]) {
        currentWorkout = workoutDatabase[bodyPart][equipment];
        displayWorkout(currentWorkout);
      } else {
        workoutDisplay.innerHTML = '<p>No workout available for this combination. Please try another.</p>';
      }
    });

    // Display workout
    function displayWorkout(workout) {
      let html = '<h3>Your Custom Workout</h3>';
      
      workout.forEach((exercise, index) => {
        html += `
          <div class="exercise-card">
            <h3>${exercise.name}</h3>
            <p><strong>Sets:</strong> ${exercise.sets}</p>
            <p><strong>Reps/Duration:</strong> ${exercise.reps}</p>
            <p><strong>Rest:</strong> ${exercise.rest} seconds</p>
          </div>
        `;
      });
      
      workoutDisplay.innerHTML = html;
    }

    // Start workout timer
    startButton.addEventListener('click', function() {
      if (currentWorkout.length === 0) {
        alert('Please generate a workout first!');
        return;
      }
      
      if (timer) {
        clearInterval(timer);
      }
      
      currentExerciseIndex = 0;
      startExercise(currentWorkout[currentExerciseIndex]);
    });

    // Reset timer
    resetButton.addEventListener('click', function() {
      if (timer) {
        clearInterval(timer);
      }
      
      timerElement.textContent = '00:00';
      currentExerciseElement.textContent = 'None';
      timeLeft = 0;
      currentExerciseIndex = 0;
    });

    // Start exercise
    function startExercise(exercise) {
      currentExerciseElement.textContent = exercise.name;
      
      // Start with work period
      timeLeft = typeof exercise.reps === 'string' ? 30 : 45; // Default to 45 seconds for work
      updateTimer();
      
      timer = setInterval(function() {
        timeLeft--;
        
        if (timeLeft <= 0) {
          clearInterval(timer);
          
          // Switch to rest period or next exercise
          if (timeLeft === 0) {
            // This was work period, now rest
            timeLeft = exercise.rest;
            currentExerciseElement.textContent = `Rest after ${exercise.name}`;
          } else {
            // Rest period ended, move to next exercise
            currentExerciseIndex++;
            
            if (currentExerciseIndex < currentWorkout.length) {
              startExercise(currentWorkout[currentExerciseIndex]);
            } else {
              // Workout completed
              timerElement.textContent = 'Workout Complete!';
              currentExerciseElement.textContent = 'Great job!';
            }
            return;
          }
        }
        
        updateTimer();
      }, 1000);
    }

    // Update timer display
    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Newsletter form
    document.getElementById('newsletterForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        document.getElementById('emailInput').value = '';
      }
    });