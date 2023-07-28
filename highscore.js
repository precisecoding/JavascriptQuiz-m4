let scoresArray = JSON.parse(localStorage.getItem("scoresArray")) || []
let userValues = document.getElementById("recorded-high-scores")
for (let i = 0; i < scoresArray.length; i++) {
   userValues.innerHTML = userValues.innerHTML +`
   <tr>
   <td>${scoresArray[i].name}</td>
   <td>${scoresArray[i].score}</td>
   </tr>`
}