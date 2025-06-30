import "./Hero.css"
export default function Hero({image , title , desc , btn}) {
    return (
        <div className='hero'>
            <img src= {image} alt="" />
            <h1>{title}</h1>
            <p>{desc}</p>
            {btn && <button>{btn}</button>}
        </div>
    )
}
