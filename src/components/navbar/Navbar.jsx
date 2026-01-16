import React, { useEffect } from 'react'
import "./Navbar.scss"
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])


    const currentUser = {
        id: 1,
        username: "Aryan Mishra",
        isSeller: true
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="navbar_container">
                <div className="navbar_logo">
                    <Link className='link' to="/">
                        <span>Work</span>ora.
                    </Link>

                </div>
                <ul className='navbar_links'>
                    <li>Explore</li>
                    <li>How it Works</li>
                    <li>Become a Freelancer</li>
                    {!currentUser?.isSeller && <li>Become a Seller</li>}
                    {!currentUser && <li>Join</li>}
                    {currentUser && (
                        <div className="user" onClick={() => { setOpen(!open) }}>
                            <img src="data:image/jpeg;base64,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" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link className='link' to="/my-gigs">Gigs</Link>
                                            <Link className='link' to="/add">Add New Gigs</Link>
                                        </>
                                    )
                                }

                                <Link className='link' to="/orders">Orders</Link>
                                <Link className='link' to="/messages">Messages</Link>
                                <Link className='link' to="/logout">Logout</Link>
                            </div>}
                        </div>
                    )}
                </ul>

                {!currentUser && (
                    <div className="navbar_actions">
                        <button className="btn login">Sign In</button>
                        <button className="btn signup">Join</button>
                    </div>
                )}

            </div>
            {(active || pathname !== "/") && (
                <><hr />

                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Video & Animation
                        </Link>
                        <Link className="link menuLink" to="/">
                            Writing & Translation
                        </Link>
                        <Link className="link menuLink" to="/">
                            AI Services
                        </Link>
                        <Link className="link menuLink" to="/">
                            Digital Marketing
                        </Link>
                        <Link className="link menuLink" to="/">
                            Music & Audio
                        </Link>
                        <Link className="link menuLink" to="/">
                            Programming & Tech
                        </Link>
                        <Link className="link menuLink" to="/">
                            Business
                        </Link>
                        <Link className="link menuLink" to="/">
                            Lifestyle
                        </Link>
                    </div></>
            )}

        </div >
    )
}

export default Navbar