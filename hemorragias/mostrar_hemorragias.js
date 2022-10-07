function mudarimg(obj, novaimg){
    document.getElementById(obj).src = novaimg; 

};



function ler_json(arquivo){
    const json = require(arquivo);
    console.log(json)

    return json

};


function set_bone(arquivo){
    const json = require(arquivo);
    console.log(json.bone+".png")
    return json.bone+".png";

}

function set_brain(arquivo){
    
    const json = require(arquivo);

    return json.brain+".png";
}
function set_subdural(arquivo){
    const json = require(arquivo);

    return json.subdural+".png";
}
function set_heatmap(arquivo){
    const json = require(arquivo);

    return json.heatmap+".png";
}


var slice = ler_json("C:\\Users\\x\\Desktop\\DesenvolvimentoWeb-main\\hemorragias\\teste.json")
console.log(set_bone(slice))