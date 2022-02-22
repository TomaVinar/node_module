
class SignInController {
    getSignIn (req, res) {
        res.render('sign');
    }

    getCurrentUser (req, res) {
        const {id} = req.user;
        res.redirect(`/users/${id}`);
    }
}

module.exports = new SignInController();