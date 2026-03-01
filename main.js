function generateAll() {
    const result = document.getElementById("result");
    result.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const set = new Set();
        while (set.size < 6) {
            set.add(Math.floor(Math.random() * 45) + 1);
        }

        const arr = [...set].sort((a, b) => a - b);
        const main = arr.slice(0, 5);
        const bonus = arr[5];

        const setDiv = document.createElement("div");
        setDiv.className = "set";

        const title = document.createElement("div");
        title.className = "set-title";
        title.textContent = `세트 ${i}`;
        setDiv.appendChild(title);

        main.forEach(num => setDiv.appendChild(createBall(num, false)));
        setDiv.appendChild(createBall(bonus, true));

        result.appendChild(setDiv);
    }
}

function createBall(num, isBonus) {
    const span = document.createElement("span");
    span.className = "ball " + colorClass(num);
    if (isBonus) span.classList.add("bonus");
    span.textContent = num;
    return span;
}

function colorClass(num) {
    if (num <= 10) return "n1";
    if (num <= 20) return "n2";
    if (num <= 30) return "n3";
    if (num <= 40) return "n4";
    return "n5";
}