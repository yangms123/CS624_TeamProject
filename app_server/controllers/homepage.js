/*GET homepage controller */

//1. create an index function
// 2. include controller code for the home page

const homepage = (req,res, homepage) =>{
    res.render('homepage',{
        // title: 'Fetch',
        // content: 'Welcome to Fetch!',
        homepage
    }
    );
};




//3. expose the index function as a method
module.exports = {
    homepage
};