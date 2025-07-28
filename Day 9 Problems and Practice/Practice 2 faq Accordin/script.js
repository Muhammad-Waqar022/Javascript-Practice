const questions=document.querySelectorAll(".question");

questions.forEach(question =>{
    question.addEventListener('click',()=>{
        // Get the associated answer
        const answer = question.nextElementSibling;

        // Hide all answers
        document.querySelectorAll('.answer').forEach(ans => {
          if (ans !== answer) {
            ans.classList.remove('active');
          }
        });

        // Toggle the clicked one
        answer.classList.toggle('active');
      });
    });
