interface Player {
  playerName: string,
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
const tbody: HTMLElement = document.querySelector("tbody")!;

let Player: Player[] = [];
const getPlayer = async (): Promise<void> => {
  try {
    createObg();

    const res: Response = await fetch(baseURLforPlayer, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createObg()),
    });
    Player = await res.json();
    tbody.innerHTML = ""
    for (const p of Player){
        createRow(p)
    }
  } catch (err) {
    alert(err)
  }
};

const createObg = (): Player => {
  return {
    playerName: baseURLforPlayer,
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
  pPlayer.textContent =player.playerName.toString()
  const thPosition: HTMLElement = document.createElement("th");
  thPosition.textContent = player.position
  const pPosition: HTMLParagraphElement = document.createElement("p");
  const thPoints: HTMLElement = document.createElement("th");
  const pPoints: HTMLParagraphElement = document.createElement("p");
  pPoints.textContent = player.points.toString()
  const thPg: HTMLElement = document.createElement("th");
  const pPg: HTMLParagraphElement = document.createElement("p");
  pPg.textContent = player.twoPercent.toString()
  const thP3: HTMLElement = document.createElement("th");
  const pP3: HTMLParagraphElement = document.createElement("p");
  pP3.textContent = player.threePercent.toString()
  const thAction: HTMLElement = document.createElement("th");
  const btn: HTMLElement = document.createElement("button");
  btn.classList.add("btnAdd")
  btn.textContent = `Add ${player.playerName} to Current Team`

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

  btn.addEventListener('click', () => addPlayer(player))
  return tablePlayer;
};

const addPlayer = (player: Player): void => {
  const positionInTeam: HTMLDivElement = document.querySelector(`.${player.position}`)!
  const pName: HTMLParagraphElement = document.createElement('p')
  pName.textContent = player.playerName!
  const twop: HTMLParagraphElement = document.createElement('p')
  twop.textContent = 'Tow Precents : ' + player.twoPercent.toString()
  const threep: HTMLParagraphElement = document.createElement('p')
  threep.textContent = 'Three Precents : ' + player.threePercent.toString()
  const points: HTMLParagraphElement = document.createElement('p')
  points.textContent = 'Points : ' + player.points.toString()

  positionInTeam.innerHTML = ''
  positionInTeam.appendChild(pName)
  positionInTeam.appendChild(twop)
  positionInTeam.appendChild(threep)
  positionInTeam.appendChild(points)
}

