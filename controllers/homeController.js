exports.respondwithimage = (req,res) => {
    let image = req.params.image;
    res.render(image);
};