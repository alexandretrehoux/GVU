# Grandeur, Valeur, Unité — version iPhone / iPad (GitHub Pages)

Jeu d'entraînement de terminale, spécialité physique-chimie : chiffres significatifs, notation scientifique, grandeurs et unités. Par A. Trehoux.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Le jeu complet (questions, polices et graphismes inclus). |
| `manifest.webmanifest` | Nom, icône et affichage plein écran de l'application installée. |
| `sw.js` | Fonctionnement hors ligne après la première ouverture. |
| `icons/` | Icônes de l'écran d'accueil. |
| `.nojekyll` | Indique à GitHub de publier les fichiers tels quels. |

Le fichier `index.html` fonctionne seul, mais les autres fichiers sont nécessaires pour avoir l'icône et le mode hors ligne.

## Mise en ligne sur GitHub Pages

1. Créer un dépôt **public** sur GitHub, par exemple `gvu`.
2. Déposer **tout le contenu de ce dossier** à la racine du dépôt (bouton *Add file → Upload files*), y compris le dossier `icons`.
3. Dans le dépôt : *Settings → Pages → Build and deployment → Source : Deploy from a branch*, choisir la branche `main` et le dossier `/ (root)`, puis *Save*.
4. Après une à deux minutes, le jeu est accessible à l'adresse `https://<identifiant>.github.io/gvu/`.

## Installation sur iPhone ou iPad (élèves)

1. Ouvrir l'adresse dans **Safari**.
2. Toucher le bouton **Partager**, puis **« Sur l'écran d'accueil »**, puis **Ajouter**.
3. Lancer le jeu depuis l'icône « GVU ». Après cette première ouverture en ligne, il fonctionne sans connexion.

La progression est enregistrée sur l'appareil, dans l'application installée (elle est distincte de celle de Safari).
Sur Android, la même adresse ouverte dans Chrome propose aussi « Installer l'application ».

## Publier une mise à jour

1. Remplacer `index.html` dans le dépôt.
2. Les élèves reçoivent la nouvelle version au **deuxième lancement** effectué avec une connexion (le premier télécharge la mise à jour en arrière-plan).
3. Pour forcer un renouvellement complet (par exemple après un changement d'icônes), modifier aussi la ligne `const CACHE = 'gvu-v1';` de `sw.js` (`gvu-v2`, `gvu-v3`…).
