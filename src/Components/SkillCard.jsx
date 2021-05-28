function SkillCard(props) {
    return (
        <div className="btn skill_card">
            <img className="skill_img" src={props.href} alt=""/>
            <h1>{props.name}</h1>
        </div>
    )
}

export default SkillCard;