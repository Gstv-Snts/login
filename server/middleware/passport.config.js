import passport from 'passport-local'
import bcrypt from 'bcrypt'

const LocalStrategy = passport.Strategy
const initialize = (passport, getUserByUsername, getUserById) => {
    console.log("COMEÇANDO INITIALIZE");
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username)
        console.log(user);
        if (user == null) {
            return done(null, false, { message: 'No user found' })
            console.log("usuario não encontrado");
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                console.log("senha correta");
                return done(null, user)
            } else {
                console.log("senha errada");
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

export default initialize