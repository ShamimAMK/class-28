"use strict";
// //Intersection observation
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.2,
// };
// // const callback = (entries) => {
// //   console.log(entries[0])
// // };
// // const callback = (entries) => {
// //   const entry = entries[0];

// //   if (entry.isIntersecting) {
// //     console.log("Intersecting");
// //   } else {
// //     console.log("Not Intersecting");
// //   }
// // };

// const callback = (entries) => {
//   const entry = entries[0];

//   if (entry.isIntersecting) {
//     targetEL.textContent = "I am entering into the town";
//   } else {
//     targetEL.textContent = "I am entering into the town";
//   }
// };

// const observer = new IntersectionObserver(callback, options);

// observer.observe(targetEL);

const sectionThree = document.querySelector(".section_three");
const header = document.querySelector(".header");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  }
);

observer.observe(sectionThree);
