
const Titles = ({about , items}) => {
    return (
        <>
            {
                items?.map((item, index) => {
                    return (
                        <div key={index} className={`titles ${index} ${about? "about" : ""}`}>
                            <h1>{item.head}</h1>
                            <p>{item.para}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Titles
