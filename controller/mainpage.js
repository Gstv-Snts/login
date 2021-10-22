export const getMainPage = (req, res) => {
  res.render('mainpage')
}

export const disconnectUser = (req, res) => {
  req.logOut()
  res.redirect('/login')
}
