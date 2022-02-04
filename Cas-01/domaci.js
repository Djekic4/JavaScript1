var domaci={
    prviZadatak(niz){
        for(i=0;i<niz.lenght;i++){
            console.log(niz[i]) 
    }
},
drugiZadatak(niz){
    for(i=0;i<niz.lenght;i++){
        if(niz[i]%2==0){
            console.log(niz[i])
        }
    }
},
treciZadatak(niz){
    var zbir=0;
    for(i=0;i<niz.lenght;i++){
        zbir+=niz[i];
    }
    return zbir;
},
cetvrtiZadatak(niz){
    var prvi=niz[0];
    var zbir=0;
    for(i=0;i<niz.lenght;i++){
        if(niz[i]>prvi)
        zbir++;
    }
    return zbir;
}
}
console.log(domaci.prviZadatak([1,2,3,2]))