// script.js
function generateTable() {
    const number = parseInt(document.getElementById("numberInput").value);
    const range = parseInt(document.getElementById("rangeInput").value);
    const loopType = document.getElementById("loopType").value;
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
  
    if (isNaN(number) || isNaN(range)) {
      resultDiv.innerHTML = "❌ Please enter valid inputs.";
      return;
    }
  
    let output = "";
  
    if (loopType === "for") {
      for (let i = 1; i <= range; i++) {
        output += `${number} × ${i} = ${number * i}\n`;
      }
    } else if (loopType === "while") {
      let i = 1;
      while (i <= range) {
        output += `${number} × ${i} = ${number * i}\n`;
        i++;
      }
    } else if (loopType === "do-while") {
      let i = 1;
      do {
        output += `${number} × ${i} = ${number * i}\n`;
        i++;
      } while (i <= range);
    }
  
    resultDiv.innerText = output;
  
    if (speak) {
      const utterance = new SpeechSynthesisUtterance(output.replace(/\n/g, ". "));
      speechSynthesis.speak(utterance);
    }
  }
  
  function copyToClipboard() {
    const text = document.getElementById("result").innerText;
    navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
  }
  
  function downloadPDF() {
    const content = document.getElementById("result").innerText;
    const blob = new Blob([content], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "multiplication_table.pdf";
    link.click();
  }
  
  // Dark mode toggle
  const darkToggle = document.getElementById("darkModeToggle");
  darkToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", darkToggle.checked);
  });
  