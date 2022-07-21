function game(janken) {
    let message = '';
    let player = '';
    let c_option = '';
    let option = ['グー', 'チョキ', 'パー']
    let random = Math.random(option);
    let r_janken = Math.floor(random*3);

    if (janken === 0) {
        player = 'あなた：グー';
    } else if (janken === 1) {
        player = 'あなた：チョキ';
    } else if (janken === 2) {
        player = 'あなた：パー';
    }

    console.log(janken);
    console.log(player);
    const y = document.querySelector('#you');
    y.textContent = player;


    if (r_janken === 0) {
        c_option = '相手：グー';
    } else if (r_janken === 1) {
        c_option = '相手：チョキ';
    } else if (r_janken === 2) {
        c_option = '相手：パー';
    }

    console.log(r_janken);
    console.log(c_option);
    const e = document.querySelector('#enemy');
    e.textContent = c_option;


    if (janken === r_janken) {
        console.log('あいこです')
        message = '勝敗：あいこです'
    } else if(janken === 0 && r_janken === 1) {
        console.log('あなたの勝ちです')
        message ='勝敗：あなたの勝ちです'
    } else if(janken === 0 && r_janken === 2) {
        console.log('あなたの負けです')
        message ='勝敗：あなたの負けです'
    } else if(janken === 1 && r_janken === 2) {
        console.log('あなたの勝ちです')
        message ='勝敗：あなたの勝ちです'
    } else if(janken === 1 && r_janken === 0) {
        console.log('あなたの負けです')
        message ='勝敗：あなたの負けです'
    } else if(janken === 2 && r_janken === 0) {
        console.log('あなたの勝ちです')
        message ='勝敗：あなたの勝ちです'
    } else if(janken === 2 && r_janken === 1) {
        console.log('あなたの負けです')
        message ='勝敗：あなたの負けです'
    }



    const abc = document.querySelector('#result');
    abc.textContent = message;
}