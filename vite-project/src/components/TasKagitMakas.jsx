    import  { useState } from "react";

    function Game() {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [roundResult, setRoundResult] = useState("");

    const options = ["taş", "kağıt", "makas"];

    const computerPlay = () => {
        return options[Math.floor(Math.random() * 3)];
    };

    const playRound = (playerSelection) => {
        const computerSelection = computerPlay();
        if (playerSelection === computerSelection) {
        setRoundResult("Bərabərə! Hər ikisi də " + playerSelection + " seçdi.");
        } else if (
        (playerSelection === "taş" && computerSelection === "makas") ||
        (playerSelection === "kağıt" && computerSelection === "taş") ||
        (playerSelection === "makas" && computerSelection === "kağıt")
        ) {
        setRoundResult(
            "Tebrikler! Kazandın! " + playerSelection + " " + computerSelection + " 'ı məğlub etdi."
        );
        setPlayerScore(playerScore + 1);
        } else {
        setRoundResult(
            "Məğlub oldun! " + computerSelection + " " + playerSelection + " a qalib gəldi."
        );
        setComputerScore(computerScore + 1);
        }
    };

    const handlePlay = (selection) => {
        playRound(selection);
    };

    return (
        <div>
        <h1>Tas Kağıt Makas</h1>
        <p>Seçiminizi edin: Taş, Kağıt veya Makas</p>
        <div>
            <button onClick={() => handlePlay("taş")}>Taş</button>
            <button onClick={() => handlePlay("kağıt")}>Kağıt</button>
            <button onClick={() => handlePlay("makas")}>Makas</button>
        </div>
        <h2>nəticə: {roundResult}</h2>
        <h2>Oyuncu seçimi: {playerScore}</h2>
        <h2>Kompyuter seçimi: {computerScore}</h2>
        </div>
    );
    }

    export default Game;

