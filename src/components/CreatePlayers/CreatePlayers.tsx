import React, {useState} from "react";
import {ColumnContainer} from "../SinglePlayerComponent/SinglePlayerComponent.css";

const CreatePlayers = (props: any) => {
    const [namePlayer1, setNamePlayer1] = useState('');
    const [namePlayer2, setNamePlayer2] = useState('');
    const [namePlayer3, setNamePlayer3] = useState('');
    const [namePlayer4, setNamePlayer4] = useState('');
    const [error, setError] = useState({
        inputIndex: -1,
        message: '',
    });

    const playersNames = [
        namePlayer1, namePlayer2, namePlayer3, namePlayer4
    ];
    const setNamesPlayers = [
        setNamePlayer1,
        setNamePlayer2,
        setNamePlayer3,
        setNamePlayer4
    ];

    const errorMessage = error.message && <div>{error.message}</div>;

    const InputComponent = ()=>{
        return props.multiplayer.players.map((player:any, index:number)=>{
            return <div key={`${player.name+"-"+index}`} className="input-group mb-3">
                     <input type="text"
                           className="form-control"
                           placeholder="Set player1 name"
                           value={playersNames[index]}
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           onChange={(e) => {
                               // setError({
                               //     inputIndex: -1,
                               //     message: '',
                               // });
                               setNamesPlayers[index](e.target.value)
                           }}
                    />
                    {error.inputIndex === index && errorMessage}
                    <div className="input-group-append">
                        {btnName(index)}
                    </div>
                </div>
        });
    };

    const onBtnClick = (index:number) => {
        const findDuplicate = props.multiplayer.players.some((player:any)=>{
            return player.name === playersNames[index]
        });
        console.log('playersNames', playersNames)
        if(playersNames[index].length === 0){
            setError({
                inputIndex: index,
                message: 'Name must contain at list 1 character.',
            })
        }
        else if (findDuplicate){
            setError({
                inputIndex: index,
                message: 'This name is already used.',
            })
        }else{
            setError({
                    inputIndex: -1,
                    message: '',
                });
            props.setPlayerName(playersNames[index], index);
        };
    };

    const btnName = (index:number)=> {
        return props.multiplayer.players[index].name === '' ? (
            <button className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={()=>onBtnClick(index)}>
                Submit
            </button>
        ) : (
            <button className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={()=>onBtnClick(index)}>
                Edit
            </button>
        )
    };

    const showStartGameBtn = ()=>{
        const playersHaveNames = props.multiplayer.players.every((player:any)=>{
          return player.name !== ''
      }) ;
        return playersHaveNames && error.message === '' && <button onClick={startGame}>start game</button>
    };

    const startGame = ()=>{
        props.setGameActive(true);
    };

    return (
        <ColumnContainer>
            {InputComponent()}
            {showStartGameBtn()}
        </ColumnContainer>
    );
};

export default CreatePlayers;