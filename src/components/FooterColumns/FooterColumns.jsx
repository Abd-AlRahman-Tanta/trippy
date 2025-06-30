const FooterColumns = ({items}) => {
    return (
        <div className="columns">
            {
                items?.map ((item , index1) => {
                    return (
                        <div key={index1} className="column">
                            {item.title && <h2>{item.title}</h2>}
                            {
                                item?.lnks.map ((link , index) => {
                                    return (
                                        <a target="-blank" href= {link.lnk} key={index}>{link.text}</a>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FooterColumns
