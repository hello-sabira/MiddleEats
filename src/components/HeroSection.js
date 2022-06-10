import Image from "./Image"

export default function HeroSection(){
     const images = [
         "/img/food/img_1.jpg",
         "/img/food/img_2.jpg",
         "/img/food/img_3.jpg",
        "/img/food/img_4.jpg",
         "/img/food/img_5.jpg",
         "/img/food/img_6.jpg",
         "/img/food/img_7.jpg",
         "/img/food/img_8.jpg",
         "/img/food/img_9.jpg"
     ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Who are we?</h1>
                <p className="info">MiddleEats is an ode to the Middle Eastern cuisine. Our aim is to showcase the most scrumptious dishes of the region. From authentic traditional recipes, to flavorful dazzling fusions, here you'll find it all. So what are you waiting for? Start exploring now!</p>
                <button className="btn">Explore</button> 
            </div>
            <div className="col gallery">
                
                { images.map((src, index) => (
                    <Image key={index} imgSrc={src} pt={"90%"} />
                )) } 
                
            </div>
        </div>
    )
}