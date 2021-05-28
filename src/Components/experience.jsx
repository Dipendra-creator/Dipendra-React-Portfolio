function Experience_card(props) {
    return (
        <div className="ex Card">
            <img className="ex_img" src={props.img} alt="img" />
            <div className="ex_text">
                <h1 className="high">{props.name}</h1>
                <hr className="ex_hr sec_hr" />
                <p>{props.intro}</p>
            </div>
            <div className="ex_left">
                <i className='ex_icon fa fa-github fa-lg' />
                <i className='ex_icon fa fa-linkedin fa-lg' />
            </div>
        </div>
    )
}

export default Experience_card;