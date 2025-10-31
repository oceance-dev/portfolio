# Guide pour ajouter des images au portfolio

## 📁 Structure des dossiers

Placez vos images dans le dossier : `src/Image/`

## 🌄 Image de fond avec opacité (Paysage)

### Étape 1 : Ajouter votre image de paysage
Ajoutez votre image de paysage dans `src/Image/` :
- Exemple : `background.jpg` ou `paysage.jpg`
- Format paysage recommandé : 1920x1080px ou plus

### Étape 2 : Activer l'image de fond
Ouvrez `src/index.css` et modifiez la ligne 23 :

**Avant :**
```css
/* background-image: url('./Image/background.jpg'); */
```

**Après :**
```css
background-image: url('./Image/background.jpg');
```

### Étape 3 : Ajuster l'opacité (optionnel)
Ligne 28, vous pouvez modifier l'opacité :
```css
opacity: 0.1;  /* Valeur entre 0 (invisible) et 1 (pleine visibilité) */
```

Exemples :
- `0.05` = Très subtil
- `0.1` = Léger (par défaut)
- `0.15` = Moyennement visible
- `0.2` = Bien visible

## 🖼️ Images de projets (Page Profil)

### Étape 1 : Ajouter vos images
Ajoutez vos captures d'écran de projets dans `src/Image/` :
- `spotifarm.png` ou `spotifarm.jpg`
- `pictural.png` ou `pictural.jpg`

### Étape 2 : Importer dans Profil.jsx
Ouvrez `src/Pages/Profil/Profil.jsx` et ajoutez en haut du fichier :

```javascript
import "./Profil.css";
import spotifarmImg from "../../Image/spotifarm.png";
import picturalImg from "../../Image/pictural.png";
```

### Étape 3 : Utiliser les images
Modifiez le tableau `projects` :

```javascript
const projects = [
    {
        title: "Spotifarm",
        description: "Application d'agriculture de précision...",
        technologies: ["Web", "Imagerie satellite", "Agriculture"],
        link: "https://www.spotifarm.fr/",
        image: spotifarmImg  // ← Remplacez null par spotifarmImg
    },
    {
        title: "Pictural",
        description: "Outil d'aide à la prise de décision...",
        technologies: ["PHP", "Business Intelligence", "Dashboard"],
        link: "#",
        image: picturalImg  // ← Remplacez null par picturalImg
    }
];
```

## 🎨 Galerie (Page About)

### Étape 1 : Ajouter vos images
Ajoutez vos photos dans `src/Image/` :
- `gallery1.jpg`
- `gallery2.jpg`
- `gallery3.jpg`
- `gallery4.jpg`

### Étape 2 : Importer dans About.jsx
Ouvrez `src/Pages/About/About.jsx` et ajoutez en haut :

```javascript
import "./About.css";
import gallery1 from "../../Image/gallery1.jpg";
import gallery2 from "../../Image/gallery2.jpg";
import gallery3 from "../../Image/gallery3.jpg";
import gallery4 from "../../Image/gallery4.jpg";
```

### Étape 3 : Utiliser les images
Modifiez le tableau `galleryImages` :

```javascript
const galleryImages = [
    { id: 1, src: gallery1, alt: "Description photo 1" },
    { id: 2, src: gallery2, alt: "Description photo 2" },
    { id: 3, src: gallery3, alt: "Description photo 3" },
    { id: 4, src: gallery4, alt: "Description photo 4" }
];
```

## 📸 Photo de profil (Page Home)

Votre photo de profil est déjà configurée :
- Fichier actuel : `src/Image/Me.png`
- Pour la changer : remplacez `Me.png` par votre nouvelle photo (gardez le même nom)

## ✅ Formats recommandés

- **Projets** : 800x600px minimum, format JPG ou PNG
- **Galerie** : Images carrées (1:1), 500x500px minimum
- **Profil** : 400x400px, format PNG avec fond transparent si possible

## 🎯 Conseils

- Compressez vos images avant de les ajouter (utilisez TinyPNG ou similaire)
- Utilisez des noms de fichiers descriptifs sans espaces (ex: `mon-projet.jpg`)
- Formats supportés : JPG, PNG, WebP
