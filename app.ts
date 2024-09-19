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
const tablePlayer:HTMLTableElement = document.querySelector("table")!;

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
      } catch (err) {
    console.log(err);
  }
};

const createObg = (): Player => {
 return {
    position:selectPlayer.value,
    twoPercent: + inputPlayer2.value,
    threePercent: + inputPlayer3.value,
    points: + inputPlayerPoints.value,}
};

btnSearch.addEventListener ("click" , (e:Event)=> getPlayer())

