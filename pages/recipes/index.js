import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'
import recipesData from '../../data/recipes.json'
import styles from './recipes.module.css'

export default function Recipes() {
  const recipes = recipesData.recipes || recipesData || [] // Handle both structures

  // Extract image URL from HTML
  const getImageFromHtml = (html) => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : '/placeholder-recipe.jpg';
  }

  return (
    <div className="container">
      <Head>
        <title>Recipes - Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className={styles.recipesContainer}>
          <h1 className={styles.title}>My Recipes</h1>
          <div className={styles.recipeGrid}>
            {recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`} className={styles.recipeLink}>
                <div className={styles.recipeCard}>
                  <img 
                    src={getImageFromHtml(recipe.html)} 
                    alt={recipe.title}
                    className={styles.recipeImage}
                  />
                  <div className={styles.recipeContent}>
                    <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                    <p className={styles.recipeDescription}>{recipe.description}</p>
                    <div className={styles.recipeInfo}>
                      <span>Prep: {recipe.prepTime}</span>
                      <span>Cook: {recipe.cookTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}