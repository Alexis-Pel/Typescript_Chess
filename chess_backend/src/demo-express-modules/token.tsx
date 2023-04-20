const jwt = require('jsonwebtoken')
export function checkToken(token: string) {
    // Vérifiez si le token commence par "Bearer" et séparez le token réel du préfixe
    const [prefix, realToken] = token.split(' ')
    if (prefix !== 'Bearer')
        return false

    // Décodage du token et vérification de la signature
    const decodedToken = jwt.verify(realToken, process.env.SECRET)

    return decodedToken
}