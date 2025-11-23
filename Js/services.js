 const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector(".faq-icon");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Close all others (accordion behavior)
      faqButtons.forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
        btn.querySelector(".faq-icon").textContent = "+";
        const ans = btn.nextElementSibling;
        if (!ans.classList.contains("hidden")) {
          ans.animate([{ height: ans.scrollHeight + "px" }, { height: 0 }], {
            duration: 300,
            easing: "ease-in-out",
          }).onfinish = () => ans.classList.add("hidden");
        }
      });

      if (!isOpen) {
        // Open current
        button.setAttribute("aria-expanded", "true");
        icon.textContent = "−";
        answer.classList.remove("hidden");
        answer.animate([{ height: 0 }, { height: answer.scrollHeight + "px" }], {
          duration: 300,
          easing: "ease-in-out",
        });
      }
    });
  });