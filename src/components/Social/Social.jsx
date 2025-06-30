

const Social = ({icons}) => {
    return (
        <div className="social">
            {
                icons?.map((icon , index) => {
                    return (
                        <a target="-blank" href= {icon.link} key={index}>{icon.icn}</a>
                    )
                })
            }
        </div>
    )
}

export default Social
