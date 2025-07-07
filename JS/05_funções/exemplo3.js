function fn(cb){
    console.log('executar função de callback');
    console.log(typeof cb);
    cb();
}

fn (function(){
    console.log('funçãopassada por paramentros');
});

fn(callback);

const objeto ={
    nome: "carlos",
    callback
}

objeto.callback();