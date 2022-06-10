import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/Recipe"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Machboos",
            image: "/img/recipe/img_5.jpg",
            authorImg: "/img/chefs/img_1.jpg",
            desc: "Chicken machboos is a Middle Eastern dish of spiced rice cooked with chicken broth, topped with roasted chicken and toasted nuts"
        }, 
        {
            title: "Luqaimat",
            image: "/img/recipe/img_2.jpg",
            authorImg: "/img/chefs/img_4.jpg",
            desc: "Sweet Dumplings, crunchy on the outside and perfectly soft inside, is a popular Arabic sweet enjoyed mainly during Ramadan."
        },
        {
            title: "Tabbouleh",
            image: "/img/recipe/img_4.jpg",
            authorImg: "/img/chefs/img_3.jpg",
            desc: "Fresh and easy to prepare, tabbouleh is a traditional Middle Eastern grain salad made with bulgur wheat, fresh herbs, tomatoes, lemon juice, and olive oil."
        },
        
        
        {
            title: "Fattoush",
            image: "/img/recipe/img_1.jpg",
            authorImg: "/img/chefs/img_2.webp",
            desc: "Fattoush, a salad made in Lebanese, Syrian, and Palestinian kitchens, is an ideal way to use up day-old pita."
        }, 
        {
            title: "Balaleet",
            image: "/img/recipe/img_10.jpg",
            authorImg: "/img/chefs/img_6.jpg",
            desc: "Balaleet is a delicious salty and sweet breakfast dish that is enjoyed on a regular basis in Kuwait and common to all Gulf countries."
        },
        {
            title: "Hareeth",
            image: "/img/recipe/img_3.jpg",
            authorImg: "/img/chefs/img_5.jpg",
            desc: "Harees, Jareesh, boko boko, or harisa is a dish of boiled, cracked, or coarsely-ground wheat, mixed with meat and seasoned."
        },
        {
            title: "Chicken Shawarma",
            image: "/img/recipe/img_7.jpg",
            authorImg: "/img/chefs/img_4.jpg",
            desc: "Shawarma is a popular Levantine dish consisting of meat cut into thin slices, stacked in a cone-like shape, and roasted on a slowly-turning vertical rotisserie or spit."
        },
        {
            title: "Musakhan",
            image: "/img/recipe/img_8.jpg",
            authorImg: "/img/chefs/img_2.webp",
            desc: "Musakhan is roast chicken, heavily scented with sumac and and a few other warm spices and served with caramelized onion."
        },
        {
            title: "Falafel",
            image: "/img/recipe/img_9.jpg",
            authorImg: "/img/chefs/img_1.jpg",
            desc: "Falafel is a deep-fried ball or patty-shaped fritter in Middle Eastern cuisine made from ground chickpeas, broad beans, or both."
        },
        {

            title: "Kibbeh",
            image: "/img/recipe/img_11.jpg",
            authorImg: "/img/chefs/img_3.jpg",
            desc: "Kibbeh is a family of dishes based on spiced ground meat, onions, and grain, popular in Middle Eastern cuisine."
        },
        {
            title: "Mutabbaq",
            image: "/img/recipe/img_12.jpg",
            authorImg: "/img/chefs/img_5.jpg",
            desc: "Kibbeh is a family of dishes based on spiced ground meat, onions, and grain, popular in Middle Eastern cuisine."
        },
        {
            title: "Kabsa Lehm",
            image: "/img/recipe/img_6.jpg",
            authorImg: "/img/chefs/img_4.jpg",
            desc: "Kabsa is a comforting, one pan chicken and rice dish with layers of flavorful Middle Eastern spices."
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}