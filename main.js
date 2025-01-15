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

      // Shift - Supprimer la premiere recettes
      const recettesSuprimer = data.shift();
      console.log("Recettes supprimées:", recettesSuprimer);
      console.log("================================================");

      // Unshift - ajouter une recette en première position
      const nouvelleRecette = {
        id: "recipe-01",
        title: "Taco",
        difficulty: 1,
        category: "Taco",
        description:
          "Des tacos colorés et pleins de saveurs, avec une garniture riche et une sauce épicée maison.",
        ingredients: [
          "doloribus dignissimos enim",
          "rerum voluptatum dolorem",
          "repellat veniam quia",
          "non aspernatur neque",
          "ut fugit repellendus",
          "",
        ],
        instructions: [
          "et sed iste",
          "nisi commodi non",
          "et rerum aut",
          "ut hic atque",
          "laborum suscipit sed",
          "",
        ],
        imageUrl: "https://i.imgur.com/NWcAneH.png",
        date: "2025-01-15",
        author: "Dzmitryi",
      };
      data.unshift(nouvelleRecette);
      console.log("Nouvelles données avec la nouvelle recette ajoutée :", data);
      console.log("================================================");

      // Pop - Supprimer la derniere recette
      const derniereRecetteSuprimer = data.pop();
      console.log("Recettes supprimées:", derniereRecetteSuprimer);
      console.log("================================================");

      // Push - Ajouter une recette en derniere position
      data.push(nouvelleRecette);
      console.log("Nouvelles données avec la nouvelle recette ajoutée :", data);
      console.log("================================================");

      // Slice - Extraire les 3 dernières recettes
      const dernièresRecettes = data.slice(-3);
      console.log("Dernières recettes :", dernièresRecettes);
      console.log("================================================");

      // Splice - Remplacer la première recette par 2 nouvelles recettes
      const nouvellesRecettesAjoutées = [
        {
          id: "recipe-07",
          title: "Soupe",
          difficulty: 1,
          category: "Tomato,Soup",
          description:
            "Une soupe de tomate onctueuse et réconfortante, parfaite pour les soirées froides.",
          ingredients: [
            "ullam et aut",
            "velit distinctio ipsum",
            "cum totam iusto",
            "exercitationem est rerum",
            "iusto aspernatur porro",
            "",
          ],
          instructions: [
            "nobis est qui",
            "totam quo error",
            "consequatur expedita tempora",
            "nostrum aliquid et",
            "minus qui aut",
            "",
          ],
          imageUrl: "https://i.imgur.com/tpEhz1w.png",
          date: "2024-02-22",
          author: "john Doe",
        },
        {
          id: "recipe-08",
          title: "Sushi",
          difficulty: 4,
          category: "Sushis",
          description:
            "Des sushis frais avec une sauce riche et un mélange de saveurs.",
          ingredients: [
            "hic aliquam et",
            "autem odit est",
            "nemo aut iusto",
            "reprehenderit molestias et",
            "et et nulla",
            "",
          ],
          instructions: [
            "in et aspernatur",
            "autem dolores at",
            "esse eius aliquid",
            "recusandae ea earum",
            "assumenda est sed",
            "",
          ],
          imageUrl: "https://i.imgur.com/YAKPFDc.png",
          date: "2024-02-22",
          author: "john Doe",
        },
      ];
      let spliceRecettes = data.splice(0, 2, ...nouvellesRecettesAjoutées);
      console.log(
        "Nouvelles données avec les nouvelles recettes ajoutées :",
        data
      );
      console.log("data suprimer :", spliceRecettes);
      console.log("================================================");

      // FindIndex - Trouver l'index de la recette la plus difficile
      let findINdexRecette = data.findIndex(
        (recette) =>
          recette.difficulty ===
          Math.max(...data.map((recette) => recette.difficulty))
      );
      console.log("Index de la recette la plus difficile :", findINdexRecette);
      console.log("================================================");
      const maxDifficulty = Math.max(
        ...data.map((recette) => recette.difficulty)
      );
      console.log("maxDifficulty :", maxDifficulty);
      const mostDifficultRecettes = data.filter(
        (recette) => recette.difficulty === maxDifficulty
      );
      console.log("La recettes la plus difficile :", mostDifficultRecettes);

      // Find - Trouver la recette la plus difficile
      const maxFindDifficulty = Math.max(
        ...data.map((recette) => recette.difficulty)
      );

      const findRecette = data.find(
        (recette) => recette.difficulty === maxFindDifficulty
      );
      console.log("Recette la plus difficile :", findRecette);
      console.log("================================================");

      // Includes - Voir si les recettes contienne des recettes de  "Pizza"
      const categories = data.map((recette) => recette.category.toLowerCase());
      const nameRecette = "Pizza";

      let pizzaRecettes = false;

      categories.forEach((category) => {
        if (category === nameRecette.toLowerCase()) {
          pizzaRecettes = true;
        }
      });

      console.log(
        "Les recettes contiennent des recettes de 'Pizza' :",
        pizzaRecettes
      );
      console.log("================================================");
    } else {
      console.error("Le JSON n'est pas un tableau.");
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
  console.log("================================================");
  console.log(posts.slice(0, 3)); // 3 premier posts
})();
