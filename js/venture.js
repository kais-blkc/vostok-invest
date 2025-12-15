/*==========================================================================
Advantages hover
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".invest-criteria__advantages");
  const items = document.querySelectorAll(".about__advantage");

  if (!container || !items.length) return;

  const hoverBg = document.createElement("div");
  hoverBg.className = "about__hover-bg";
  container.appendChild(hoverBg);

  // цвета закреплены за индексами
  const colors = ["#e3ecfb", "#b8e0cf", "#f7e9b3", "#ffdcd1", "#e5dcfd"];

  function getColorForItem(item) {
    if (!item) return;
    // если есть атрибут color взять его
    if (item.dataset.color) return item.dataset.color;

    const index = Array.from(items).indexOf(item);
    return colors[index % colors.length];
  }

  let mode = null;
  let scrollObserver = null;

  function activateFirst() {
    const first = items[0];
    if (!first) return;

    items.forEach((i) => i.classList.remove("active", "prev-hover"));

    first.classList.add("active");

    const rect = first.getBoundingClientRect();
    const parent = container.getBoundingClientRect();

    hoverBg.style.top = rect.top - parent.top + "px";
    hoverBg.style.height = rect.height + "px";
    hoverBg.style.opacity = 1;

    hoverBg.style.backgroundColor = getColorForItem(first);
  }

  // ---------------------------
  // DESKTOP MODE
  // ---------------------------
  function enableHoverMode() {
    if (mode === "hover") return;
    mode = "hover";

    if (scrollObserver) {
      scrollObserver.disconnect();
      scrollObserver = null;
    }

    items.forEach((item) => {
      item.removeEventListener("mouseenter", mouseEnterHandler);
    });
    items.forEach((item) => {
      item.addEventListener("mouseenter", mouseEnterHandler);
    });

    activateFirst();
  }

  function mouseEnterHandler(e) {
    if (mode !== "hover") return;

    const item = e.currentTarget;

    const rect = item.getBoundingClientRect();
    const parent = container.getBoundingClientRect();

    hoverBg.style.top = rect.top - parent.top + "px";
    hoverBg.style.height = rect.height + "px";
    hoverBg.style.opacity = 1;

    items.forEach((i) => i.classList.remove("active", "prev-hover"));
    item.classList.add("active");

    const prev = item.previousElementSibling;
    if (prev) prev.classList.add("prev-hover");

    hoverBg.style.backgroundColor = getColorForItem(item);
  }

  // ---------------------------
  // MOBILE MODE
  // ---------------------------
  function enableScrollMode() {
    if (mode === "scroll") return;

    mode = "scroll";

    items.forEach((item) => {
      item.removeEventListener("mouseenter", mouseEnterHandler);
    });

    items.forEach((item) => item.classList.remove("active", "prev-hover"));

    const linePercent = 0.6;

    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const item = entry.target;

          items.forEach((i) => i.classList.remove("active", "prev-hover"));
          item.classList.add("active");

          const prev = item.previousElementSibling;
          if (prev) prev.classList.add("prev-hover");

          const rect = item.getBoundingClientRect();
          const parent = container.getBoundingClientRect();

          hoverBg.style.top = rect.top - parent.top + "px";
          hoverBg.style.height = rect.height + "px";
          hoverBg.style.opacity = 1;
          hoverBg.style.backgroundColor = getColorForItem(item);
        });
      },
      {
        threshold: 0,
        rootMargin: `-${linePercent * 100}% 0px -${
          (1 - linePercent) * 100
        }% 0px`,
      }
    );

    items.forEach((item) => scrollObserver.observe(item));
    activateFirst();
  }

  function checkMode() {
    if (window.innerWidth >= 980) enableHoverMode();
    else enableScrollMode();
  }

  checkMode();
  window.addEventListener("resize", checkMode);
});

/*==========================================================================
Venture cases slider
============================================================================*/
const reviewsSlider = document.querySelector(".swiper-venture-cases");

if (reviewsSlider) {
  const reviewsSwiper = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    speed: 800,
    navigation: {
      nextEl: ".venture-cases__slide-next",
      prevEl: ".venture-cases__slide-prev",
    },
  });
}

/*==========================================================================
Input file 
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
  const inputFiles = document.querySelectorAll(".input-file-custom");

  if (inputFiles) {
    inputFiles.forEach((el) => {
      const input = el.querySelector("input[type=file]");
      const text = el.querySelector(".input-file-custom__text");

      input.addEventListener("change", () => {
        const fileName = Array.from(input.files)
          .map((file) => file.name)
          .join(", ");

        text.textContent = fileName;
      });
    });
  }
});

/*==========================================================================
Form validation
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form.validate-form");
  console.log("forms", forms);
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameField = form.querySelector('input[name="name"]');
      const phoneField = form.querySelector('input[name="phone"]');
      const emailField = form.querySelector('input[name="email"]');
      const checkboxs = form.querySelectorAll('input[type="checkbox"]');

      let isValid = true;

      form
        .querySelectorAll(".error-message")
        .forEach((i) => (i.textContent = ""));
      form
        .querySelectorAll("input")
        .forEach((i) => i.classList.remove("input-error"));

      // Проверка имени
      if (!nameField.value.trim()) {
        setError(nameField, "Укажите имя");
        isValid = false;
      }

      // Проверка телефона (минимум 5 цифр)
      const phoneDigits = phoneField.value.replace(/\D/g, "");
      if (phoneDigits.length < 10) {
        setError(phoneField, "Укажите корректный номер телефона");
        isValid = false;
      }

      // Проверка email
      const emailValue = emailField.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue) {
        setError(emailField, "Укажите email");
        isValid = false;
      } else if (!emailRegex.test(emailValue)) {
        setError(emailField, "Email указан неверно");
        isValid = false;
      }

      checkboxs.forEach((checkbox) => {
        if (!checkbox.checked) {
          setError(checkbox);
          isValid = false;
        }
      });

      if (isValid) {
        document.querySelector(".form-popup .form-popup__close").click();
        document.querySelector(".hidden-open-form-success").click();
      }
    });
  });

  function setError(input, message) {
    input.classList.add("input-error");
    if (!message) return;
    input.nextElementSibling.textContent = message;
  }
});

/*==========================================================================
Venture cases slider
============================================================================*/
document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll(".autoplay-video");

  videos.forEach(function (video) {
    if (!video || video.playing) return;
    video.muted = true;
    video.controls = false;
    var promise = video.play();

    if (promise !== undefined) {
      promise.then(function () {}).catch(function (error) {});
    }
  });
});
