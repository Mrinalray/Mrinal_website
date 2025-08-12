// Phrase rotation code (for the note animation)
    const phrases = [
      "বাংলা",
      "हिंदी",
      "English",
      "தமிழ்",
      "ગુજરાતી",
      "ਪੰਜਾਬੀ",
    ];

    const noteText = document.getElementById("note-animation");
    let index = 0;

    setInterval(() => {
      noteText.textContent = phrases[index] + " • ";
      index = (index + 1) % phrases.length;
    }, 1500);