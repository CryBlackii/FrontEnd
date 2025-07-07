function formatarNome(nomeCompleto){
    nomeCompleto = nomeCompleto.trim()
    if(primeiroEspaco < 0){
        return nomeCompleto
    }
    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobrenome = nomeCompleto.slice(primeiroEspaco+1)
    return sobrenome + ", " + primeiroNome
}