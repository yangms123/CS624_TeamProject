const contact = (req,res, contact) =>{
    res.render('contact',{
        // title: 'Fetch',
        // content: 'Welcome to Fetch!',
        contact
    }
    );
};

module.exports = {
    contact
};