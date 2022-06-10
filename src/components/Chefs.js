import ChefSocials from "./ChefSocials"

export default function Chefs(){
    const chefs = [
        {
            name: "Bader Najeeb",
            img: "/img/chefs/img_1.jpg",
            recipesCount: "12",
            cuisine: "Emirati",
        },
        {
            name: "Joudie Kalla",
            img: "/img/chefs/img_2.webp",
            recipesCount: "16",
            cuisine: "Palestinian",
        },
        {
            name: "Alan Geaam",
            img: "/img/chefs/img_3.jpg",
            recipesCount: "23",
            cuisine: "Lebanese",
        },
        {
            name: "Rakan AlOraifi",
            img: "/img/chefs/img_4.jpg",
            recipesCount: "19",
            cuisine: "Saudi"
        },
        {
            name: "Shams AlQassabi",
            img: "/img/chefs/img_5.jpg",
            recipesCount: "11",
            cuisine: "Qatari"
        },
        {
            name: "Adla Al Sharhan",
            img: "/img/chefs/img_6.jpg",
            recipesCount: "15",
            cuisine: "Kuwaiti"
        }
    ]
    return (
        <div className="section chefs">
            <h1 className="title">Our Partner Chefs</h1>
            <div className="top-chefs-container">
                { chefs.map(chef => <ChefSocials key={chef.name} chef={chef} />) }
            </div>
        </div>
    )
}