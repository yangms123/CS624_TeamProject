const aboutUs = (req,res, aboutUs) =>{
    res.render('aboutUs',{
        // title: 'Fetch',
        // content: 'Welcome to Fetch!',
        aboutUs
    }
    );
};

//3. expose the index function as a method
module.exports = {
    aboutUs
};