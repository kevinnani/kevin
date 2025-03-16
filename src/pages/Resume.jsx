import resum from '../assets/NAVEEN KUMAR SARILLA.pdf'

export const Resume = () => {
    return (
        <>
        <div className="container">
            <div className="rem_container">
                <h3>Resume</h3>

            <a className='btn btn-outline-dark btn-lg' href={resum  } target="_blank">My Resume</a>
            </div>
        </div>
        </>
    )
}