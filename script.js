let button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  event.preventDefault();

  // Initialize response text
  let responseText = "";

  // Get selected values from each question
  const stressLevel = document.querySelector(
    'input[name="stress_level"]:checked'
  );
  const currentMood = document.querySelector(
    'input[name="current_mood"]:checked'
  );
  const manageEmotions = document.querySelector(
    'input[name="manage_emotions"]:checked'
  );

  // Generate response based on the selected stress level
  if (stressLevel) {
    switch (stressLevel.value) {
      case "Rarely":
        responseText +=
          "You rarely feel overwhelmed by stress. That's great! Keep maintaining that balance.<br>";
        break;
      case "Sometimes":
        responseText +=
          "You sometimes feel overwhelmed by stress. It might be helpful to practice stress-relief techniques.<br>";
        break;
      case "Often":
        responseText +=
          "Feeling overwhelmed by stress often can be challenging. Consider finding healthy coping mechanisms.<br>";
        break;
      case "Almost always":
        responseText +=
          "It seems like you almost always feel overwhelmed. It's important to seek support if needed.<br>";
        break;
    }
  }

  // Generate response based on the current mood
  if (currentMood) {
    switch (currentMood.value) {
      case "Very positive and content":
        responseText +=
          "You're feeling very positive and content! Keep that positive energy flowing!<br>";
        break;
      case "Generally okay, with some bad days":
        responseText +=
          "It's good that you feel generally okay, even with some bad days. Acknowledge those tough times!<br>";
        break;
      case "Frequently low or negative":
        responseText +=
          "If you’re frequently feeling low or negative, consider talking to someone about it.<br>";
        break;
      case "Very low or hopeless":
        responseText +=
          "Feeling very low or hopeless is tough. Please reach out for help if you need it.<br>";
        break;
    }
  }

  // Generate response based on how well they manage emotions
  if (manageEmotions) {
    switch (manageEmotions.value) {
      case "Very well, I remain calm and balanced":
        responseText +=
          "You manage your emotions well. That's commendable!<br>";
        break;
      case "I try to manage, but it’s difficult sometimes":
        responseText +=
          "It's okay to find it difficult sometimes; managing emotions is a skill that can improve.<br>";
        break;
      case "I struggle to keep my emotions under control":
        responseText +=
          "Struggling with emotional control can be challenging. Consider exploring strategies to help.<br>";
        break;
      case "I feel completely overwhelmed by my emotions":
        responseText +=
          "Feeling completely overwhelmed is hard. Remember, it's okay to ask for help.<br>";
        break;
    }
  }

  // Display the response in the information div
  const infoDiv = document.querySelector(".information");

  infoDiv.innerHTML =
    responseText || "Please answer all questions before submitting.";

  // Change the color of text in infodev
  infoDiv.style.color = "rgb(4, 83, 70)";
  infoDiv.style.margin = "10px";

  // Set a timeout to hide the response after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    infoDiv.innerHTML = ""; // Clear the response
  }, 5000);
});