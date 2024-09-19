// alert("glad to see you")

interface Player {
  position: string;
  twoPercent: number;
  threePercent: number;
  points: number;
}

const baseURLforPlayer = "https://nbaserver-q21u.onrender.com/api/filter";
const selectPlayer: HTMLSelectElement = document.querySelector("select")!;
const inputPlayerPoints: HTMLInputElement = document.querySelector(".points")!;
const inputPlayer2: HTMLInputElement = document.querySelector(".two")!;
const inputPlayer3: HTMLInputElement = document.querySelector(".three")!;
const btnSearch: HTMLInputElement = document.querySelector(".btnSearch")!;
const tablePlayer: HTMLTableElement = document.querySelector("table")!;

let Player: Player[] = [];
const getPlayer = async (): Promise<void> => {
  try {
    console.log(createObg());

    const res: Response = await fetch(baseURLforPlayer, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createObg()),
    });
    Player = await res.json();
    console.log(Player);
    for (const p of Player){
        createRow(p)
    }
  } catch (err) {
    console.log(err);
  }
};

const createObg = (): Player => {
  return {
    position: selectPlayer.value,
    twoPercent: +inputPlayer2.value,
    threePercent: +inputPlayer3.value,
    points: +inputPlayerPoints.value,
  };
};

btnSearch.addEventListener("click", (e: Event) => getPlayer());

const createRow = (player:Player): HTMLElement => {
  const tr: HTMLElement = document.createElement("tr");
  const thPlayer: HTMLElement = document.createElement("th");
  const pPlayer: HTMLParagraphElement = document.createElement("p");
  const thPosition: HTMLElement = document.createElement("th");
  const pPosition: HTMLParagraphElement = document.createElement("p");
  const thPoints: HTMLElement = document.createElement("th");
  const pPoints: HTMLParagraphElement = document.createElement("p");
  const thPg: HTMLElement = document.createElement("th");
  const pPg: HTMLParagraphElement = document.createElement("p");
  const thP3: HTMLElement = document.createElement("th");
  const pP3: HTMLParagraphElement = document.createElement("p");
  const thAction: HTMLElement = document.createElement("th");
  const btn: HTMLElement = document.createElement("btn");
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
