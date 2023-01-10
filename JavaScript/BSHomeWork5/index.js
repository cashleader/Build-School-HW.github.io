window.onload = function () {
    let container = document.querySelector(".container");
    let cellCount = 9;
    let cellSpace = 5;
    let rowCount = Math.sqrt(cellCount);
    let cellWidth = container.offsetHeight / rowCount - cellSpace * 2;

    let positionRecords = [];
    for (let i = 1; i < cellCount; i++) {
        positionRecords.push(i);
    }

    positionRecords.push("whiteCell");

    function getPosition(index) {
        let left = (index % rowCount) * (cellWidth + cellSpace * 2);
        let top = Math.floor(index / rowCount) * (cellWidth + cellSpace * 2);
        return { left, top };
    }

    function renderRecord(recordArr) {
        for (let i = 0; i < recordArr.length; i++) {
            if (recordArr[i] === "whiteCell") continue;
            let cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.innerText = recordArr[i];
            cellDiv.style.lineHeight = cellDiv.style.width = cellDiv.style.height =
                cellWidth + "px";
            cellDiv.style.fontSize = cellWidth * 0.618 + "px";
            cellDiv.style.margin = cellSpace + "px";
            let position = getPosition(i);
            cellDiv.style.top = position.top + "px";
            cellDiv.style.left = position.left + "px";
            cellDiv.onclick = function () {
                move(this);
            };
            container.appendChild(cellDiv);
        }
    }

    function canCellMove(index) {
        let whiteCellIndex = positionRecords.indexOf("whiteCell");
        let x = index % rowCount;
        let y = Math.floor(index / rowCount);
        let whiteX = whiteCellIndex % rowCount;
        let whiteY = Math.floor(whiteCellIndex / rowCount);
        return (
            (x == whiteX && (y + 1 == whiteY || y - 1 == whiteY)) ||
            (y == whiteY && (x + 1 == whiteX || x - 1 == whiteX))
        );
    }

    function move(cell) {
        let index = positionRecords.indexOf(+cell.innerText);
        if (canCellMove(index)) {
            let whiteCellIndex = positionRecords.indexOf("whiteCell");
            let desPositon = getPosition(whiteCellIndex);
            cell.style.top = desPositon.top + "px";
            cell.style.left = desPositon.left + "px";
            positionRecords[index] = "whiteCell";
            positionRecords[whiteCellIndex] = +cell.innerText;
        }
    }


    function startGame() {
        for (let j = 0; j < Math.round(Math.random() * 100 + 100); j++) {
            for (let i = 0; i < container.children.length; i++) {
                container.children[i].onclick();
            }
        }
    }

    renderRecord(positionRecords);

    let btnStart = document.getElementById("btnStart");
    btnStart.onclick = startGame;
};