import Swal from "sweetalert2";

export const showAlertAndChangeComputerResign = (props:any, winner:string, setWinner:(winner:string)=>void) => {
    props.resignFromComputerDraw();
    props.resignFromPlayerDraw();
    winner === '' && setWinner('computer');
    Swal.fire({
        title: 'OCH ... Game Over! You lose!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};

export const showAlertAndChangeBothResignForPositive = (props:any, winner:string, setWinner:(winner:string)=>void) => {
    props.resignFromComputerDraw();
    props.resignFromPlayerDraw();
    winner === '' && setWinner('player');
    Swal.fire({
        title: 'You win! Congrats!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};

export const showAlertAndChangeBothResignForNegative = (props:any, winner:string, setWinner:(winner:string)=>void) => {
    props.resignFromComputerDraw();
    props.resignFromPlayerDraw();
    winner === '' && setWinner('computer');
    Swal.fire({
        title: 'You lose! Revenge?',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};

export const showAlertAndChangeBothResignForTie = (props:any, winner:string, setWinner:(winner:string)=>void) => {
    props.resignFromComputerDraw();
    props.resignFromPlayerDraw();
    winner === '' && setWinner('-');
    Swal.fire({
        title: 'It\'s amazing! We have a tie!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};

export const showAlertPositive = (winner:string, setWinner:(winner:string)=>void)=> {
    winner === '' && setWinner('player');
    Swal.fire({
        title: 'You went head to head and you win!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};

export const showAlertNegative = (winner:string, setWinner:(winner:string)=>void)=>{
    winner === '' && setWinner('computer');
    Swal.fire({
        title: 'Not this time, you lose!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};

export const showQuickWinAlertPositive=(winner:string, setWinner:(winner:string)=>void)=>{
    winner === '' && setWinner('player');
    Swal.fire({
        title: 'You bastard! You are a winner!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};

export const showQuickWinAlertNegative=(winner:string, setWinner:(winner:string)=>void)=>{
    winner === '' && setWinner('computer');
    Swal.fire({
        title: 'You lose! The computer was definitely cheating!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
};