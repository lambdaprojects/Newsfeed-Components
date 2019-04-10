// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(oldArticle) {
    // assign this.domElement to the passed in domElement
    this.article = oldArticle;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.article.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = "Click to Expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.expandButton.innerHTML === "Click to Expand") {
      this.expandButton.innerHTML = "Click to Close";
    } else {
      this.expandButton.innerHTML = "Click to Expand";
    }
    this.article.classList.toggle("article-open");

    //this.expandButton.classList.toggle("close");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

articles.forEach(oldArticle => {
  return new Article(oldArticle);
});
