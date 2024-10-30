function addToQuote(product) {
  console.log("The call here!!!");
  let quote = JSON.parse(sessionStorage.getItem("unific-quote")) || [];
  quote.push(product);
  sessionStorage.setItem("unific-quote", JSON.stringify(quote));

  const iframe = document.createElement("iframe");
  iframe.src = `https://unific.com/quote?product=${encodeURIComponent(
    JSON.stringify(product)
  )}`;
  iframe.style.position = "fixed";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.zIndex = "9999";
  iframe.addEventListener("load", () => {
    iframe.style.height = `${window.innerHeight}px`;
  });
  document.body.appendChild(iframe);
}

function renderQuoteButton(product) {
  const button = document.createElement("button");
  button.textContent = "Add to Quote";
  button.className = "btn btn-primary px-4 py-2";
  button.addEventListener("click", () => addToQuote(product));

  const productContainer = document.querySelector(".product-container");
  if (productContainer) {
    productContainer.appendChild(button);
  } else {
    document.body.appendChild(button);
  }
}

const product = {
  id: "mens-winter-jacket",
  name: "Men's winter jacket",
  price: 99
};

renderQuoteButton(product);
