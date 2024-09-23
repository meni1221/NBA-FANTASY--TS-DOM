"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseURLforPlayer = "https://nbaserver-q21u.onrender.com/api/filter";
const selectPlayer = document.querySelector("select");
const inputPlayerPoints = document.querySelector(".points");
const inputPlayer2 = document.querySelector(".two");
const inputPlayer3 = document.querySelector(".three");
const btnSearch = document.querySelector(".btnSearch");
const tablePlayer = document.querySelector("table");
const tbody = document.querySelector("tbody");
let Player = [];
const getPlayer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        createObg();
        const res = yield fetch(baseURLforPlayer, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createObg()),
        });
        Player = yield res.json();
        tbody.innerHTML = "";
        for (const p of Player) {
            createRow(p);
        }
    }
    catch (err) {
        alert(err);
    }
});
const createObg = () => {
    return {
        playerName: baseURLforPlayer,
        position: selectPlayer.value,
        twoPercent: +inputPlayer2.value,
        threePercent: +inputPlayer3.value,
        points: +inputPlayerPoints.value,
    };
};
btnSearch.addEventListener("click", (e) => getPlayer());
const createRow = (player) => {
    const tr = document.createElement("tr");
    const thPlayer = document.createElement("th");
    const pPlayer = document.createElement("p");
    pPlayer.textContent = player.playerName.toString();
    const thPosition = document.createElement("th");
    thPosition.textContent = player.position;
    const pPosition = document.createElement("p");
    const thPoints = document.createElement("th");
    const pPoints = document.createElement("p");
    pPoints.textContent = player.points.toString();
    const thPg = document.createElement("th");
    const pPg = document.createElement("p");
    pPg.textContent = player.twoPercent.toString();
    const thP3 = document.createElement("th");
    const pP3 = document.createElement("p");
    pP3.textContent = player.threePercent.toString();
    const thAction = document.createElement("th");
    const btn = document.createElement("button");
    btn.classList.add("btnAdd");
    btn.textContent = `Add ${player.playerName} to Current Team`;
    tbody.appendChild(tr);
    tr.appendChild(thPlayer);
    thPlayer.appendChild(pPlayer);
    tr.appendChild(thPosition);
    thPosition.appendChild(pPosition);
    tr.appendChild(thPoints);
    thPoints.appendChild(pPoints);
    tr.appendChild(thPg);
    thPg.appendChild(pPg);
    tr.appendChild(thP3);
    thP3.appendChild(pP3);
    tr.appendChild(thAction);
    thAction.appendChild(btn);
    btn.addEventListener('click', () => addPlayer(player));
    return tablePlayer;
};
const addPlayer = (player) => {
    const positionInTeam = document.querySelector(`.${player.position}`);
    const pName = document.createElement('p');
    pName.textContent = player.playerName;
    const twop = document.createElement('p');
    twop.textContent = 'Tow Precents : ' + player.twoPercent.toString();
    const threep = document.createElement('p');
    threep.textContent = 'Three Precents : ' + player.threePercent.toString();
    const points = document.createElement('p');
    points.textContent = 'Points : ' + player.points.toString();
    positionInTeam.innerHTML = '';
    positionInTeam.appendChild(pName);
    positionInTeam.appendChild(twop);
    positionInTeam.appendChild(threep);
    positionInTeam.appendChild(points);
};
