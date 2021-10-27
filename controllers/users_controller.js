
module.exports.profile = function(req ,res) {
   return res.end('<h1> User Profile </h1>');
}

module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    });
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    });
}

// get the sign up data
module.exports.create = function( req, res) {
   // To Do
}

// sign in and crate a session for the user
module.exports.createSession = function( req, res) {
   // To later
}

