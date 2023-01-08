function createAndCheck(){
    //const date = new Date(); //прямо сейчас
    //const date = new Date(new Date - 30 * 1000); //30 сек. назад
   // const date = new Date(new Date - 5 * 60 * 1000); //5 мин. назад
    const date = new Date(new Date - 86400* 4 * 1000); //другой случай

    alert(formatDate(date));
}

function formatDate(date){
    let now = new Date();
    let difference = (now - date)/1000;

    if (difference < 1){
        return `прямо сейчас`;
    }
    else if(difference < 60){
        return `${difference} сек. назад`;
    }
    else if(difference < 3600){
        return `${difference/60} мин. назад`;
    }
    else{
        return prepareDate(date);
    }
}

function prepareDate(date){
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
      };

      return date.toLocaleString("ru", options);
}


document.querySelector(".button").addEventListener("click", createAndCheck);