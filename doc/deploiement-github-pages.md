# Déployer le site sur GitHub Pages

Ce projet est configuré pour déployer **manuellement** le build Vite vers la branche `prod` via GitHub Actions.

## Pré-requis

- Le repository est sur GitHub
- La branche `main` contient ce workflow : `.github/workflows/deploy.yml`
- Les dépendances sont installables avec `npm ci`

## 1) Configurer GitHub Pages (une seule fois)

1. Ouvrir le repository sur GitHub.
2. Aller dans **Settings > Pages**.
3. Dans **Build and deployment** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `prod`
   - **Folder** : `/(root)`
4. Enregistrer.

## 2) Lancer un déploiement

Le déploiement n'est **pas automatique** sur `push`.

1. Aller dans l'onglet **Actions**.
2. Ouvrir le workflow **Deploy to GitHub Pages**.
3. Cliquer sur **Run workflow**.
4. Sélectionner la branche `main` puis confirmer.

Le workflow va :

- cloner le repo,
- installer les dépendances,
- exécuter `npm run build`,
- publier `dist/` dans la branche `prod`.

## 3) URL du site

L'URL publique est :

- `https://adrien-cardinale.github.io/threejs-pendulum/`

> Remarque : comme l'application est construite avec Vite, la base est configurée pour ce repository.