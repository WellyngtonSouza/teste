

let data = [

]


function all(req, res) {

    try {
        res.render("index", {database : data})
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}




function add (req, res){
    let tarefa = req.body.tarefa
    data.push({tarefa : tarefa})
    
    res.redirect("/")
}

export { all , add}
