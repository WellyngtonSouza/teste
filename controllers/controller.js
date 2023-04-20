



function all(req, res) {

    try {
        res.render("index")
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

let database = [

]


function add (req, res){

    database.push({tarefa : req.body})
    console.log(database)
    res.render("index", {database : database})
}

export { all , add}
