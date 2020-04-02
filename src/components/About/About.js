import React from 'react';

import Timeline from "../Timeline/Timeline";

const About = props => {
    return (
        <div>
            <main >
                <h2 className="heading content"> Software Engineer and Software Development Manager</h2>
                <div className ="content">
                    <p>Dedicated Application Development Manager showcasing 19+ years of experience setting-up and
                        managing mission-critical financial IT services and large-scale applications for industry leaders,
                        including Citibank and Nucleus Software. Known for establishing IT infrastructure using the latest technology,
                        vendor development/management, budgeting, IT procurement and assuring compliance with policies,
                        processes, and tools. Design cutting edge technology solutions aligned with business requirements
                        within a short turnaround of time. An assertive leader respected for leading and managing multiple project
                        teams spread across different geographical locations, ensuring judicious resource allocation and utilization.
                        Articulate communicator capable of explaining and negotiating solution strategy and product offerings with clients,
                        key decision makers, and stakeholders to delivery strategic solutions. </p>
                </div>
                <hr/>
            </main>
            <Timeline/>
        </div>
    )
}

export default About;
