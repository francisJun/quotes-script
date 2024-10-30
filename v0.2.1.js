(function () {
  window.addToQuote = function (product) {
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

    const closeIframe = () => {
      document.body.removeChild(iframe);
    };
    iframe.addEventListener("load", () => {
      iframe.style.height = `${window.innerHeight}px`;
    });
    iframe.addEventListener("click", closeIframe); // Optional way to close iframe

    document.body.appendChild(iframe);
  };

  window.renderQuoteButton = function (product, buttonClassName) {
    const button = document.createElement("button");
    button.textContent = "Add to Quote";
    button.className = buttonClassName;
    button.addEventListener("click", () => window.addToQuote(product));

    const productContainer = document.querySelector(".product-container");
    if (productContainer) {
      productContainer.appendChild(button);
    } else {
      document.body.appendChild(button);
    }
  };
})();
