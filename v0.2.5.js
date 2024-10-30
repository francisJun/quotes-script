(function () {
  window.addToQuote = function (product) {
    let quote = JSON.parse(sessionStorage.getItem("unific-quote")) || [];
    quote.push(product);
    sessionStorage.setItem("unific-quote", JSON.stringify(quote));

    const iframe = document.createElement("iframe");
    iframe.src = `http://localhost:3000/quote?product=${encodeURIComponent(
      JSON.stringify(product)
    )}`;
    iframe.style.position = "fixed";
    iframe.style.top = "50%";
    iframe.style.left = "50%";
    iframe.style.width = "50%";
    iframe.style.height = "50%";
    iframe.style.zIndex = "9999";
    iframe.style.transform = "translate(-50%, -50%)";

    // Create a close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.style.position = "fixed";
    closeButton.style.top = "calc(50% - 25px)"; // Adjust to position the button at the top of the iframe
    closeButton.style.left = "calc(50% + 25%)"; // Adjust to position the button at the right edge of the iframe
    closeButton.style.zIndex = "10000"; // Ensure the button is above the iframe
    closeButton.style.transform = "translate(-50%, -50%)";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#f00";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";

    // Function to close the iframe
    const closeIframe = () => {
      document.body.removeChild(iframe);
      document.body.removeChild(closeButton);
    };

    // Add event listener to the close button
    closeButton.addEventListener("click", closeIframe);

    // Append the iframe and close button to the document body
    document.body.appendChild(iframe);
    document.body.appendChild(closeButton);
  };
})();
