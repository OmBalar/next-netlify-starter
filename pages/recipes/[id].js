import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "@components/Footer";
import recipesData from "../../data/recipes.json";
import styles from "./recipe.module.css";

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;

  const recipes = Array.isArray(recipesData) ? recipesData : recipesData.recipes || [];
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="container centered">
        <Header />
        <main>
          <div style={{ padding: "2rem", textAlign: "center" }}>Recipe not found</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container centered">
      <Head>
        <title>{recipe.title} - Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className={styles.recipeContainer}>
          <button onClick={() => router.back()} className={styles.backButton}>
            ← Back to Recipes
          </button>
          <h1 className={styles.title}>{recipe.title}</h1>
          <p className={styles.description}>{recipe.description}</p>
          <div className={styles.recipeInfo}>
            <span>Prep Time: {recipe.prepTime}</span>
            <span>Cook Time: {recipe.cookTime}</span>
          </div>

          <div 
            className={styles.recipeContent}
            dangerouslySetInnerHTML={{ __html: recipe.html }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}