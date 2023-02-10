import { FunctionComponent, useEffect, useState } from "react";
import Layout from "../src/components/layout";
import style from "../src/components/eighth/block.module.css";

interface EighthProps{}

const EighthExperiment:FunctionComponent<EighthProps> = () => {
    const [previousStatus, setPreviousStatus] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [player,setPlayer] = useState<boolean>(true);
    const xO = player ? "X" : "O";
    const [winner,setWinner] = useState<string>("N/A")

    // const [ innerArray, setInnerArray ] = useState({
    //     mark: false,

    // });

    // console.log("pState",previousStatus);

    const Square = ({value,click}) => {
        // const style = value ? `squares ${value}` : `squares`;
        return (
            <button className="inline-block p-2 bg-black m-1 text-white w-8 h-10 align-top" onClick={click} value={value}>
                {value}
            </button>
        );
    };

    const handleClick = (i:number) => {
        //create a new array with the new elements
        const previousPoint = previousStatus.slice(0,stepNumber+1);
        const current = previousPoint[stepNumber];

        //Determine is the game ended or not
        if(winner == "N/A"){
            //Prevent player to insert an occupied array.
            if(current[i] === null){
                console.log('empty');
                current[i] = xO;
                setPlayer(!player);
                calculateWinner(current);
                console.log(calculateWinner(current));
            }else{
                console.log('occupied');
            }
        }
    }

    const calculateWinner = (array) => {
        //Winning condition of TicTacToe
        const winnerArray = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0; i < winnerArray.length; i++ ){
            const [a,b,c] = winnerArray[i];

            if(array[a] && array[a] == array[b] && array[a] == array[c]){
                setWinner(array[a]);
            }
        }
        return null;
    }

    const Board = ({squares,boardClick}) => {
        return(
            <div className="board">
                {squares.map((data:number,i:number) => {
                    return(
                        <Square value={data} key={i} click={()=> boardClick(i)}/>  
                    )
                })}
            </div>
        )
    }
    
    return(
        <Layout title="Eighth">
            <h1>Eighth Experiment (Tic Tac Toe)</h1>

            <p>Player : {player ? "1" : "2"}</p>
            
            <div className="w-32">
                <Board squares={previousStatus[stepNumber]} boardClick={handleClick}/>
                {winner == 'X' ? "Winner is " + winner : winner == 'O' ? "Winner is " + winner : "N/A"}
            </div>
        </Layout>
    )
};

export default EighthExperiment;
