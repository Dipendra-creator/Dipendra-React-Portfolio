function ProjectsCard(props) {
    return (
        <div className="pro Card">
            <i className='pro_img ex_icon fa fa-link' />
            <p><span className="high">{props.name}</span> - {props.info}</p>
        </div>
    )
}

export default ProjectsCard;