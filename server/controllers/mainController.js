/**
 * Get Homepage 
*/
exports.homepage = async (req,res) =>{

    const locals = {
        title : 'Pixel Pad',
        description : 'Simple Notes App'
    }
    res.render('index',{locals,
        layout: '../views/layouts/front-page'})
}

/**
 * Get About 
*/
exports.about = async (req,res) =>{

    const locals = {
        title : 'About - Notes App',
        description : 'Simple Notes App - About'
    }
    res.render('about',locals)
}