import React from 'react'
import author from "../profile.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container-fluid about py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p className="text-light text-justify">Hi, welcome to my portfolio page. My name is Nenad and I'm front-end web developer. My current toolset includes React, Redux, Angular, TypeScript and all the other various frameworks, libraries and technologies related to them.</p>
                    <p className="text-light text-justify">I enjoy building interactive javascript applications. Send me the job and I will take care of all the code development, design planning or whatever other role you see me best in.</p>
                    <p className="text-light text-justify">In cases when you already have an existing team, but you could still use some help, contact me as well. I’ll fit in very quickly.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
