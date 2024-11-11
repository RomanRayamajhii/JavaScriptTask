const box=document.getElementById("mykey");
document.addEventListener("keyup",event=> 
{
   
    box.style.background="pink";
    box.textContent="😂";
    console.log(`key up ${event.key}`);
}
);
document.addEventListener("keydown",event=> 
    {
        box.style.background="blue";
    box.textContent="😭";
        console.log(`key down ${event.key}`) ;
    }
    );