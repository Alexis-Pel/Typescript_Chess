# Exercice du Lundi apres-midi

Creer un systeme d'authentification simple.

Dans un premier temps, modifiez le module "user" pour qu'un utilisateur puisse s'inscrire et se connecter.

Ensuite, creer une nouvelle route afin de gerer les mots de passe perdu.

## Partie 2 : Creer une todo-list

Creer un module "todo" afin que les utilisateurs puisse recuperer leurs todo-lists personelles via l'API

Contraintes:
- Il faut etre authentifie afin de recuperer ses todos-lists
- Je ne peux pas recuperer les todos-lists des autres utilisateurs
- Je peux creer une nouvelle todo-list (elle possede un titre, et des todos)
- Je peux supprimer une todo-list qui m'appartient
- Je peux ajouter et supprimer des todos d'une todo-list
- Je peux changer le statut d'une todo
- L'authentification se fait avec un JWT passer dans le header "Authorization"

Utilisez MongoDB, ou un autre systeme de base de donnee si vous preferez.


