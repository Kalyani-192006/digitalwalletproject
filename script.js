let children = [];
let history = [];

function addChild() {
  let name = document.getElementById("childName").value;
  if (!name) return;

  children.push({ name, balance: 0 });

  let option = document.createElement("option");
  option.text = name;
  document.getElementById("childSelect").add(option);

  alert("Child added successfully!");
}

function addFunds() {
  let index = document.getElementById("childSelect").selectedIndex;
  let amount = document.getElementById("amount").value;

  if (index < 0 || amount <= 0) return;

  history.push(`₹${amount} added to ${children[index].name}`);
  updateHistory();
}

function updateHistory() {
  let ul = document.getElementById("history");
  ul.innerHTML = "";
  history.forEach(h => {
    let li = document.createElement("li");
    li.textContent = h;
    ul.appendChild(li);
  });
}
