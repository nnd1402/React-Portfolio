import React from 'react'
import author from "../braum.png"

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati veniam vero maxime laborum, architecto odit voluptatem hic error officia iste possimus eveniet, cumque qui culpa eum a distinctio nostrum. Non.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
