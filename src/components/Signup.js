export default function Signup(){
    const list = [
        "Learn new recipes and techniques",
        "Find out more about food history",
        "Get nutrition facts and diet plans",
        "Contribute your own dishes",
        "Exclusive access to cooking livestreams",
        "Participate in MiddleEats cook-offs"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/food/img_3.webp" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Why join us?</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Sign-up today!</button>
            </div>
        </div>
    )
}