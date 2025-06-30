

const Cards = ({ items }) => {
    return (
        <div className="cards">
            {
                items?.map((item, index) => {
                    return (
                            <div key = {index} className="card">
                                <div className="img">
                                    <img src={item.image} alt="" />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        )
                })
            }
        </div>
    )
}

export default Cards
