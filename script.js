document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input");
    searchInput.addEventListener("keyup", filterStocks);
  
    function filterStocks() {
      const filter = searchInput.value.toUpperCase();
      const tables = document.querySelectorAll(".stock-table tbody");
  
      tables.forEach(table => {
        const rows = table.querySelectorAll("tr");
        rows.forEach(row => {
          const stockName = row.querySelector("td:first-child").textContent || "";
          if (stockName.toUpperCase().indexOf(filter) > -1) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        });
      });
    }
  
    function updateStockPrices() {
      const priceCells = document.querySelectorAll(".stock-table tbody tr td:nth-child(2)");
      const statusCells = document.querySelectorAll(".stock-table tbody tr td:nth-child(3)");
  
      priceCells.forEach((cell, index) => {
        const randomPriceChange = (Math.random() * 20 - 5).toFixed(2); 
        let currentPrice = parseFloat(cell.textContent.replace(/[^0-9.]/g, ""));
        currentPrice = Math.max(1, currentPrice + parseFloat(randomPriceChange));
        cell.textContent = `₹${currentPrice.toFixed(2)}`;
  
        const status = randomPriceChange >= 0 ? "↑" : "↓";
        statusCells[index].innerHTML = `<span class="${status === '↑' ? 'green' : 'red'}">${status}</span>`;
      });
    }
  
    setInterval(updateStockPrices, 5000); 
  
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");
    menuToggle.addEventListener("change", () => {
      navbar.classList.toggle("open", menuToggle.checked);
    });
  }
);

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute('href'); 
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 50, 
              behavior: 'smooth' 
          });
      }
  });
});

  
