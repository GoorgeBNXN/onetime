function txDate(){
    state = new Date();

    var day = state.getDate();
    var mnth = (state.getMonth() + 1);
    var fyr = state.getFullYear();
    var tm = state.getHours() +':'+state.getMinutes()+ ':'+state.getSeconds();

    var dateTime =mnth+'/'+day+'/'+fyr +', '+ tm + ' PM';

    document.getElementById('txtime').innerHTML = dateTime;
}

        txDate();