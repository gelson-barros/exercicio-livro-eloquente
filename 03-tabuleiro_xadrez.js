var str = "";
for (let i = 1; i <= 8; i++) {
    for (let z = 1; z <= 8; z++) {
        //console.log(i,z);
        if(i%2 ==0){
            if(z%2 == 0){
                str += "#";
            }else{
                str += "*";
            }
        }else{
            if(z%2 == 0){
                str += "*";
            }else{
                str += "#";
            }
        }
        
    }
    str +='\n' 
    console.log(str)
    str = ""
    
}