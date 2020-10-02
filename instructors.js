const fs = require('fs')
const data = require("./data.json")

//show
exports.show = function(req, res){
    const {id} = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })
    if(!foundInstructor) return res.send("not found")
    const space = ", "
    const instructor = {
        ...foundInstructor,
        age: "",        
        services: foundInstructor.services.split(","),
        create_at: "",
    }

    return res.render('instructors/show', {instructor})
}

//create
exports.post = function(req, res){
    /*recebendo as keys  */
    const keys = Object.keys(req.body)
    for(key of keys){
        // req.body.avatar_url 
        if(req.body[key] == ""){
            return res.send(`complete a ${key}`)
        } 
    }
    // desestruturando o req.body
    let {avatar_url, name, birth, gender, services} = req.body
    // modificando a data para numeros
    birth = Date.parse(birth)
    //criando data de crianção da conta com ID
    const create_at = Date.now()
    const id = Number(data.instructors.length + 1)

    //enviando o que e necessario
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        create_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Erro na escrita dos dados")

        return res.redirect("/instructors")
    })
    
  
}