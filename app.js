"use strict";
// alert("glad to see you")
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
let Player = [];
const getPlayer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(createObg());
        const res = yield fetch(baseURLforPlayer, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createObg()),
        });
        Player = yield res.json();
        console.log(Player);
    }
    catch (err) {
        console.log(err);
    }
});
const createObg = () => {
    return {
        position: selectPlayer.value,
        twoPercent: +inputPlayer2.value,
        threePercent: +inputPlayer3.value,
        points: +inputPlayerPoints.value,
    };
};
btnSearch.addEventListener("click", (e) => getPlayer());
const createRow = () => {
    const tr = document.createElement('tr');
    const thPlayer = document.createElement('th');
    const pPlayer = document.createElement('p');
    const thPosition = document.createElement('th');
    const pPosition = document.createElement('p');
    const thPoints = document.createElement('th');
    const pPoints = document.createElement('p');
    const thPg = document.createElement('th');
    const pPg = document.createElement('p');
    const thP3 = document.createElement('th');
    const pP3 = document.createElement('p');
    const thAction = document.createElement('th');
    const btn = document.createElement('btn');
    tablePlayer.appendChild(tr);
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
    return tablePlayer;
};
createRow();
