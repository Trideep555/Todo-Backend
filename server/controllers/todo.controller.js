
const get = (req,res) => {
    res.send("this is todo get")
}
const add = (req,res) => {
    res.send("this is todo add")
}
const edit = (req,res) => {
    res.send("this is todo edit")
}
const delet  = (req,res) => {
    res.send("this is todo delete")
}

module.exports = {get,add,edit,delet}