const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
ani1 = false;
window.onscroll = async () =>{
    ckscroll1();
    ckscroll2();
    await sleep(500);
    lists = document.getElementsByClassName("sec-2-li");
    if(scrollY>=2300){
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
    if(scrollY>=5000){
        for(var i=0;i<lists2.length;i++){
            lists2[i].style.transform="translateX(0px)";
            lists2[i].style.opacity="1";
            await sleep(150);
        }
    }
}
const chmlist = async (n) => {
    l = document.getElementById("music-list-choice");
    if(n==1){
        l.children[1].style.opacity="0";
        l.children[2].style.opacity="0";
        await sleep(500);
        l.children[2].style.display = "none";
        l.children[2].style.opacity="1";
        l.children[1].style.display = "";
        await sleep(500);
        l.children[1].style.opacity="1";
    }
    if(n==2){
        l.children[1].style.opacity="0";
        l.children[2].style.opacity="0";
        await sleep(500);
        l.children[1].style.display = "none";
        l.children[1].style.opacity="1";
        l.children[2].style.display = "";
        await sleep(500);
        l.children[2].style.opacity="1";
    }
}
const ckscroll2 = async () => {
    await sleep(500);
    lists3 = document.getElementsByClassName("sec-4-li");
    if(scrollY>=3700){
        for(var i=0;i<lists3.length;i++){
            lists3[i].style.transform="translateX(0px)";
            lists3[i].style.opacity="1";
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