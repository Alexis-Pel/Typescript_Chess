# Demo Express

La meilleure version est dans le dossier `demo-express-modules`

## La decoupe des fichiers

- Chaque dossier est un module contenant ses interfaces, routes, controller et services
- Le dossier `common` contient les fichiers utiles aux differents modules
- Vous pouvez ajoutez des modules/dossiers a votre guise

## Le router

- Soit vous importez 1 par 1 les router des differents modules dans `server.ts`
- Soit vous les importez dynamiquement (a decouvrir, voir fonction `import`)

## Les controller

- Ils ont toujours comme signature de fonction: `(req: Request, res: Response)`
- Ils utilisent les services pour repondre a la demande de l'utilisateur

## Les services

- C'est le coeur de votre business logic
- C'est ici qu'on touche a la DB, interdiction d'acceder a la DB depuis les controllers

# Les variables d'environnement

Installez le package `dotenv`

```
npm i -S dotenv
```

Creez un fichier .env a la racine du dossier (au meme niveau que package.json)
Ce fichier contiendra les variables d'environnement de votre projet.

Les variables d'environnement sont des "Secrets" que l'on ne peut pas mettre sur notre repo.
Comme les identifiants de connexion a la DB, et autre secrets.

Exemple de fichier .env
```
MONGO_URI=mongodb://url_de_co_a_la_db
MONGO_DB_NAME=test_auth_api
```

Vous pourrez acceder aux variables d'environnement via `process.env.MONGO_URI` par exemple.

Dans index.ts importez dotenv, et sa fonction `config`
Appelez config avant tout.
(voir index.ts)
