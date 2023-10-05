document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to "questionHeadline" and "faqArrow" elements
    var questionHeadlines = document.querySelectorAll('.questionHeadline');
    var faqArrows = document.querySelectorAll('.faqArrow');
  
    questionHeadlines.forEach(function (headline, index) {
      headline.addEventListener('click', function () {
        toggleAnswer(index);
      });
    });
  
    faqArrows.forEach(function (arrow, index) {
      arrow.addEventListener('click', function () {
        toggleAnswer(index);
      });
    });
  
    // Function to toggle the display of the corresponding "questionAnswer" element and rotate the arrow
    function toggleAnswer(index) {
      var questionAnswers = document.querySelectorAll('.questionAnswer');
      var questionAnswer = questionAnswers[index];
      var arrow = faqArrows[index];
  
      // Toggle the "open" class to smoothly transition and rotate the arrow
      questionAnswer.classList.toggle('open');
  
      // Rotate the arrow by adding/removing the "open" class
      arrow.classList.toggle('open');
  
      // Determine the max-height value based on the "open" class
      if (questionAnswer.classList.contains('open')) {
        questionAnswer.style.maxHeight = questionAnswer.scrollHeight + 'px';
      } else {
        questionAnswer.style.maxHeight = null;
      }
    }
  });
  