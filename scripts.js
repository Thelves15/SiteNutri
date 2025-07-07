
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question")
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const faqItem = this.parentElement
        const isActive = faqItem.classList.contains("active")

        document.querySelectorAll(".faq-item").forEach((item) => {
          item.classList.remove("active")
        })
  
        
        if (!isActive) {
          faqItem.classList.add("active")
        }
      })
    })
  })
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {''
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  
  
  document.querySelectorAll(".cta-button").forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.02)"
    })
  
    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
  
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)
  
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".service-card, .testimonial-card")
  
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  })
  
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log("Link do WhatsApp clicado")
    })
  })
  