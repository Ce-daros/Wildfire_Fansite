const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
ani1 = false;
window.onload=scrollTo(0,0);
window.onscroll = async () =>{
    ckscroll1();
    await sleep(500);
    lists = document.getElementsByClassName("sec-2-li");
    if(scrollY>=500){
        for(var i=0;i<lists.length;i++){
            lists[i].style.transform="translateX(-50px)";
            lists[i].style.opacity="100%";
            await sleep(300);
        }
    }
}
const ckscroll1 = async () => {
    await sleep(500);
    lists2 = document.getElementsByClassName("sec-3-btn");
    if(scrollY>=2200){
        for(var i=0;i<lists2.length;i++){
            lists2[i].style.transform="translateX(0px)";
            lists2[i].style.opacity="1";
            await sleep(150);
        }
    }
}
const scrollEx = async (n) =>{
    while(true){
        scrollTo(0,Math.ceil(scrollY+((n*window.innerHeight)-scrollY)/50))
        await sleep(50);
        if(parseInt(scrollY)==parseInt(window.innerHeight))break;
    }
}
const bg_move = async(obj) => {
    while(1){
        obj.style.backgroundPosition=String(rNum(10,70))+"% "+String(rNum(10,70))+"%";
        obj.style.backgroundSize=String(rNum(160,250))+"%";
        await sleep(2900);
    }
}
function rNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 