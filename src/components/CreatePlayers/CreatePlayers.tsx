import React, {useState} from "react";
import {ColumnContainer} from "../SinglePlayerComponent/SinglePlayerComponent.css";

const CreatePlayers = (props: any) => {
    const [namePlayer1, setNamePlayer1] = useState('');
    const [namePlayer2, setNamePlayer2] = useState('');
    const [namePlayer3, setNamePlayer3] = useState('');
    const [namePlayer4, setNamePlayer4] = useState('');

    const [editPlayer1, setEditPlayer1] = useState(true);
    const [editPlayer2, setEditPlayer2] = useState(true);
    const [editPlayer3, setEditPlayer3] = useState(true);
    const [editPlayer4, setEditPlayer4] = useState(true);

    const editsActive = [
        editPlayer1,
        editPlayer2,
        editPlayer3,
        editPlayer4
    ];

    const setEditsActive = [
        setEditPlayer1,
        setEditPlayer2,
        setEditPlayer3,
        setEditPlayer4
    ];

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

    const errorMessage = error.message && <div className="text-danger">{error.message}</div>;
    const InputComponent = () => {
        return props.multiplayer.players.map((player: any, index: number) => {
            return <div key={`${player.name + "-" + index}`} className="col-sm-10">
                <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    {editsActive[index] ? <input type="text"
                                                 placeholder="Set player name"
                                                 className="col-sm-9"
                                                 value={playersNames[index]}
                                                 aria-label="Recipient's username"
                                                 aria-describedby="button-addon2"
                                                 onChange={(e) => {
                                                     setError({
                                                         inputIndex: -1,
                                                         message: '',
                                                     });
                                                     setNamesPlayers[index](e.target.value)
                                                 }}
                    /> : <div className="col-sm-9" style={{textAlign: 'center'}}>{player.name}</div>}
                    <div>
                        {btnName(index)}
                    </div>
                </div>
                {error.inputIndex === index && errorMessage}

            </div>
        });
    };

    const onBtnClick = (index: number) => {
        const findDuplicate = props.multiplayer.players.some((player: any) => {
            return player.name === playersNames[index]
        });
        if (playersNames[index].length === 0) {
            setError({
                inputIndex: index,
                message: 'Name must contain at list 1 character.',
            })
        } else if (findDuplicate) {
            setError({
                inputIndex: index,
                message: 'This name is already used.',
            })
        } else {
            setError({
                inputIndex: -1,
                message: '',
            });
            setEditsActive[index](false)
            props.setPlayerName(playersNames[index], index);
        }
        ;
    };

    const btnName = (index: number) => {
        return editsActive[index] ? (
            <button className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => onBtnClick(index)}>
                Submit
            </button>
        ) : (
            <button className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => setEditsActive[index](true)}>
                Edit
            </button>
        )
    };

    const showStartGameBtn = () => {
        const playersHaveNames = props.multiplayer.players.every((player: any) => {
            return player.name !== ''
        });
        return playersHaveNames && error.message === '' && <div className="row">
            <div className="col-4"></div>
            <button className="col-4" onClick={startGame}>start game</button>
            <div className="col-4"></div>
            </div>
    };

    const startGame = () => {
        props.setGameActive(true);
        props.setActivePlayer(props.multiplayer.players[0])
    };

    return (
        <div>
            {InputComponent()}
            {showStartGameBtn()}
        </div>
    );
};

export default CreatePlayers;