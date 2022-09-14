
    let s1="images/Camp.jpg"
    let s2="images/ganesh.jpg"
    let s3="images/elephent.jpg"
    let s4="images/mountain.jpg"
    let s5="images/tiranga.jpg"

function exchange(temp){
    let m=document.getElementById("2")
    let n=document.getElementById(temp)
    
        let veryTemp = m.src;
        m.src = n.src;
        n.src = veryTemp;
}