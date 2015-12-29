# QCM TP A: Javascript dans Google Chrome Devtools

### QCM de révision du TP A

Contrairement aux prochains, ce devoir n'est pas noté mais tout de même *obligatoire*.

Il vous permettra de mieux retenir les concepts et commandes que nous avons utilisés

pendant le TP A, et donc de partir sur de bonnes bases pour le TP B de lundi prochain.

Il n'y a aucun piège, et toutes les réponses sont dans l'énoncé du TP A.

### 1. Comment s'appelle l'outil qui permet de manipuler le DOM HTML d'une page ouverte dans Google Chrome ?

- Sublime Text
- "Afficher le code source"
- Chrome Devtools

### 2. Comment s'appelle l'onglet de Devtools qui permet de dialoguer avec le navigateur en Javascript ?

- Le DOM
- La Console
- Sublime Text

### 3. Une fois jQuery injecté dans une page web, quelle commande faut-il saisir dans la console pour lister tous les éléments `<a>` (liens) contenus dans les éléments `<h3>` (sous-titres) ?

- $('h3 a')
- $('h3 a[0]')
- $('h3 a')[0]

### 4. Toujours avec jQuery, quelle commande retourne seulement le premier élément `<a>` contenu dans un `<h3>` de la page ?

- $('h3 a')
- $('h3 a')[0]
- $('h3 a')[1]

### 5. Laquelle de ces réponses n'est pas un des constituants de tout élément HTML ? (trouvez l'intrus)

- attribut
- contenu / texte
- clic
- type d'élément

### 6. Quelle commande Javascript retourne le titre d'un élément `<a>` (lien) ?

- $('a').getAttribute('title')
- $('a').innerText
- $('a').getTitle()

### 7. Quelle commande Javascript retourne l'URL de destination d'un élément `<a>` (lien) ?

- $('a').getAttribute('url')
- $('a').innerLink
- $('a').getAttribute('href')

### 8. Quelle commande Javascript permet de modifier la destination d'un élément `<a>` (lien) ?

- $('a').href = 'http://url...'
- $('a').setAttribute('href', 'http://...')
- $('a').innerText = 'http://url...'

### 9. Quelle commande Javascript permet d'afficher le message `Bonjour!` à l'utilisateur ?

- show('Bonjour!')
- $('a').setAttribute('Bonjour!')
- alert('Bonjour!')

### 10. Quelle commande Javascript permet d'empêcher que le navigateur change de page lorsque l'utilisateur clique sur un lien ?

- evt.preventDefault();
- alert('Non merci.')
- $('a').onclick = function(evt){}
