// Hamburger menu functionality (same as recipe page)
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

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

    // Calculator functionality
    document.getElementById('calculatorForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const age = parseInt(document.getElementById('age').value);
      const gender = document.getElementById('gender').value;
      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);
      const activity = parseFloat(document.getElementById('activity').value);

      // Validate inputs
      if (!age || !gender || !height || !weight || !activity) {
        alert("Please fill in all fields");
        return;
      }

      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      const tdee = bmr * activity;
      const carbs = (tdee * 0.5) / 4;
      const protein = (tdee * 0.2) / 4;
      const fat = (tdee * 0.3) / 9;

      document.getElementById('bmr').textContent = Math.round(bmr);
      document.getElementById('tdee').textContent = Math.round(tdee);
      document.getElementById('carbs').textContent = Math.round(carbs);
      document.getElementById('protein').textContent = Math.round(protein);
      document.getElementById('fat').textContent = Math.round(fat);

      document.getElementById('carbsBar').style.width = '50%';
      document.getElementById('proteinBar').style.width = '20%';
      document.getElementById('fatBar').style.width = '30%';

      document.getElementById('results').style.display = 'block';
      
      // Scroll to results
      document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    });

    // Newsletter form
    document.getElementById('newsletterForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        document.getElementById('emailInput').value = '';
      }
    });