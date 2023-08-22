// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from 'react'
import './navbar.scss'
// import logo from '../../assets/gdsc_logo.svg'
import gdsc_logo from '../../assets/DSC IIITV International Campus, Diu Light Horizontal-Logo.png'

const Navbar = () => {

    const [isTeamMenuOpen, setTeamOpen] = useState(false)


    return (
        <header className={'navs'}>
            <div className={'navbar'} role={'navigation'}>
                <div className={'container'}>
                    <div className={'navbar-left'}>
                        <a className={'navbar-brand'} href={'/'}>
                            <img src={gdsc_logo} className={'svg'}
                                 alt={'Google Developer Student Clubs IIITV-ICD logo'}/>
                        </a>
                    </div>
                    <div className={'collapse navbar-collapse'} id={'main-nav'}>
                        <ul className={'navbar-right'}>
                            <li className={'navbar-menu'}>
                                <a href={'/about'}>
                                    About Us
                                </a>
                            </li>
                            <li className={'navbar-menu'}>
                                <a href={'/events'}>
                                    Events
                                </a>
                            </li>
                            <li className={`navbar-menu${isTeamMenuOpen ? ' open' : ''}`}>
                                <a href={''} className={'dropdown-toggle'} id={'involved-menu'}
                                   data-toggle={'dropdown'} aria-expanded={isTeamMenuOpen}
                                   onClick={(event) => {
                                       event.preventDefault();
                                       setTeamOpen((prevState) => !prevState)
                                   }}
                                >
                                    Our Team
                                    <span className={'caret'}></span>
                                </a>

                                <ul className={'team-menu dropdown-menu'} role={'menu'}>
                                    <li role={'presentation'}>
                                        <a role={'menu-item'} tabIndex={-1}
                                           href={'/leads'}
                                        >
                                            Leads
                                        </a>
                                    </li>
                                    <li role={'presentation'}>
                                        <a role={'menu-item'} tabIndex={-1}
                                           href={'/alumni'}
                                        >
                                            Alumni
                                        </a>
                                    </li>
                                    <li role={'presentation'}>
                                        <a role={'menu-item'} tabIndex={-1}
                                           href={'/volunteers'}
                                        >
                                            Volunteers
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className={'navbar-menu'}>
                                <a href={'/events'} aria-label={'JoinUs'}>
                                    Join Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar