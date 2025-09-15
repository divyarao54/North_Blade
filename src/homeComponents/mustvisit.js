import './mustvisit.css'

const MustVisit = () => {
    return(
        <div className='mv-container'>
            <div className="mv-line-first"/>
            <p className="mv-title">Must-Visit</p>

                        <div className="mv-line-second"
                            style={{
                                /* Line 3 */

                                position: 'relative',
                                width: '35%',
                                height: '0px',
                                left: '0',
                                top: '0',

                                border: '5px solid #C4C4C4'

                            }}
                        />
        </div>
    )
}

export default MustVisit;