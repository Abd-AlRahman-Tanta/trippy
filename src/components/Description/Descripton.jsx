const Descripton = ({ images, title, para, rev }) => {
    return (
        <div className={`description ${rev && "reverse"}`}>
            <div className="title">
                <h1>{title}</h1>
                <p>{para}</p>
            </div>
            <div className="imgs">
                {
                    images?.map((image, index) => {
                        return (
                            <div key={index} className="img">
                                <img key={index} src={image} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Descripton
