import React from 'react';

import Timeline from "../Timeline/Timeline";

const About = props => {
    return (
        <div>
            <main >
                <h5 className="heading content"> Software Development | System Design | Global Virtual Team Leader</h5>
                <div className ="content">
                    <p>
                        Dedicated Technical Leader showcasing 20 years of experience setting-up and managing mission-critical financial IT services and large scale applications for industry leaders, including Citibank and Nucleus Software. An assertive leader respected for leading and managing multiple project teams spread across different geographical locations, ensuring judicious resource allocation and utilization.
                    </p>
                    <p>
                        <b>Area of Expertise:</b>
                    </p>
                    <p>
                        Software Development | Software Engineering | Technical Program Management | Technical Project Management | Agile | Distributed Application Design | Software Development Life Cycle | Back-end Development | Workflow Systems Development | Business Process Management | Vendor Management | Full-Stack Software Engineering
                    </p>
                    <p>
                        <b>Leadership:</b>
                    </p>
                    <p>Lead Global Engineering Teams | Lead Virtual Teams
                    </p>
                </div>
                <hr/>
            </main>
            <Timeline/>
        </div>
    )
}

export default About;
