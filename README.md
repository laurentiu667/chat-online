# Installation et Lancement de l'Application

Ce guide vous aidera à configurer et lancer l'application.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

---

## Étapes d'installation

### 1. Installer les dépendances Node.js
Exécutez la commande suivante dans le terminal pour installer les dépendances Node.js :  

```bash
npm install

2. Installer les dépendances PHP

Utilisez Composer pour installer les paquets nécessaires :

composer require firebase/php-jwt
composer require cboden/ratchet

3. Installer Tailwind CSS et le plugin Motion

Ajoutez les dépendances pour Tailwind CSS et le plugin Motion :

npm i -D tailwindcss-motion
npm install -D tailwindcss

Lancement de l'Application

Suivez les étapes ci-dessous pour démarrer l'application :
1. Démarrer le serveur Node.js (mode développement)

Exécutez la commande suivante pour lancer le serveur Node.js :

npm run dev

2. Démarrer le serveur PHP

Lancez un serveur PHP local avec la commande suivante :

php -S localhost:8000

3. Démarrer le serveur de socket

Accédez au répertoire du serveur de socket, puis exécutez la commande correspondante :

cd chat-online/server/socket-server
php .\Chat-server.php

![connexion et page index](https://github.com/laurentiu667/chat-online/blob/main/images-markdown/1.PNG?raw=true)
![chat](https://github.com/laurentiu667/chat-online/blob/main/images-markdown/2.PNG?raw=true)
