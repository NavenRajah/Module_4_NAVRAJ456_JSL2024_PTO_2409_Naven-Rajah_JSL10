document.addEventListener("DOMContentLoaded", () => {
  // 🔧 Room 1: Correct the button ID and result element ID.
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // Use the correct element ID "room1Result"
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  // 🔧 Room 2: Fix the sets and use the correct function call.
  document.getElementById("solveRoom2").addEventListener("click", () => {
    // Add the missing 'async' concept to the JS concepts set.
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // Correct the function call to compare jsConcepts with reactConcepts.
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // 🔧 Room 3: Ensure asynchronous operations are handled correctly.
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then(async (directions) => {
        const message = await navigateLabyrinth(directions);
        // Use textContent to display the final message.
        document.getElementById("room3Result").textContent = message;
      });
  });
});

function findMostRecentBook(books) {
  // 🔧 Fix: Compare dates correctly to return the most recent book.
  return books.reduce((mostRecent, book) =>
    new Date(book.published) > new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

function findIntersection(setA, setB) {
  // 🔧 Fix: Correctly determine the intersection of two sets.
  const intersection = new Set();
  for (let item of setA) {
    if (setB.has(item)) {
      intersection.add(item);
    }
  }
  return intersection;
}

async function navigateLabyrinth(directions) {
  // 🔧 Fix: Add await to the Promise to simulate a delay.
  for (let direction of directions) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
