import bcrypt from 'bcrypt'
import localStrategy from 'passport-local'

const LocalStrategy = localStrategy.Strategy

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

export function initialize(passport, findUserByUsername, findUserById) {
  const authenticateUser = async (username, password, done) => {
    const user = await findUserByUsername(username)
    if (user == null) {
      return done(null, false, { message: `User do not exist!` })
    }

    try {
      if (await comparePassword(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect!' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(
    new LocalStrategy({ usernameField: 'username' }, authenticateUser)
  )
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, findUserById(id))
  })
}
