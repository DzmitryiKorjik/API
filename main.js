const url = "./recettes.json";
// Fetch du json pour obtenir un tableau
// On utilisera des méthodes sur les tableaux
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Données récupérées :", data);
    console.log("================================================");

    // Length - Compter le nombre de recettes
    if (Array.isArray(data)) {
      const nombreDeRecettes = data.length;
      console.log(`Il y a ${nombreDeRecettes} recettes.`);

      // ForEach - Afficher uniquement les difficultés de chaque recette
      data.forEach((recettes) => {
        console.log(
          `Difficulté de la recette "${recettes.title}": ${recettes.difficulty}`
        );
      });

      // Reduce - Calculer la moyenne des difficultés des recettes
      const difficultésSomme = data.reduce((accumulator, recette) => {
        return accumulator + recette.difficulty;
      }, 0);
      const difficultésMoyenne = difficultésSomme / nombreDeRecettes;
      console.log("================================================");
      console.log(
        `La moyenne des difficultés des recettes est: ${difficultésMoyenne}`
      );
      console.log("================================================");

      // Filter - Filtrer les recettes qui contiennent le mot 'tacos'
      const tacosRecettes = data.filter((resettes) =>
        resettes.category.toLowerCase().includes("tacos")
      );
      console.log("Recettes contenant 'tacos':", tacosRecettes);
      console.log("================================================");

      // Map - Mettre toutes les difficultés a 1
      const difficultésModifiées = data.map((recettes) => {
        return { ...recettes, difficulty: 1 };
      });
      console.log("Nouvelles difficultés des recettes:", difficultésModifiées);
      console.log("================================================");
    } else {
      console.error("Le JSON n'est pas un tableau.");
      console.log("================================================");
      return;
    }
  } catch (err) {
    console.error("Erreur lors du chargement du JSON :", err);
    console.log("================================================");
  }
}
fetchData();


// La fonction IIFE
(async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  console.log(posts.slice(0, 3)); // 3 premier posts
})();
